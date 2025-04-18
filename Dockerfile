# Utiliser une image officielle de Node.js
FROM node:18

# Définir le dossier de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json (si présent)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers du projet dans le conteneur
COPY . .

# Exposer le port que ton app utilise
EXPOSE 3000

# Démarrer l'application
CMD ["node", "app.js"]
