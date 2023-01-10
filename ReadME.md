#### kafka
https://github.com/obsidiandynamics/kafdrop

cd kafdrop/docker-compose/kafka-kafdrop
docker-compose up

ui: localhost:9000
view your broker / topics

#### demonstrate kafka emit events between microservices
order -> billing -> auth

topic: "order_created"

#### run the app
cd api-gateway
yarn start:dev

#### postman link
localhost:3000

{
    "userId": "123",
    "price": 99.99
}