// var emailArray=[];
// var passwordArray=[];

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

// function login(){
//     event.preventDefault();

//     var email = document.getElementById("se").value;
//     var password = document.getElementById("sp").value;

//     var i = emailArray.indexOf(email);

//     if(emailArray.indexOf(email) == -1){
//         if (email == ""){
//             alert("Email required.");
//             return ;
//         }
//         alert("Email does not exist.");
//         return ;
//     }
//     else if(passwordArray[i] != password){
//         if (password == ""){
//             alert("Password required.");
//             return ;
//         }
//         alert("Password does not match.");
//         return ;
//     }
//     else {
//         alert(email + " yor are login Now \n welcome to our website.");

//         document.getElementById("se").value ="";
//         document.getElementById("sp").value="";
//         return ;
//     }

// }

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
