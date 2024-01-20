Required Commands to run:-
Create AWS EC2 instance
sudo apt update
    3  sudo apt install openjdk-11-jre
    4  java -version
    5  curl -fsSL https://pkg.jenkins.io/debian/jenkins.io.key | sudo tee \   /usr/share/keyrings/jenkins-keyring.asc > /dev/null 
    6  echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \   https://pkg.jenkins.io/debian binary/ | sudo tee \   /etc/apt/sources.list.d/jenkins.list > /dev/null
    7  sudo apt-get update 
    8  sudo apt-get install jenkins
    9  sudo systemctl enable jenkins
   10  sudo systemctl start jenkins
   11  sudo systemctl status jenkins
   12  sudo cat /var/lib/jenkins/secrets/initialAdminPassword
sudo apt install docker.io
FROM node:12.2.0-alpine
WORKDIR app
COPY . .
RUN npm install
EXPOSE 8000
CMD ["node","app.js"]
docker build . -t node-app
sudo usermod -a -G docker $USER
docker run -d --name node-todo-app -p 8000:8000 todo-node-app
Got to jenkins job
Execute shell 
docker build . -t node-app-todo
docker run -d --name node-app-container -p 8000:8000 node-app-todo




