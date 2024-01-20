Required Commands to run:-
1.	Create AWS EC2 instance
2.	sudo apt update
3.	sudo apt install openjdk-11-jre
4.	 java -version
5.	curl -fsSL https://pkg.jenkins.io/debian/jenkins.io.key | sudo tee \   /usr/share/keyrings/jenkins-keyring.asc > /dev/null 
6.	echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \   https://pkg.jenkins.io/debian binary/ | sudo tee \   /etc/apt/sources.list.d/jenkins.list > /dev/null
7.	sudo apt-get update 
8.	sudo apt-get install jenkins
9.	sudo systemctl enable jenkins
10.	sudo systemctl start jenkins
11.	 sudo systemctl status jenkins
12.	 sudo cat /var/lib/jenkins/secrets/initialAdminPassword
13.	sudo apt install docker.io
14.	FROM node:12.2.0-alpine
15.	WORKDIR app
16.	COPY . .
17.	RUN npm install
18.	EXPOSE 8000
19.	CMD ["node","app.js"]
20.	docker build . -t node-app
21.	sudo usermod -a -G docker $USER
22.	docker run -d --name node-todo-app -p 8000:8000 todo-node-app
23.	Got to jenkins job
24.	Execute shell 
25.	docker build . -t node-app-todo
26.	docker run -d --name node-app-container -p 8000:8000 node-app-todo




