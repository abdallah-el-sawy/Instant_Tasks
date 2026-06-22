let username = document.getElementById('username');
let email = document.getElementById('exampleInputEmail1');
let password = document.getElementById('password');
let form = document.querySelector("form");


let users;
if(localStorage.getItem('users') != null){
  users = JSON.parse(localStorage.getItem('users'));
}
else{
  users = [];
}


form.addEventListener("submit", function(e){
  e.preventDefault();
  register();
});

function register() {
let userInfo = {
  name : username.value,
  email : email.value,
  password : password.value
}

users.push(userInfo);
localStorage.setItem('users' , JSON.stringify(users));
clearRegisterForm();
window.location.href = "login.html";
}

function clearRegisterForm(){
  username.value = '';
  email.value = '';
  password.value = '';
}

function login(){
  let user = users.find(user => user.email == email.value && user.password == password.value);
  if(user != undefined){
    window.location.href = "../../Html/crud.html";
  }
  else{
    alert("User Not Found");
    clearLoginForm();
  }
}

function clearLoginForm(){
  email.value = '';
  password.value = '';
}