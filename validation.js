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
} }