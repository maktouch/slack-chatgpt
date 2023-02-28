export const slack = {
  connection: {
    port: Number(process.env.PORT ?? "3120"),
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_TOKEN,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN,
  },
};

export const mysql = {
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT ?? "3306"),
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
};

export const openai = {
  API_KEY: process.env.OPENAI_API_KEY,
  model: process.env.OPENAI_MODEL ?? "text-davinci-003",
  temperature: Number(process.env.OPENAI_TEMPERATURE ?? "0.9"),
  max_token: Number(process.env.OPENAI_MAX_TOKEN ?? "150"),
  top_p: Number(process.env.OPENAI_TOP_P ?? "1"),
  frequency_penalty: Number(process.env.OPENAI_FREQUENCY_PENALTY ?? "0"),
  presence_penalty: Number(process.env.OPENAI_PRESENCE_PENALTY ?? "0.6"),
  ai_setup:
    process.env.OPENAI_AI_SETUP ??
    "The following is a conversation with an AI assistant on Slack. The assistant is helpful, creative, clever, very friendly, and always wraps code with backticks.",
};
