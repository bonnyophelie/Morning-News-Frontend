FROM node:16.20.2-buster
COPY . .
RUN yarn install
RUN yarn run build
EXPOSE 3000
CMD ["npm", "start"]