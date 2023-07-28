const form = document.getElementById('form')
const email = document.getElementById('email');
const errorMessage = document.getElementById('errorMsg');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const emailValue=email.value;
    const lowerCase = emailValue === emailValue.toLowerCase();
    
    if(lowerCase){
        form.submit()
    }
    else{
        errorMessage.textContent="Invalid, Email Must be in lowerCase"
    }
});
