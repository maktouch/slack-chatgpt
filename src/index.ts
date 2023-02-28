import { openai } from "./config";
import { db } from "./lib/db";
import { createCompletion } from "./lib/openai";
import { getSlackConnection } from "./lib/slack";

interface SlackMetadata {
  from?: string;
  channel: string;
  team?: string;
}

async function ask(
  text: string,
  ts: string,
  { from, channel, team }: SlackMetadata
) {
  const previous = await db("prompts")
    .where({ ts })
    .orderBy("id", "DESC")
    .first();

  const dialog = (function () {
    if (!previous) {
      return openai.ai_setup;
    }

    return previous.dialog;
  })();

  const prompt = `${dialog}\n\nHuman: ${text}\n\nAI: `;

  const answer = await createCompletion(prompt);

  await db("prompts").insert({
    ts,
    dialog: `${prompt} ${answer}`,
    from,
    channel,
    team,
    created_at: new Date(),
  });

  return answer;
}

async function main() {
  const bolt = await getSlackConnection();

  await bolt.event("app_mention", async ({ event, say }) => {
    // remove the mention from the text
    const prompt = event.text.replace(/<@.+>/, "");

    // this is the thread id. if there's not thread, use the current message as future thread.
    // this is to keep the context of the conversation
    const ts = event.thread_ts || event.ts;

    const text = await ask(prompt, ts, {
      from: event.user,
      channel: event.channel,
      team: event.team,
    });

    await say({
      thread_ts: event.ts,
      channel: event.channel,
      text,
    });

    return;
  });
}

main();
