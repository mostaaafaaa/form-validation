const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
e.preventDefault()
checkinputs();
});

function checkinputs() {
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();
console.log('done')
    if(usernamevalue === '') {
Seterrorfor(username, 'username cannot be blank');
    } else {
setsuccessfor(username);
    }

    if(emailvalue === '') {
        Seterrorfor(email, 'email cannot be blank');
    } else if(!isEmail(emailvalue)) {
        Seterrorfor(email, 'email is not valid');
    } else {
        setsuccessfor(email);
    }

    if(passwordvalue === ''){
        Seterrorfor(password, 'password cannot be blank');
    } else {
        setsuccessfor(password);
    }

    if(password2value === ''){
        Seterrorfor(password2, 'password cannot be blank');
    } else {
        setsuccessfor(password2);
    }

}

function Seterrorfor(input, message) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');

    small.innertext = message;
    formcontrol.className = 'form-control error';
}

function setsuccessfor(input){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}