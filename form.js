const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.querySelectorAll('form');
const errorMessage = document.getElementById('errorMessage');


form.addEventListener("submit", (e) => {
     const errors = [];
     if(email.value.trim() === " "){
        errors.push("Email is required")
     }
     if(password.value.length < 8){
        errors.push("Password must atleast be 8 characters")
     }
     if(errors.length > 0){
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join(',')
     }
})


