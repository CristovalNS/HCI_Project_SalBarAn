var firstNameArray = [];
var lastNameArray = [];
var emailArray = [];
var passwordArray = [];

document.addEventListener("DOMContentLoaded", () => {
        const loginForm = document.querySelector("#login");
        const createAccountForm = document.querySelector("#createAccount");
        
        document.querySelector("#linkForgetPassword").addEventListener("click", e => {
            e.preventDefault();
            alert("Feature coming soon!")
        })

        document.querySelector("#linkCreateAccount").addEventListener("click", e => {
            e.preventDefault();
            loginForm.classList.add("form--hidden");
            createAccountForm.classList.remove("form--hidden");
        });

        document.querySelector("#continueReg").addEventListener("click", e => {
            var firstName = document.getElementById("fn").value;
            var lastName = document.getElementById("ln").value;
            var email = document.getElementById("re").value;
            var password = document.getElementById("rp").value;
            var passwordRetype = document.getElementById("rrp").value;

            if (firstName == ""){
                alert("First name required.");
                return ;
            }
            else if (lastName == ""){
                alert("Last name required.");
                return ;
            }
            else if (email == ""){
                alert("Email required.");
                return ;
            }
            else if (password == ""){
                alert("Password required.");
                return ;
            }
            else if (passwordRetype == ""){
                alert("Password required.");
                return ;
            }
            else if (password != passwordRetype ){
                alert("Password don't match retype your Password.");
                return;
            }
            else if(emailArray.indexOf(email) == -1){
                emailArray.push(email);
                passwordArray.push(password);
            
                alert(firstName + ", Thanks for registration. \nTry to login Now");

                document.getElementById("fn").value ="";
                document.getElementById("ln").value ="";
                document.getElementById("re").value ="";
                document.getElementById("rp").value ="";
                document.getElementById("rrp").value ="";

                createAccountForm.classList.add("form--hidden");
                loginForm.classList.remove("form--hidden");
            }
            else{
                alert(email + " is already register.");
                return ;
            }
        });

        document.querySelector("#linkLogin").addEventListener("click", e => {
            e.preventDefault();
            loginForm.classList.remove("form--hidden");
            createAccountForm.classList.add("form--hidden");
        });

        loginForm.addEventListener("submit", e => {

        });

        document.querySelector("#continueLog").addEventListener("click", e => {
            e.preventDefault();

            var email = document.getElementById("se").value;
            var password = document.getElementById("sp").value;

            var i = emailArray.indexOf(email);

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }
            else if(passwordArray[i] != password){
                if (password == ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }
            else {
                alert("Login Successful! Welcome to SalBarAn!");

                document.getElementById("se").value ="";
                document.getElementById("sp").value="";
                window.location.replace("web_menu_V2.html");
                return ;
            }

        });

    });
