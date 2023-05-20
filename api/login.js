/*
Make sure to include <script src="https://unpkg.com/axios/dist/axios.min.js"></script> 
in order to use axios.js for http requests

The object containing user's credentials will be sent with a POST request on 
endpoint '/api/v1/auth/authenticate'

*/ 

let loginButton = document.getElementById("submitButton");

let emailField = document.getElementById("email");

let passwordField = document.getElementById("password");

loginButton.addEventListener("click", function(){
    email = emailField.value;
    password = passwordField.value;
    

    if(!email || !password){
        //console.log("Empty Field");
    }
    else{
        const json = {
            email: email,
            password: password
        };
        axios.post('/api/v1/auth/authenticate', json)
            .then(function (response) {
                console.log(response);
                window.location.replace("/");
            })
            .catch(function (error) {
                console.log(error);
            });
    }
});