FROM node:12.13.0-alpine

COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .
COPY .env .
COPY ./src ./src
COPY ./scripts/copyStaticAssets.js ./scripts/copyStaticAssets.js

RUN yarn install --production
RUN yarn build

EXPOSE 7000
ENV PORT 7000
ENV NODE_ENV production

CMD ["yarn", "start"]