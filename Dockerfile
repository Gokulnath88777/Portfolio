from    nginx:latest
workdir /app
copy . /usr/share/nginx/html
Expose 80