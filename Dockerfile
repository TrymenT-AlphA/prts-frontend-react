FROM node:lts-alpine3.17

WORKDIR /app

COPY package.json .
COPY yarn.lock .

# Setup yarn
RUN npm set registry https://mirrors.huaweicloud.com/repository/npm/
RUN yarn install

COPY . .

RUN yarn build

RUN yarn global add serve

CMD [ "serve", "-s", "build" ]
