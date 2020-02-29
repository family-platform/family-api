FROM mhart/alpine-node:10

RUN mkdir /app
RUN mkdir /app/lib
RUN mkdir /app/src

WORKDIR /app

COPY package.json /app
COPY tsconfig.json /app
COPY package-lock.json /app
COPY lib /app/lib

RUN npm i -g typescript
RUN npm i

RUN tsc

EXPOSE 3000
CMD ["node", "/app/src/main.js"]
