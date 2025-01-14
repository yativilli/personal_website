## Frontend DEV
FROM node:18.13 AS build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm npm run build

FROM nginx:latest
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/personal /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
