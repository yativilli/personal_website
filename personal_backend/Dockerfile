FROM node:18.13
ENV NODE_ENV=production
WORKDIR /personal_backend
COPY . .
RUN npm install
CMD ["npm", "run", "start"]
EXPOSE 3000 