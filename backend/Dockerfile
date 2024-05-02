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

# Créer un utilisateur non-root et changer le propriétaire du répertoire /app
# On utilise node comme utilisateur non-root pour éviter les problèmes de permissions avec les dépendances Node.js
RUN chown -R node:node /app

# Utiliser l'utilisateur non-root pour les instructions suivantes
USER node

# Exposer le port que l'application utilise
EXPOSE 5000

# Définir la commande pour démarrer l'application
CMD ["npm", "run", "start:dev"]