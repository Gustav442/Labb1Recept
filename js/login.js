const loginForm = document.querySelector('#login');
const loginEmail = document.querySelector('#loginEmail');
const loginPsw = document.querySelector('#loginPsw');



function login(event){
 let name = localStorage.getItem('name');
    let email = loginEmail.value;
    let psw = loginPsw.value;

  if(email == localStorage.getItem('email')&& psw == localStorage.getItem('psw')) {
      document.getElementById('answer').innerHTML = "Welcome " + name + "! :-)";
  }else
      document.getElementById('answer').innerHTML = "fel email eller lösenord försök igen!";






    event.preventDefault();
}

loginForm.addEventListener('submit', login, false);