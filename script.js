const emailForm = document.getElementById("email-form");
const emailRegEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
let input = emailForm.querySelector("input");
const errorHolder = emailForm.querySelector(".error-message");

emailForm.addEventListener("submit", () =>{
    
    if(input.value == ""){
        errorHolder.textContent = "Whoops! It looks like you forgot to add your email";
        emailForm.classList.add("invalid");
    } else if (!emailRegEx.test(input.value)){
        errorHolder.textContent = "Please provide a valid email address";
        emailForm.classList.add("invalid");
    } else{
        emailForm.classList.remove("invalid");
    }
})