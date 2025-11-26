
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm prune --production

FROM node:18-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app ./

USER node

EXPOSE 3000
CMD ["node", "index.js"]
