FROM node:8.5.0

# Create app directory
RUN mkdir -p /front

WORKDIR ./front
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm rebuild node-sass

COPY . .

# Rebuild Sass
EXPOSE 8080

CMD [ "npm", "run", "dev" ]
