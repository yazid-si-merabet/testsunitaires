# Image Docker pour l'application web Jeux VideoPS
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers du projet
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Installer un serveur HTTP simple
RUN npm install -g http-server

# Commande pour démarrer l'application
CMD ["http-server", ".", "-p", "3000", "-c-1"]
