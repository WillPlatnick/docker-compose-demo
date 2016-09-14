FROM alpine
RUN apk --update add nodejs

WORKDIR /app
COPY index.js /app
COPY package.json /app

RUN npm install

CMD node .
EXPOSE 8080
