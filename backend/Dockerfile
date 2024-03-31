# Définir l'image de base à partir de Node.js
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier le reste des fichiers du projet dans le conteneur
COPY . .

# Exposer le port que l'application utilise
EXPOSE 3000

# Définir la commande pour démarrer l'application
CMD ["npm", "run", "start:dev"]
