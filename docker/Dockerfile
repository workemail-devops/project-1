# Step 1: Build stage
FROM node:18 AS builder

WORKDIR /app

COPY app/package*.json ./

RUN npm install

COPY app .

RUN npm run build


# Step 2: Production stage
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
