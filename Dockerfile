FROM node:10 as node-stage
​
WORKDIR /project
​
COPY package*.json /project/
​
RUN npm i
​
COPY . /project/
​
EXPOSE 3000
​
CMD ["npm", "start"]