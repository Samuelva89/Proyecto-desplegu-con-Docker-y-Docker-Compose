# Usa una imagen base de Node.js con Alpine Linux.
FROM node:20-alpine as builder 

# Establece el directorio de trabajo dentro del contenedor.
WORKDIR /app

# Copia los archivos de definición de dependencias.
COPY package*.json ./

# Instala todas las dependencias (incluyendo las de desarrollo, que permanecerán en la imagen final).
RUN npm install

# Copia el resto del código fuente de tu aplicación.
COPY . .

# Compila la aplicación NestJS.
RUN npm run build

# Define el puerto en el que la aplicación NestJS escuchará.
ENV PORT=3000

# Expone el puerto para que Docker sepa que este contenedor usa este puerto.
EXPOSE 3000

# Comando para iniciar la aplicación NestJS usando el script 'start:prod'.
CMD ["npm", "run", "start:prod"]