## Frontend DEV
FROM node:18.13 as build
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .

CMD ["npm", "run", "build"]