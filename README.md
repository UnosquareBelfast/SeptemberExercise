# September Exericse

This application is used to manage a list of to-do items. Ordering is not important right now, just the presence of the items.

There are two main components for this application:
* Front end React Single page application (which communicates over HTTP to the back end).
* Back end REST API using a postgres database.


In the current state the Back end exists, but within a docker container and the front end is able to retrieve data from it but it's very basic.

The first exercise here is to update the current web application to be able to:
1. Retrieve and display a list of todos.
2. Create a new todo item.
3. Update an item in the list of todos.
4. Delete an item from the list.

Relevant links:
- [Local Swagger URL](http://localhost/swagger/index.html)
- [Local Todo list Website](http://localhost:3000/)
- [REST overview](https://restfulapi.net/)

The second exercise is for us to create our own back end application and modify it to handle errors in a better way.

It must adhear to the same data contract as the existing backend and will be built using Java and Spring boot (MVC and Data)

The new backend application we create will connect to the existing database setup in the docker compose file.


## Getting Started

Before starting to use the application docker is required and must be installed.

The following three commands can be used to get the current application up and running:

```
docker-compose up // spins up the database, database migrations and the backend service.
yarn install // installs dependencies for the front end application
yarn start // runs the front end application
```

## Tool Recommendations
- IntelliJ
- Visual Studio Code 