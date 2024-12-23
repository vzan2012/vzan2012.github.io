FROM node:alpine3.20

WORKDIR /website

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4173

CMD ["npx","vite", "preview", "--host"]