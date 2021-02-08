---
title: "Stting up a CTF on GCP"
github: "https://github.com/gtangelo/traceback"
deploy: ""
---

The way iI deployed CTF

# Deploying CTFd infrastructure

1. Create a VM instance on GCP.
- Click on 'Create Instance'
- Set name and pick region (up to you, the defualt region, which is Iowa seems to be the cheapest. However, I recommend picking Australia to reduce latency, australia-southeast-1b)
- E2-micro for testing then you can switch to e2-medium during busy traffic
- set default boot disk (debian) rather than optimised - allows you to use sudo touch, etc.
- For firewall, enable http and https traffic
2. ssh into instance and install docker and docker-compose
```
sudo apt update
sudo apt install --yes apt-transport-https ca-certificates curl gnupg2 software-properties-common
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
sudo apt update
sudo apt install --yes docker-ce
sudo usermod -aG docker $USER
logout
```
- ssh back in
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```
3. Git clone CTFd repo
```
git clone https://github.com/CTFd/CTFd.git
cd CTFd
```
Optional: You can install a theme. Usually, I install this theme:
```
cd CTFd/themes
git clone https://github.com/abiramen/ctfd-nebula-theme.git
cd -
```
change up the CTFd docker-compose.yml to remove nginx service. docker-compose might look something like this
```
version: '2'
services:
  ctfd:
    build: .
    user: root
    restart: always
    ports:
      - "8000:8000"
    environment:
      - UPLOAD_FOLDER=/var/uploads
      - DATABASE_URL=mysql+pymysql://ctfd:ctfd@db/ctfd
      - REDIS_URL=redis://cache:6379
      - WORKERS=1
      - LOG_FOLDER=/var/log/CTFd
      - ACCESS_LOG=-
      - ERROR_LOG=-
      - REVERSE_PROXY=true
    volumes:
      - .data/CTFd/logs:/var/log/CTFd
      - .data/CTFd/uploads:/var/uploads
      - .:/opt/CTFd:ro
    depends_on:
      - db
    networks:
        default:
        internal:
  db:
    image: mariadb:10.4.12
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=ctfd
      - MYSQL_USER=ctfd
      - MYSQL_PASSWORD=ctfd
      - MYSQL_DATABASE=ctfd
    volumes:
      - .data/mysql:/var/lib/mysql
    networks:
        internal:
    # This command is required to set important mariadb defaults
    command: [mysqld, --character-set-server=utf8mb4, --collation-server=utf8mb4_unicode_ci, --wait_timeout=28800, --
log-warnings=0]
  cache:
    image: redis:4
    restart: always
    volumes:
    - .data/redis:/data
    networks:
        internal:
networks:
    default:
    internal:
        internal: true
```

4. Setting up a Firewall, Nginx and Rate Limiting
```
sudo apt update
sudo apt install nginx ufw
sudo ufw allow 'Nginx Full'
sudo ufw allow 'OpenSSH'
sudo ufw enable
```
Create a file at /etc/nginx/sites-available/mydomain.com (replace mydomain.com with your domain) with the following contents.
```
limit_req_zone  $binary_remote_addr zone=mylimit:10m rate=10r/s;
limit_conn_zone $binary_remote_addr zone=addr:10m;
server {
	server_name mydomain.com;
	limit_req zone=mylimit burst=15;
	limit_conn addr 10;
	limit_req_status 429;
	client_max_body_size 8M;
	location / {
    		proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
  }
}
```
sudo ln -s /etc/nginx/sites-available/mydomain.com /etc/nginx/sites-enabled/mydomain.com
sudo nginx -s reload
Go to cloudflare - create an A record with the VM external IP. Select DNS only(this avoids the css issue of not loading).

5. Setting up https:// using certbot and LetsEncrypt
```
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository universe
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx
```
This should prompt you to pick which domains you want to setup nginx for. Select the domain we setup with nginx before for CTFd, and follow the series of questions certbot asks. Make sure you ask certbot to always Redirect to HTTPS, we don’t want anyone accessing the website over HTTP!

NOTE: Check SSL settings for Cloudflare 

Links
https://github.com/abiramen/ctfd-nebula-theme 
https://github.com/CTFd/CTFd 
https://medium.com/csictf/self-hosting-a-ctf-platform-ctfd-90f3f1611587

##########
# Setting up web challenges
