# Movie_mojo

Requirements : use node version 16.19.0

# installation steps

1) install docker
2) docker image of scylladb from docker-hub 
3) start the scylladb container and bind the container to port 9042
   use this command for running the scylladb container
   docker run --name local-scylla-db -p 9042:9042  -d scylladb/scylla
   
Note: whenever you want to run your application , run this docker container in the background
this could be done by  docker start local-scylla-db

4) clone the repositories from github dev branch using command:  git clone -b dev https://github.com/gurmukhsingh-delhivery/Movie_mojo.git
5) cd client and then run npm install
6) cd server and then run npm install
7) for running the client use npm run dev script
8) for running the server:
     a) first build the server using npx tsc
     b) then run the server using npm start
     
9) your application will be running on http://localhost:3000/
