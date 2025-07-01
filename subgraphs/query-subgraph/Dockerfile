# query-subgraph/Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY . .
RUN npm install --production

EXPOSE 4001
CMD ["node", "index.js"]