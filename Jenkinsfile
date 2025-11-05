pipeline {
    agent any

    environment {
        PROJECT_NAME = "smart-parking-pipeline-pro"
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo '🔄 Cloning repository...'
                git branch: 'main',
                    credentialsId: 'github-token',
                    url: 'https://github.com/Simran24MCC20089/smart-parking-pipeline-pro.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                echo '⚙️ Building Docker images...'
                bat 'docker build -t smart-parking-backend ./backend'
                bat 'docker build -t smart-parking-frontend ./frontend'
            }
        }

        stage('Run Containers') {
            steps {
                echo '🚀 Starting containers...'
                bat 'docker run -d -p 5000:5000 --name smart-parking-backend smart-parking-backend'
                bat 'docker run -d -p 3000:3000 --name smart-parking-frontend smart-parking-frontend'
            }
        }

        stage('Verify Containers') {
            steps {
                echo '🔍 Checking running containers...'
                bat 'docker ps --filter "name=smart-parking"'
            }
        }

        stage('Health Check') {
            steps {
                echo '🌐 Checking backend and frontend health...'
                bat 'curl -Is http://localhost:5000 || echo Backend not reachable'
                bat 'curl -Is http://localhost:3000 || echo Frontend not reachable'
            }
        }

        stage('Clean Up') {
            steps {
                echo '🧹 Cleaning up Docker containers and images...'
                bat 'docker rm -f smart-parking-backend smart-parking-frontend || exit 0'
                bat 'docker image prune -af || exit 0'
            }
        }
    }

    post {
        success { echo '✅ Build completed successfully!' }
        failure { echo '❌ Build failed!' }
        always { echo '🏁 Pipeline finished.' }
    }
}
