let form = document.querySelector('form');
let emailInput = document.querySelector('input');
const invalid = document.querySelector('.invalid');
const errorImg = document.querySelector('.errorImg');
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', () => {

    if (emailInput.value === '') {
        emailInput.style.borderColor ='hsl(0, 100%, 54%)';
        invalid.innerHTML = 'Email Adress can`t be blank';
        errorImg.style.visibility = "visible";

    } else if (!emailInput.value.match(regexEmail)) {

        invalid.innerHTML = 'enter a valid Email Adress, EX:hello@world.com';
        invalid.style.color = 'hsl(0, 100%, 54%)';
        emailInput.style.borderColor ='hsl(0, 100%, 54%)';
        errorImg.style.visibility = "visible";
    } 
    else {
        invalid.innerHTML = 'Email Adress is valid';
        emailInput.style.borderColor ='hsl(118, 77%, 48%)';
        invalid.style.color = 'hsl(118, 77%, 48%)';
        errorImg.style.visibility = "hidden";
    }
})