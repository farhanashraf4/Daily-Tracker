Technical Description:
1.	Efficient Workflow:
•	DevOps Practices: Implemented DevOps principles to bridge the gap between development and operations, fostering collaboration and communication. Emphasized the use of version control, continuous integration, and continuous deployment to streamline the software development lifecycle.
•	Jenkins Integration: Configured Jenkins pipelines to automate building, testing, and deployment processes, reducing manual intervention and ensuring consistency in software releases.
•	AWS EC2 Optimization: Leveraged AWS EC2 instances for scalable computing resources, optimizing infrastructure provisioning based on application demand to achieve cost-effectiveness and performance efficiency.
•	Dockerfile for Containerization: Employed Dockerfile to containerize applications, promoting consistency across various environments and simplifying deployment on diverse platforms.
2.	Automation Expertise:
•	Node.js Automation: Utilized Node.js for scripting and automation, creating robust workflows that enhanced efficiency and reduced the likelihood of human errors in repetitive tasks.
•	Workflow Integration: Integrated automated workflows seamlessly into the development process, ensuring that repetitive tasks such as testing, code linting, and deployment were executed consistently and efficiently.
•	Integration Testing: Developed automated integration tests to validate the interoperability of different components, improving code quality and reducing the time required for manual testing.
3.	Containerized Deployment:
•	Dockerfile Optimization: Crafted efficient Dockerfiles, ensuring lightweight and optimized container images. This approach minimized resource utilization, accelerated deployment, and enhanced overall system performance.
•	Resource Management: Implemented container orchestration tools like Kubernetes for efficient resource allocation, load balancing, and automatic scaling, optimizing the utilization of computing resources in dynamic environments.


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
1.	sudo apt install docker.io
2.	CMD ["node","app.js"]
3.	docker build . -t node-app
4.	sudo usermod -a -G docker $USER
5.	docker run -d --name node-daily-app -p 8000:8000 todo-node-app

Got to jenkins job and Execute shell:
1.	docker build . -t node-app-todo
2.	docker run -d --name node-app-container -p 8000:8000 node-app-todo
