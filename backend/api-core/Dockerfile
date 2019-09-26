FROM gradle:5.1.1-jdk8-alpine AS build_stage

COPY --chown=gradle:gradle . /app
WORKDIR /app
COPY build.gradle settings.gradle ./
COPY src/ src/

RUN gradle build -x test

FROM openjdk:8-jre-alpine 




COPY --from=build_stage /app/build/libs/*.jar ./build/app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "build/app.jar"]