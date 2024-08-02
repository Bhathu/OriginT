FROM node:14-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build --prod

#FROM nginx:latest AS ngi



EXPOSE 4200
CMD ["npm", "start"]