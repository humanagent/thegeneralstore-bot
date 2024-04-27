# The General Store Bot

> 💬 **Try it:** Message `store.hi.xmtp.eth`

Go to [BotKit](https://github.com/fabriguespe/botkit) to learn more

## Development

To kickstart the tutorial, you'll need to clone the repository containing the bot code. Follow these steps:

```bash
git clone https://github.com/fabriguespe/thegeneralstore-bot.git
cd thegeneralstore-bot
# copy env variables template
cp .env.example .env
```

**Set the variables**

```bash
KEY= # the private key of the bot
XMTP_ENV= # set to production or dev network
```

> ⚠️ Bot kit is not compatible with `bun` yet. Use `npm` or `yarn`

```bash
# install dependencies
yarn install

# running the bot
yarn build
yarn start

# to run with hot-reload
yarn build:watch
yarn start:watch
```
