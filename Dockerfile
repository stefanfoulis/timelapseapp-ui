FROM node:7.10.0

COPY stack /app/stack
RUN /app/stack/watchman.sh

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . /app

ENV PATH=/node_modules/.bin:$PATH
RUN yarn run build

ENV PORT=80 \
    HOST=0.0.0.0 \
    BROWSER='none'

EXPOSE 80

CMD yarn run start:server
