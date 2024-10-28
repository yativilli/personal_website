## Frontend DEV
FROM node:18.13 as build
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .

RUN npm run build

FROM nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/personal /usr/share/nginx/html/personal
EXPOSE 80