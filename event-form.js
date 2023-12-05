// Getting back our elements of the DOM //

const form = document.querySelector("form");
const hideCard = document.querySelector('.container');
const showCard = document.querySelector('.cardSuccess');
    
// Setting our event listener when the user is clicking on the button showcasing the success message // 

form.addEventListener("submit", submitForm = (e) => {
    e.preventDefault();
    hideCard.classList.add("hide");
    showCard.classList.remove("hide"); 
});



// Reset event to the original page //

const dismissButton = document.getElementsByClassName('darkButton')[1];

dismissButton.addEventListener("click", dismissMessage = (e) => {
    e.preventDefault();
    showCard.classList.add("hide");
    hideCard.classList.remove("hide");
    form.removeEventListener('submit', submitForm)
});

// Checking the email validations //
 
const regexValidation = new RegExp(/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i);
const input = document.querySelector("input");
const paragraph = document.querySelector(".errorMessage");

input.addEventListener('change', validateEmail = (e) => {
    e.preventDefault();
    if(regexValidation.test(input.value) === false)
    {
        paragraph.classList.remove('hide');
        input.style.borderColor='red';
        input.style.background='lightpink';
    } else {
        paragraph.classList.add('hide');
        input.style.borderColor='black';
        input.style.background='white';
    }
});

// Changing the photography according to the media query //

const imageMobile = document.querySelector('.photoMobile');
const imageDesktop = document.querySelector('.photoDesktop');

if(window.matchMedia("(max-width: 540px)").matches) 
{
    imageDesktop.classList.add('hide');
    imageMobile.classList.remove('hide');
} else {
    imageMobile.classList.add('hide');
    imageDesktop.classList.remove('hide');
}
