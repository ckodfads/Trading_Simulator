`application.properties` template:

```
server.servlet.context-path=/api

spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
spring.datasource.url=jdbc:mysql://localhost:3306/trading_simulator
spring.datasource.username=root
spring.datasource.password=Natsumii678
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.generate-ddl=true
spring.jpa.hibernate.ddl-auto=update

# Email verification token configuration
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=ckodfads@gmail.com
spring.mail.password=xkft ooig dfuc txic
spring.mail.properties.mail.transport.protocol=smtp
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=

jwt.secret= 9df26352287085a257b7179205d79768b5998ecf1896953ffe6fa0c4b8d61b7a4cb355107d95dee7068addc3dbdf1c029fe43193749d8a0aeab939a4be613e593391f7223ee138ab06570d81b112edb6604fe6ddcdf7565d90dced4abb2d3872f08e4f8fc20f07af5c59c17dae89f3f77da4427641369869224e0f65904243bac984603745d2941f11bf47d3491473fac3beab063501d7d17ad5d2f254da1730e2adecc60a7db82583e890b31f5b617399f17464c3415dedb61c82ffe8ae904c0493dfb5a137163740332340f1a5bcedade26f13818374a40d0975050c78bc5d6c93e150847dc3009a1eecb6eb61a3010dcf49985c86126b33330ebce1954b76

rapid.api.key= 22a56649a6msh7f53c9db25b6078p1587fdjsn41d3f77cc8cd
twelvedata.api.host=twelve-data1.p.rapidapi.com
twelvedata.api.host=twelve-data1.p.rapidapi.com

alphavantage.api.key=ZYPPDW86WWBL3OGA

news.api.key=730a37fb26854f60b053c013e626e75b

logging.level.root=INFO
```