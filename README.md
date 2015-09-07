# nodejs-restify - a simple Docker and Nodejs Restify example

You'll need to install docker-machine (using 'Docker Quickstart Terminal')
```
https://www.docker.com/toolbox
```

Starting your docker-machine, go to Launchpad on Mac and run:
```
'Docker Quickstart Terminal'
```

Download code:
```
git clone git@github.com:gregmercer/nodejs-restify.git
```

Change to the nodejs-restify directory:
```
cd nodejs-restify
```

To Build:
```
docker build -t gmercer/nodejs-restify .
```

To Verify build - check new image exists:
```
docker images
```

To Run in background (-d) using port 8080:
```
docker run -d -p 8080:8080 gmercer/nodejs-restify
```

To Verify it is running:
```
docker ps
```

To Go into the running container:
```
docker exec -it <container-id-goes-here> /bin/bash
```

To Find ip address for docker-machine:
```
docker-machine ip default
```

To Open in browser:
```
http://<ip-address>:8080
```
