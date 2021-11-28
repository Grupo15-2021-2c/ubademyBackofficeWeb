FROM node:14-slim
ADD . /backoffice_web
WORKDIR /backoffice_web
EXPOSE 80
EXPOSE 3000
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent
CMD ["npm", "run", "start"]

#FROM node:alpine
#WORKDIR /usr/ubademy-backoffice-web
#EXPOSE 80
#COPY package.json ./
#RUN npm install -g typescript
#RUN npm install
#COPY . .
#RUN npm run starta
