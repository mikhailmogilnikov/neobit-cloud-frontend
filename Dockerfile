FROM node:18

WORKDIR /front

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD sh -c "npm run build && npm run start"