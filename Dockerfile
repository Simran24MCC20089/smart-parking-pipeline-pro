# Multi-stage build
# 1️⃣ Backend
FROM node:18 AS backend
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ .

# 2️⃣ Frontend
FROM node:18 AS frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# 3️⃣ Final image
FROM node:18
WORKDIR /app
COPY --from=backend /app/backend ./backend
COPY --from=frontend /app/frontend/build ./frontend/build
WORKDIR /app/backend
EXPOSE 5000
CMD ["node", "server.js"]
