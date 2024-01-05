Turn on server : npm run dev

create container of docker compose : docker compose up // there's one problem with node --watch for hot reload, if you want hot reload, install nodemon and set up it -->

create container of docker compose (dev): docker compose -f docker-compose-dev.yml up //there's one problem with node --watch for hot reload, if you want hot reload, install nodemon and set up it -->

verify docker compose file , because i am using a data base already existely. You should remove the opcion external:true of docker compose file or change name of volumen for one already exist.
