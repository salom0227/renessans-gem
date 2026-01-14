FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY index.html /usr/share/nginx/html/
COPY renessans_files /usr/share/nginx/html/renessans_files

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

