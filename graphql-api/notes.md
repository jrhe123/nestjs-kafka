#### test user api

- localhost:3000/graphql

#### Passport & JWT

- localhost:3000/auth/login
- current auth guard (GraphQL, REST)
- decorator: get current login user
#### CRUD

mutation{
  createUser(createUserData:{email: "roytest@gmail.com", age:20}) {
    userId
    email
    age
    isSubscribed
  }
}

query{
  user(userId: "238658ca-3e13-4fba-b09b-d185fa192136") {
    userId
    email
    age
    isSubscribed
  }
}

query{
  users(userIds: ["238658ca-3e13-4fba-b09b-d185fa192136"]) {
    userId
    email
    age
    isSubscribed
  }
}

mutation{
  updateUser(updateUserData: {userId:"238658ca-3e13-4fba-b09b-d185fa192136", age:22}) {
    userId
    email
    age
    isSubscribed
  }
}

mutation{
  deleteUser(deleteUserData: {userId:"238658ca-3e13-4fba-b09b-d185fa192136"}) {
    userId
    email
    age
    isSubscribed
  }
}