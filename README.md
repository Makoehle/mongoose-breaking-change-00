# Minimal reproduction

Minimal reproduction of BREAKING_CHANGE since `8.8.0`.

Initially created using `Deno 2.1.14` I rewrote it to plain Node.js to prevent discussions. But the same happens with Deno 2.1.4. Once you update to `8.8.0` the `mongoose` package will throw an error when trying to connect to MongoDB.

## Mandatory prerequisites

MongoDB running on localhost:27017 using version 3.6.23. You can use Docker for that. `docker run --name mongo -p 127.0.0.1:27017:27017 mongo:3.6.23`

## Getting started

1. `npm install`
2. `npm start`
3. 💥
