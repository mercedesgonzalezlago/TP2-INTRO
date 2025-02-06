FROM node:18

WORKDIR /backend

COPY package.json package-lock.json ./
RUN npm install
COPY . .

RUN npx prisma migrate deploy

EXPOSE 3000

CMD ["npm", "run", "dev"]