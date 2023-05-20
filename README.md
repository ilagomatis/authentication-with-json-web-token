# security-jwt-implementation
This Json Web Token Authentication system is implemented using **Spring Boot** and **Java**. It was built in order to be used on uth-ece470 (University of Thessaly - Software Design & Development) final project. The project is a Health Managment System web app, and all the http requests that reach the server are processed by the Spring Boot Controllers. The whole repository was made with the help of https://www.youtube.com/watch?v=KxqlJblhzfI&pp=ygUeand0IGF1dGhlbnRpY2F0aW9uIHNwcmluZyBib290
# How it works
The authorized urls are **/api/v1/auth/register** and **/api/v1/auth/authenticate**. The register/login page sends with a **POST** request a Json containing the credentials. The server generates a token and writes it on user's **cookies** (**httpOnly & Secure** so that they cannot be accessed/modified by JavaScript). The token comes along with every http request performed by the browser. The server is able to check if the token is valid/expired or not, and decide whether to let user access specific data or not. 

![jwt](https://github.com/ilagomatis/security-jwt-implementation/assets/78209098/d713d14e-cf6b-4b59-90c4-7de6182ada8e)

# Packages

## auth
Contains:

  * **AuthenticationController**
    - the endpoints that respond to the requests


  * **AuthenticationRequest.java**
    - the format of json needed for authentication (email & password) 


  * **AuthenticationResponse.java**
    - an object of this class contains the token that will be written on browser's cookies


  * **AuthenticationService.java**
    - methods that implement registration/authentication


  * **RegisterRequest.java**
    - the format of json that we need to perform registration (email, password, firstname, lastname)



## config


