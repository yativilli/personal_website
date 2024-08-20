## Frontend Build
FROM node:latest as build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY ..\..\..\personal .

CMD ["ng", "build", "--prod"]