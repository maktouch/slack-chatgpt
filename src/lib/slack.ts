import { App } from "@slack/bolt";
import { slack } from "@/config";

let bolt: App;

export async function getSlackConnection() {
  if (bolt) {
    return bolt;
  }

  bolt = new App({
    ...slack.connection,
  });

  await bolt.start();
  console.log("⚡️ Bolt app is running!");

  return bolt;
}
