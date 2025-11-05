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
                sh 'docker compose build'
            }
        }

        stage('Run Containers') {
            steps {
                echo '🚀 Starting containers...'
                sh 'docker compose up -d'
            }
        }

        stage('Verify Containers') {
            steps {
                echo '🔍 Checking running containers...'
                sh 'docker ps --filter "name=smart-parking"'
            }
        }

        stage('Health Check') {
            steps {
                echo '🌐 Checking backend and frontend...'
                sh '''
                curl -Is http://localhost:5000 || true
                curl -Is http://localhost:3000 || true
                '''
            }
        }

        stage('Clean Up') {
            steps {
                echo '🧹 Cleaning up resources...'
                sh '''
                docker image prune -af || true
                docker volume prune -f || true
                '''
            }
        }
    }

    post {
        success { echo '✅ Build completed successfully!' }
        failure { echo '❌ Build failed!' }
        always { echo '🏁 Pipeline finished.' }
    }
}
