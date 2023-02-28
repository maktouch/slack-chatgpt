# Slack Chat-GPT3 Bot, powered by OpenAI

This little project is to run your own OpenAI assistant right in your Slack. 

Git Repo: <https://github.com/maktouch/slack-chatgpt>
Dockerhub: <https://hub.docker.com/r/maktouch/slack-chatgpt>

## Requirements 

- OpenAI API Key
- MySQL (I just use Planetscale)
- Slack App with the following:
  - OAuth scopes:
    - app_mentions:read
    - channels:history
    - channels:read
    - chat:write
    - groups:history
    - im:history
    - mpim:history
  - Events subscriptions:
    - app_mention
    - message.channels
    - message.groups
    - message.im
    - message.mpim

## Installation

This is nicely packaged in a Docker container hosted on Dockerhub! 
`docker pull maktouch/slack-chatgpt:latest`

The available env configurations are 

| env | description | required | default |
| --- | ------------| ---------| --------|
| SLACK_BOT_TOKEN | The Slack Bot token (starts with `xoxb`) | yes | - 
| SLACK_SIGNING_TOKEN | The Slack signing token | yes | -
| SLACK_APP_TOKEN | The Slack App token (starts with `xapp`) | yes | -
| MYSQL_HOST | MySQL Host | yes | -
| MYSQL_DATABASE | MySQL Database Name | yes | -
| MYSQL_USERNAME | MySQL Username | yes | -
| MYSQL_PASSWORD | MySQL Password | yes | -
| MYSQL_PORT | MySQL Port | no | 3306
| PORT | The port that Slack Bolt will use | no | 3120
| OPENAI_API_KEY | The OpenAI API Key | yes | -
| OPENAI_MODEL | [Docs](https://platform.openai.com/docs/api-reference/completions/create#completions/create-model) | no | text-davinci-003
| OPENAI_TEMPERATURE | [Docs](https://platform.openai.com/docs/api-reference/completions/create#completions/create-model) | no | -
| OPENAI_MAX_TOKEN | [Docs](https://platform.openai.com/docs/api-reference/completions/create#completions/create-model) | no |**** -
| OPENAI_TOP_P | [Docs](https://platform.openai.com/docs/api-reference/completions/create#completions/create-model) | no | -
| OPENAI_FREQUENCY_PENALTY | [Docs](https://platform.openai.com/docs/api-reference/completions/create#completions/create-model) | no | -
| OPENAI_PRESENCE_PENALTY | [Docs](https://platform.openai.com/docs/api-reference/completions/create#completions/create-model) | no | -
| OPENAI_AI_SETUP | The initial text that will be prepended before being sent to ChatGPT | no | The following is a conversation with an AI assistant on Slack. The assistant is helpful, creative, clever, very friendly, and always wraps code with backticks.