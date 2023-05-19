# security-jwt-implementation
This Json Web Token Authentication system is implemented using Spring Boot and Java. It was built in order to be used on uth-ece470 (University of Thessaly - Software Design & Development) final project. The project is a Health Managment System web app, and all the http requests that reach the server are processed by the Spring Boot Controllers. The whole repository was made with the help of https://www.youtube.com/watch?v=KxqlJblhzfI&pp=ygUeand0IGF1dGhlbnRpY2F0aW9uIHNwcmluZyBib290
# How it works
The authorized urls are /api/v1/auth/register and /api/v1/auth/authenticate. The register/login page sends with a POST request a Json containing the credentials. The server generates a token and writes it on user's cookies (httpOnly & Secure so that they cannot be accessed/modified by JavaScript). The token comes along with every http request performed by the browser. The server is able to check if the token is valid/expired or not, and decide whether to let user access specific data or not. 

![jwt2](https://github.com/ilagomatis/security-jwt-implementation/assets/78209098/2d2463a1-8b58-414e-8308-2cc07ef892ab)

