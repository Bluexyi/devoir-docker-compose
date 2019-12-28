# Espace membre

## Prerequisites

### Installing docker 

run `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`

run `sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"`

run `sudo apt update`

run `apt-cache policy docker-ce`

run `sudo apt install docker-ce -y`

### Installing docker-compose 

run `sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`

run `sudo chmod +x /usr/local/bin/docker-compose`

run `sudo usermod -aG docker <your-user>` 


## Start app with docker

In root folder 

run `sudo docker-compoose up -d` 

mysql is accessible at localhost:3306
phpmyadmin is accessible at localhost:8081 (user: root | pass: passRoot). Environnement variable -> .docker/database/secrets.env
front is accessible at localhost / localhost:80
back accessible at localhost:8080 (no secure)

## Authors

* **Lenoir Romain**
