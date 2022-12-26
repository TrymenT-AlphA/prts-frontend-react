FROM node:16
WORKDIR /app

COPY package.json .
COPY yarn.lock .

# Setup yarn
RUN yarn install

COPY . .

RUN yarn build

RUN yarn global add serve

CMD [ "serve", "-s", "build" ]
