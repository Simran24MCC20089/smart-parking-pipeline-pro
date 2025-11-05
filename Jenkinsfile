pipeline {
agent any

```
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
            echo '⚙️ Building Docker images for backend and frontend...'
            sh 'docker compose build'
        }
    }

    stage('Run Containers') {
        steps {
            echo '🚀 Starting containers using docker-compose.yml...'
            sh 'docker compose up -d'
        }
    }

    stage('Verify Running Containers') {
        steps {
            echo '🔍 Checking running containers...'
            sh 'docker ps --filter "name=smart-parking"'
        }
    }

    stage('Application Health Check') {
        steps {
            echo '🌐 Checking if backend and frontend are up...'
            sh '''
            echo "Backend (Port 5000):"
            curl -Is http://localhost:5000 || true

            echo "Frontend (Port 3000):"
            curl -Is http://localhost:3000 || true
            '''
        }
    }

    stage('Clean Up (Optional)') {
        steps {
            echo '🧹 Cleaning up unused resources...'
            sh '''
            docker image prune -af || true
            docker volume prune -f || true
            '''
        }
    }
}

post {
    success {
        echo '✅ Build and deployment completed successfully!'
    }
    failure {
        echo '❌ Build failed. Check the Jenkins logs for details.'
    }
    always {
        echo '🏁 Pipeline execution finished.'
    }
}
```

}
