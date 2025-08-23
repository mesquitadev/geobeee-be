#Build
FROM node:latest AS frontend
WORKDIR /app
COPY . /app
RUN ls
RUN cd /app && npm install && npm run build
EXPOSE 3000
CMD [ "node", "dist/main.js" ]
