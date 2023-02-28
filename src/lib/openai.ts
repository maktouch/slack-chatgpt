import { Configuration, OpenAIApi } from "openai";
import * as config from "../config";

const configuration = new Configuration({
  apiKey: config.openai.API_KEY,
});

export const openai = new OpenAIApi(configuration);

export async function createCompletion(prompt: string) {
  const { data } = await openai.createCompletion({
    model: config.openai.model,
    prompt,
    temperature: config.openai.temperature,
    max_tokens: config.openai.max_token,
    top_p: config.openai.top_p,
    frequency_penalty: config.openai.frequency_penalty,
    presence_penalty: config.openai.presence_penalty,
    stop: [" Human:", " AI:"],
  });

  return data.choices[0].text?.trim();
}
