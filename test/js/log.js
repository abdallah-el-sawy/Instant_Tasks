
// authentication

let firstname = document.getElementById("fname");
let lastname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");

let email_login = document.getElementById("email_login");
let password_login = document.getElementById("password_login");


let users = JSON.parse(localStorage.getItem("usersDB")) || [];
function register() {
  let userInfo = {
    fname: firstname.value,
    lname: lastname.value,
    email: email.value,
    password: password.value,
  }
  users.push(userInfo);
  localStorage.setItem('usersDB', JSON.stringify(users));
  clearRegister();
  alert("Registered Successfully");
}

function clearRegister() {
  firstname.value = '',
    lastname.value = '',
    email.value = '',
    password.value = ''
}

function clearLogin() {
  email_login.value = '';
  password_login.value = '';
}

function login() {
  let user = users.find(user => user.email == email_login.value && user.password == password_login.value);
  if (user != undefined) {
    alert("Login Successfully");
    window.location.href = 'crud.html'
  }
  else {
    alert("User Not Found");
    clearLogin();
  }
}

function logout() {
  window.location.href = 'login.html'
}


// CRUD

let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let productCat = document.getElementById("productCat");
let productDesc = document.getElementById("productDesc");

let currentIndex;
let toggleBtn = document.getElementById('toggleBTN');

let products;

if (localStorage.getItem('productsDB') != null) {
  products = JSON.parse(localStorage.getItem('productsDB'));
  displayProducts()
}
else {
  products = [];
}


function addOrUpdateCheck() {

  if (toggleBtn.innerHTML != 'Update Product') {
    addProduct();
  }
  else {
    setData();
  }


}

function addProduct() {
  let productInfo = {
    name: productName.value,
    price: productPrice.value,
    cat: productCat.value,
    desc: productDesc.value,
  }

  products.push(productInfo);
  localStorage.setItem('productsDB', JSON.stringify(products));
  clearCrudForm();
  displayProducts();
}

function clearCrudForm() {
  productName.value = '',
    productPrice.value = '',
    productCat.value = '',
    productDesc.value = ''
}


function displayProducts() {
  let data = '';
  for (let i = 0; i < products.length; i++) {
    data += `
      <tr>
        <td>${i}</td>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].cat}</td>
        <td>${products[i].desc}</td>
        <td><button class="btn btn-outline-warning" onclick = "updateProduct(${i})">UPDATE</button></td>
        <td><button class="btn btn-outline-danger" onclick="deleteProduct(${i})">DELETE</button></td>
      </tr>
    `;
  }
  document.getElementById('rowData').innerHTML = data;
}


function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem('productsDB', JSON.stringify(products));
  displayProducts();
}


function updateProduct(index) {
  currentIndex = index;
  productName.value = products[index].name,
    productPrice.value = products[index].price,
    productCat.value = products[index].cat,
    productDesc.value = products[index].desc

  toggleBtn.innerHTML = 'Update Product';
}

function setData() {
  products[currentIndex].name = productName.value,
    products[currentIndex].price = productPrice.value,
    products[currentIndex].cat = productCat.value,
    products[currentIndex].desc = productDesc.value
  localStorage.setItem('productsDB', JSON.stringify(products));
  clearCrudForm();
  toggleBtn.innerHTML = 'Add Product';

  displayProducts();
}


function search(word) {

  let data = '';
  for (let i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(word.toLowerCase())) {
      
        data += `
          <tr>
            <td>${i}</td>
            <td>${products[i].name}</td>
            <td>${products[i].price}</td>
            <td>${products[i].cat}</td>
            <td>${products[i].desc}</td>
            <td><button class="btn btn-outline-warning" onclick = "updateProduct(${i})">UPDATE</button></td>
            <td><button class="btn btn-outline-danger" onclick="deleteProduct(${i})">DELETE</button></td>
          </tr>
        `;
      document.getElementById('rowData').innerHTML = data;
    }


  }
}