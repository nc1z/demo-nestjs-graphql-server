<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# 📜 NestJs GraphQL Server with MongoDB

NestJS GraphQL Server with MongoDB, a powerful and scalable tech stack that offers a robust foundation for building efficient server-side applications.

NestJS provides a modular and type-safe framework, while GraphQL serves as a powerful query language and runtime, providing a single endpoint to reduce network overhead and enable precise data retrieval.

MongoDB, a flexible NoSQL database, ensures seamless integration and efficient data retrieval.

## How to run

1. Install MongoDB and run it locally. Alternatively, you can pull a docker image for MongoDB and run it.
    ```bash
    $ docker pull mongo:latest
    $ docker run -d -p 27017:27017 --name=mongo-dev mongo:latest
    $ docker ps
    ```
2. Run the command
    ```bash
    $ git clone https://github.com/nc1z/demo-nestjs-graphql-server.git
    $ cd demo-nestjs-graphql-server/
    $ npm run start:dev
    ```
3. Now you have the endpoint `localhost:3000/graphql` exposed and ready to be queried!

## How to query

__Via GraphQL playground__

- Simply head to `localhost:3000/graphql` and write your queries in the field. For example:

  Hello world
  ```gql
    {
      hello
    }
  ```
  Create a User
  ```gql
    mutation {
      createUser(input: {name: "Mary Jane", age: 18, email:"mj@gmail.com"}) {
        id
        name
        age
        email
      }
    }
  ```

__Via Postman__

Create a POST request and select the request body as GraphQL

![image](https://github.com/nc1z/demo-nestjs-graphql-server/assets/111836326/688db598-7fb8-44f3-8c91-a850ebce9b24)

## How the project was setup

1. <a href="https://docs.nestjs.com/graphql/quick-start">Setup GraphQL module</a>
2. <a href="https://docs.nestjs.com/graphql/resolvers">Setup GraphQL resolvers</a>
3. Setup NestJs modules with modular / layered NestJs architecture - module, service, repository, dto...
4. Setup Mongoose/MongoDB schemas, models...
5. <a href="https://docs.nestjs.com/techniques/mongodb">Setup MongoDB connection</a>

    Remember to use `mongodb//127.0.0.1:27017/your-db-name` for newer nodeJs versions

## Acknowledgement

- <a href="https://github.com/benawad">Ben Awad</a> for the tutorial
- <a href="https://github.com/mguay22">Michael Guay</a> for debugging
- <a href="https://docs.nestjs.com/">NestJs documentation</a> for setup guide and debugging