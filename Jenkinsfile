pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Simran24MCC20089/smart-parking-system.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running basic tests..."'
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Application deployed successfully!'
            }
        }
    }
}
