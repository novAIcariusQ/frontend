FROM node:24.16-alpine

COPY . /site/
WORKDIR /site

RUN npm install

CMD ["npm", "run", "dev", "--", "--host"]
