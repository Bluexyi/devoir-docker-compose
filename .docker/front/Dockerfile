FROM node:10.9

WORKDIR /usr/src/app
COPY . .
RUN npm install \
&& npm install -g @angular/cli
EXPOSE 4200

CMD ng serve --host 0.0.0.0

