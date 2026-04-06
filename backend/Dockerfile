# Build stage
FROM maven:3.8.6-amazoncorretto-11 AS build
WORKDIR /app
COPY pom.xml .
# Download all dependencies first to cache them
RUN mvn dependency:go-offline -B
COPY src ./src
# Compile and package the application
RUN mvn package -DskipTests

# Production stage
FROM amazoncorretto:11-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
