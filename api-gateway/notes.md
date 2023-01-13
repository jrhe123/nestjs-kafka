#### kafka entry

#### mongoose example

- generic repository

#### unit test

- yarn test users.controller
- yarn test users.repository

#### e2e test (supertest)

- yarn test

#### k8s deployment

- kubectl get namespaces
- Dockerfile
- k8s yaml (deployment & service yaml)
- dockerhub: create repository "roytest / api-gateway"
- docker login
- docker build -t roytest/api-gateway .
- docker push roytest/api-gateway
- cd k8s
- kubectl create -f deployment.yaml
- kubectl get pods
- kubectl logs [pod-name]
- kubectl create -f service.yaml
- kubectl get service
- test it local: localhost:30481
- GCP: kubernetes clusters ============
- create cluster (GKE Autopilot)
- gcloud
- gcloud container clusters get-credentials autopilot-cluster-1 --region us-central1 --project demo
- kubectl get namespaces
- kubectl get pods
- kubectl create -f .
- kubectl get pods (after create)
- kubectl get svc (check service, get the external ip)
- postman: [external-ip]:3000/users

#### aws serverless deployment

- serverless.ts
- serverless.yaml
- yarn build
- sls offline
- http://localhost:3000/dev
- upload to s3 after test:
- sls deploy --stage prod
- sls logs --function main --stage prod

#### graphql

- http://localhost:3000/graphql


query{
  user(userId: "238658ca-3e13-4fba-b09b-d185fa192136") {
    userId
    email
    age
    favoriteFoods
  }
}