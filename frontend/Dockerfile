# --- Etapa de Construcción (Build Stage) ---
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# --- Etapa de Servidor (Serve Stage) ---
FROM nginx:alpine

# Copia la configuración de Nginx (opcional, pero buena práctica para SPAs)
# Si tu app React usa react-router-dom y rutas que no son la raíz, necesitarás un nginx.conf personalizado
# para redirigir todas las rutas a index.html. Por ahora, usaremos la configuración por defecto.
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos estáticos compilados desde la etapa de construcción
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]