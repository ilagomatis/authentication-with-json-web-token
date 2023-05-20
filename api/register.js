/*
Make sure to include <script src="https://unpkg.com/axios/dist/axios.min.js"></script> 
in order to use axios.js for http requests

The object containing user's credentials will be sent with a POST request on 
endpoint '/api/v1/auth/register'

*/ 

let registerButton = document.getElementById("submitButton");

let emailField = document.getElementById("email");

let passwordField = document.getElementById("password");

let firstnameField = document.getElementById("firstname");

let lastnameField = document.getElementById("lastname");

registerButton.addEventListener("click", function(){
    let email = emailField.value;
    let password = passwordField.value;
    let firstname = firstnameField.value;
    let lastname = lastnameField.value;

    if(email && password && firstname && lastname){
        
        const json = {
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname
        };

        axios.post('/api/v1/auth/register', json)
            .then(function (response) {
                console.log(response);
                window.location.replace("/");
            })
            .catch(function (error) {
                console.log(error);
            });
    }
});