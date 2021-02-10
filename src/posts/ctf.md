---
title: "CTF Infrastructure on GCP"
github: ""
deploy: ""
date: "Feb 8th 2021"
---
## Introduction
When I became a Projects Director at the UNSW Security Society (SecSoc), one of my main responsibilities I had early on was to be in charge of setting up the infrastructure of our 2021 O-Week CTF. You may think that the process of setting such infrastructure should be relatively simple. After all, if one had prior experiences in deploying web applications, this task should be trivial. The problem was that I had barely any experience in deploying a web application by myself, let alone understanding what a CTF was to begin with :P

## CTF Beginnings
When being given this task, the first thing I did was to understand what a CTF was. One of my main reasons to joining SecSoc was to learn more about cyber security and develop my interest into the field. No doubt that this was perfect to do so. I have often heard the term 'Capture the Flag' before in my first year but I never understood what it means. So the first thing I did was to understand what a CTF was and to get a good practice on how it works. Luckily, as I was part of the SecSoc, there was some awesome people showing me how a CTF works :)

## Timeline
So I was given about 3 weeks before deploying the CTF infrastructure for O-Week. My first week was spent in understanding what a CTF was and seeing how it was hosted. My second week was spent in understanding the platforms that was used previously within SecSoc when hosting such CTF infrastructure. My third week was spent in deploying the infrastructure itself and making sure it was ready. Looking back, the third week was the most intense but it was the most rewarding when I finally finished it :).

## Prior Knowledge
When learning the ropes, it really helped me to understand what was Docker, using docker-compose, SSL certificates (HTTPS encryption), domains and setting up DNS records. Obviously there is more that you should know before setting up a CTF infrastructure but these are the main things.

## Deploying the CTFd infrastructure
As described on their website, "CTFd is a Capture The Flag (CTF) framework designed for ease of use for both administrators and users". Naturally, all you have to do is to deploy this web application and the place to set up your CTF challenges should be set up. Huge thanks to [csictf](https://medium.com/csictf) article titled (["Self-hosting a CTF Platform"](https://medium.com/csictf/self-hosting-a-ctf-platform-ctfd-90f3f1611587)) as it helped me in setting up my own infrastructure.


### Creating a VM instance
1. Create a VM instance using GCP Compute Engine and pick a region to host your CTFd infrastructure (up to you, the default region, which is Iowa seems to be the cheapest. However, I recommend picking **australia-southeast-1b** to reduce any latency).
2. Choose the CPU settings when creating a VM instance. I found that the **e2-micro** CPU is good when you want to test the infrastructure with a small number of users. Then you can scale the CPU to use the **e2-medium** CPU during the actual CTF.
3. Select the default boot disk (debian) rather than using the Container Optimised OS as this allows to use any extra command line arguments (i.e. touch) if needed.
4. Enable http and https traffic for your firewall settings.
5. Click "Create". You can now ssh into the VM instance!

### Setting up CTFd
6. Once you ssh into the VM, install docker with the following commands:
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
and ssh your way back in after `logout`. Now install docker-compose using these commands:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```
7. Git clone CTFd repo
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
8. Change up the CTFd docker-compose.yml to remove the default nginx service. The docker-compose.yml file now should look something like this
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
    command: [mysqld, --character-set-server=utf8mb4, --collation-server=utf8mb4_unicode_ci, --wait_timeout=28800, --log-warnings=0]
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

### Linking a domain name
We are using Cloudflare to link our domain to the CTFd external IP.
9. Add a new DNS A record that links to the external IP address and make sure that the DNS proxy status is DNS only.

### Using a Proxy and firewall
10. Now back to the VM instance, set up a firewall and rate limiting using the commands below.
```
sudo apt update
sudo apt install nginx ufw
sudo ufw allow 'Nginx Full'
sudo ufw allow 'OpenSSH'
sudo ufw enable
```
11. Create a file at `/etc/nginx/sites-available/mydomain.com` (replace mydomain.com with your domain) with the following contents.
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
This sets up rate-limiting at 10 requests per second, and a max of 10 simultaneous connections per IP address at a time. Also, it tells Nginx to route requests to `mydomain.com` at port 8000.

12. Now, create a symbolic link with these commands.
```
sudo ln -s /etc/nginx/sites-available/mydomain.com /etc/nginx/sites-enabled/mydomain.com
sudo nginx -s reload
```
13. Run `docker-compose up -d`. Now when visiting the domain, you should see CTFd running on a http connection.

### SSLing It Up!
14. To allow our domain to have HTTPS encryption, we must create an SSL certificate. Luckily, we can use Certbot and LetsEncrypt for this! Follow these commands:
```
sudo apt install certbot
sudo certbot --nginx
```
From [csictf](https://medium.com/csictf/self-hosting-a-ctf-platform-ctfd-90f3f1611587), ***this should prompt you to pick which domains you want to setup nginx for. Select the domain we setup with nginx before for CTFd, and follow the series of questions `certbot` asks. Make sure you ask Certbot to always Redirect to HTTPS, we don’t want anyone accessing the website over HTTP!***

Now you should see that your CTFd website is fully HTTPs encrypted!

## Setting up Web and Binary (Pwn) Challenges
Coming soon...

<!-- ## Links & Resources

- https://github.com/abiramen/ctfd-nebula-theme
- https://github.com/CTFd/CTFd
- https://medium.com/csictf/self-hosting-a-ctf-platform-ctfd-90f3f1611587 -->