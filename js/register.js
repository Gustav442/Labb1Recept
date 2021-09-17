


const registerForm = document.querySelector('#register');
const eName = document.querySelector('#name');
const eEmail = document.querySelector('#email');
const ePsw = document.querySelector('#psw');



function register(event){


    let name = eName.value;
    let email = eEmail.value;
    let psw = ePsw.value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('psw', psw);

    //console.log('Textfält i funktion ' + name);
    //elOutput.textContent = 'Hej ' + name;
    // Submittar inte formuläret
    event.preventDefault(); //
}

registerForm.addEventListener('submit', register, false);