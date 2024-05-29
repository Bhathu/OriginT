FROM node:14-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build --prod

#FROM nginx:latest AS ngi



EXPOSE 80
CMD ["npm", "start"]