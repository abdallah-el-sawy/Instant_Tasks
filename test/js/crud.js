let productName = document.getElementById('productName');
let productPrice = document.getElementById('productPrice');
let productCat = document.getElementById('productCat');
let productDesc = document.getElementById('productDesc');



let mainBTN = document.getElementById('mainBTN');
let currentCursor;

let productContaier;
if(localStorage.getItem('crudDB') != null){
  productContaier = JSON.parse(localStorage.getItem('crudDB'));
  displayProducts();
}

else {
  productContaier = [];
}



function addOrUpdateCheck(){
  if(mainBTN.innerHTML == 'Update Product'){
    setNewData();
  }
  else{
    addProduct()
  }

}


function addProduct(){
  let productInfo = {
    name : productName.value,
    price : productPrice.value,
    cat : productCat.value,
    desc : productDesc.value,
  }

  productContaier.push(productInfo);
  localStorage.setItem('crudDB' , JSON.stringify(productContaier));
  clearForm();
  displayProducts();
}


function clearForm(){
  productName.value = '',
  productPrice.value = '',
  productCat.value = '',
  productDesc.value = ''
}

function displayProducts(){
  let data = '';
  for(let i = 0; i < productContaier.length; i++){
    data += `
      <tr>
        <td>${i}</td>
        <td>${productContaier[i].name}</td>
        <td>${productContaier[i].price}</td>
        <td>${productContaier[i].cat}</td>
        <td>${productContaier[i].desc}</td>
        <td><button class="btn btn-outline-warning" onclick = "updateProduct(${i})">UPDATE</button></td>
        <td><button class="btn btn-outline-danger" onclick="deleteProduct(${i})">Delete</button></td>
      </tr>
    `
  }
  document.getElementById('rowData').innerHTML = data;
}


function deleteProduct(cursor){
  productContaier.splice(cursor , 1);
  localStorage.setItem('crudDB' , JSON.stringify(productContaier));
  displayProducts();
}


function updateProduct(cursor){
  currentCursor = cursor;
  productName.value = productContaier[cursor].name,
  productPrice.value = productContaier[cursor].price,
  productCat.value = productContaier[cursor].cat,
  productDesc.value = productContaier[cursor].desc

  mainBTN.innerHTML = 'Update Product';
}

function setNewData(){
productContaier[currentCursor].name = productName.value;
productContaier[currentCursor].price = productPrice.value;
productContaier[currentCursor].cat = productCat.value;
productContaier[currentCursor].desc = productDesc.value;

localStorage.setItem('crudDB' , JSON.stringify(productContaier));
displayProducts();
clearForm()
mainBTN.innerHTML = 'Add Product';

}


function search(word){
let data = '';
for(let i = 0; i < productContaier.length; i++){
  if(productContaier[i].name.toLowerCase().includes(word.toLowerCase()))
  {
    data += `
      <tr>
        <td>${i}</td>
        <td>${productContaier[i].name}</td>
        <td>${productContaier[i].price}</td>
        <td>${productContaier[i].cat}</td>
        <td>${productContaier[i].desc}</td>
        <td><button class="btn btn-outline-warning" onclick = "updateProduct(${i})">UPDATE</button></td>
        <td><button class="btn btn-outline-danger" onclick="deleteProduct(${i})">Delete</button></td>
      </tr>
    `
  }
  document.getElementById('rowData').innerHTML = data;
  }
}


