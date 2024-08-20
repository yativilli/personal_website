FROM node:latest
ENV NODE_ENV=development
WORKDIR /personal_backend
COPY ..\..\..\personal_backend .
RUN npm install
CMD ["npm", "run", "start"]
EXPOSE 3000