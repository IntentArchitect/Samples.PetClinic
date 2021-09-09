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

Assuming you already have Intent Architect installed, here are some of the startup instructions for each app:

### .NET 5 Resful Server

If you have the [.NET 5 SDK](https://dotnet.microsoft.com/download/dotnet/5.0) installed you can get this solution up and running from command line.

In the Repository's source folder `source\dotnet5-petclinic-rest` type the following to compile:
```cmd
dotnet build .\PetClinic.sln
```

To run the application:
```cmd
.\PetClinic.Api\bin\Debug\net5.0\PetClinic.Api.exe
```

### Java SpringBoot Restful Server

If you have at least [Jave SE 14](https://www.oracle.com/za/java/technologies/javase/jdk14-archive-downloads.html) or [Open JDK 14](https://jdk.java.net/java-se-ri/14) and you have [Maven](https://maven.apache.org/install.html) installed, then you can get this up and running from command line.

In the Repository's source folder `source\nestjs-petclinic-rest` type the following to assemble and compile:
```cmd
mvn install
mvn spring-boot:run
```

### NextJS (NodeJS) Restful Server

If you have [Node.js](https://nodejs.org/en/) library installed you can get this solution up and running from command line.

In the Repository's source folder `source\nestjs-petclinic-rest` type the following to assemble and compile:
```cmd
npm i
npm run start
```

### Angular Front-end

If you have [Node.js](https://nodejs.org/en/) library installed you can get this solution up and running from command line.

In the Repository's source folder `source\anguar-petclinic-web` type the following to compile:
```cmd
npm i
npm run start
```
