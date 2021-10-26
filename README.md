# Samples-PetClinic
Inspired by the [Spring Petclinic sample](https://projects.spring.io/spring-petclinic/), this repository uses [Intent Architect](https://intentarchitect.com) to model the same application for different languages and technologies using the same Domain and Services metadata and a single front-end that integrates to all the RESTful backends.

## Overview

### Restful Servers
Three servers are showcased:
 - .NET 5 Restful Server
 - Java SpringBoot Restful Server
 - NextJS (NodeJS) Restful Server

### Front-ends
 - An Angular 8 front-end with very basic HTML styling

## Getting Started

### Open in Intent Architect
Follow the instructions below to open this sample solution in Intent Architect:
 1. Ensure that [Intent Architect](https://intentarchitect.com) is installed and that you have the appropriate license.
 2. Open the `petclinic.isln` file (located in the `/intent` folder) with Intent Architect.
 3. Explore each application by clicking on the item in the solution dashboard.

### Running the applications

Here are some of the startup instructions for each app:

#### .NET 5 Resful Server

If you have the [.NET 5 SDK](https://dotnet.microsoft.com/download/dotnet/5.0) installed you can get this solution up and running from command line.

In the Repository's source folder `source\dotnet5-petclinic-rest` type the following to compile:
```cmd
dotnet build .\PetClinic.sln
```

To run the application:
```cmd
dotnet run --project .\PetClinic.Api\PetClinic.Api.csproj
```
>!TIP
This server is hosted at http://localhost:8080 by default. To access the swagger UI go to http://localhost:8080/swagger.

#### Java SpringBoot Restful Server

If you have at least [Jave SE 14](https://www.oracle.com/za/java/technologies/javase/jdk14-archive-downloads.html) or [Open JDK 14](https://jdk.java.net/java-se-ri/14) and you have [Maven](https://maven.apache.org/install.html) installed, then you can get this up and running from command line.

In the Repository's source folder `source\nestjs-petclinic-rest` type the following to assemble and compile:
```cmd
mvn install
mvn spring-boot:run
```
>!TIP
This server is hosted at http://localhost:8080 by default. To access the swagger UI go to http://localhost:8080/swagger-ui/index.html.

#### NextJS (NodeJS) Restful Server

If you have [Node.js](https://nodejs.org/en/) library installed you can get this solution up and running from command line.

In the Repository's source folder `source\nestjs-petclinic-rest` type the following to assemble and compile:
```cmd
npm i
npm run start
```
>!TIP
This server is hosted at http://localhost:8080 by default. To access the swagger UI go to https://localhost:8080/swagger.

#### Angular Front-end

If you have [Node.js](https://nodejs.org/en/) library installed you can get this solution up and running from command line.

In the Repository's source folder `source\anguar-petclinic-web` type the following to compile:
```cmd
npm i
npm run start
```
>!TIP
Start up one of the servers listed above to allow this front-end to communicate with a local API.



