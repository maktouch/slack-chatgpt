FROM node:18.12.1-alpine as builder

WORKDIR /app
COPY yarn.lock .
COPY package.json .

RUN yarn 

COPY . . 

RUN yarn build
RUN rm -rf node_modules

FROM node:18.12.1-alpine as final

WORKDIR /app

COPY --from=builder /app .

RUN yarn --production --cache-folder /tmp/.junk && rm -rf /tmp/.junk

ENV NODE_ENV=production
ENV TZ=UTC

CMD ["yarn", "start"]