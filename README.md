Technical Description:
Efficient Workflow
Streamlined tasks with DevOps, Jenkins, AWS EC2, and Dockerfile for enhanced efficiency.

Automation Expertise:
Leveraged Node.js to create automated workflows and seamless integration.

Containerized Deployment:
Utilized Dockerfile for containerized deployment, optimizing resource management.

Create AWS EC2 instance using Ubuntu:
Required Commands to run:-

Jenkins Installation:
1.	curl -fsSL https://pkg.jenkins.io/debian/jenkins.io.key | sudo tee \   /usr/share/keyrings/jenkins-keyring.asc > /dev/null 
2.	echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \   https://pkg.jenkins.io/debian binary/ | sudo tee \   /etc/apt/sources.list.d/jenkins.list > /dev/null
3.	sudo apt-get update 
4.	sudo apt-get install jenkins
5.	sudo systemctl enable jenkins
6.	sudo systemctl start jenkins
7.	 sudo systemctl status jenkins
8.	 sudo cat /var/lib/jenkins/secrets/initialAdminPassword

Docker Installation:
10.	sudo apt install docker.io
11.	CMD ["node","app.js"]
12.	docker build . -t node-app
13.	sudo usermod -a -G docker $USER
14.	docker run -d --name node-daily-app -p 8000:8000 todo-node-app

Got to jenkins job and Execute shell:
14.	docker build . -t node-app-todo
15.	docker run -d --name node-app-container -p 8000:8000 node-app-todo
