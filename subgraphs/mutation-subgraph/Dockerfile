# query-subgraph/Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY . .
RUN npm install --production

EXPOSE 4002
CMD ["node", "index.js"]
