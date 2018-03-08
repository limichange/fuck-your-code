# Fuck Your Code
Because I Don't Like it 👯‍♀️

## Install
```sh
$ npm i -g fuck-your-code
```

## Usage
```sh
$ fuck-your-code Dockerfile
# or
$ fyc Dockerfile
```

```dockerfile
FROM node:9.4.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --registry=https://registry.npm.taobao.org
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 9091
CMD [ "npm", "start" ]
```
⬇️
```
FuckYourCodeFuc

ourCodeFuckYourCodeFuc
YourCodeFuckYourCode

ckYourCodeFuckYourCodeFuck
ourCodeFuckYourCodeFuckYourCodeFuckYourCodeFuckYourCodeFuckYourCodeFuckYourCodeFu
kYourCodeFuckYourCodeFuckY
urCodeFuckYourCodeFuc

ourCodeFuckYourCodeFuckYourCodeFuckYourCodeFuckYourCodeFuc
YourCodeFuckYourCodeFuckYourCodeFuckYourCodeFu
kYourCodeFuckYourCodeFuckYourCodeFu

YourCodeFuckYourCod
FuckYour

deFuckYourCodeFuc

ourCodeFuck
ourCodeFuckYourCodeFuc
```

## Author

MIT @ Limichange
