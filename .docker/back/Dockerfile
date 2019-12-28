FROM maven:3.6.3-jdk-8

WORKDIR /usr/app/tmp

COPY . .

RUN mvn package -DskipTests \
&& cp ./target/espacemembre-0.0.1-SNAPSHOT.jar /usr/app/

WORKDIR /usr/app/

RUN rm -rf tmp

EXPOSE 8080

ENTRYPOINT  ["java","-jar","./espacemembre-0.0.1-SNAPSHOT.jar"]
