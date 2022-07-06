# import node image
FROM node:16

# destination folder
WORKDIR /usr/src/app

#mapping environment path for node modules
ENV PATH="./node_modules/.bin:$PATH"

# copy package.json
COPY package*.json .

# Run internal command
RUN apt-get update && apt-get install -y curl
RUN curl --silent --location https://deb.nodesource.com/setup_12.x | bash -

RUN apt-get install -y \
  nodejs
RUN echo "Node: " && node -v
RUN echo "NPM: " && npm -v
RUN npm install

# copy all file
COPY . .

# Public PORT
EXPOSE 5000

CMD ["npm", "start"]