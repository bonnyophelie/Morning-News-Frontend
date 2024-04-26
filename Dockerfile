FROM node:16.20.2-buster
COPY . .
ARG url
ENV NEXT_PUBLIC_BACKEND_URL $url
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]