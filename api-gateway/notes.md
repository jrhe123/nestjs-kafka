#### kafka entry

#### mongoose example

- generic repository

#### unit test

- yarn test users.controller
- yarn test users.repository

#### e2e test (supertest)

- yarn test

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