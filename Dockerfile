FROM node:8-alpine

ENV PATH=/node_modules/.bin:$PATH \
    PORT=80 \
    HOST=0.0.0.0 \
    BROWSER=none

EXPOSE 80

COPY watchman /usr/local/bin/watchman
RUN mkdir -p /app
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN ln -s /app/package.json /package.json && \
    ln -s /app/yarn.lock /yarn.lock && \
    mkdir -p /usr/local/var/run/watchman && \
    cd / && \
    yarn install

WORKDIR /app
COPY . /app

# RUN yarn build

CMD ["yarn", "start:server"]
