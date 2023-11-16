FROM node:14

RUN mkdir /app

ADD . /app
WORKDIR /app

ENV NODE_ENV=development
ENV PYTHONUNBUFFERED=1

RUN apt-get update || : && apt-get install python -y
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm","start"]