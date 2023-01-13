#### kafka entry

#### mongoose example

- generic repository

#### unit test

- yarn test users.controller
- yarn test users.repository

#### e2e test (supertest)

- yarn test


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