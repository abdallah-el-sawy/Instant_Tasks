let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let productCat = document.getElementById("productCat");
let productDesc = document.getElementById("productDesc");

let addBtn = document.getElementById("addBtn");
let productContainer;
let currentCursor; 

if(localStorage.getItem('productDB') != null){
    productContainer = JSON.parse(localStorage.getItem('productDB'));
    displayProducts();
}
else{
  productContainer = [];
}



function addOrUpdate(){
if(addBtn.innerHTML == 'Update Product')
{
  setData();
}
else{
  addProduct()
}
}

function addProduct(){
  let productInfo = {
    name: productName.value,
    price: productPrice.value,
    cat: productCat.value,
    desc: productDesc.value,
  };
  console.log(productInfo);
  productContainer.push(productInfo);
  console.log(productContainer);
  localStorage.setItem('productDB' , JSON.stringify(productContainer));
  clearForm();
  displayProducts()
}

function clearForm(){
  productName.value = '',
  productPrice.value = '',
  productCat.value = '',
  productDesc.value = ''
}


function displayProducts(){
  let data = ''
  for(let i = 0; i < productContainer.length; i++){
    data += `
        <tr>
          <td>${i}</td>
          <td>${productContainer[i].name}</td>
          <td>${productContainer[i].price}</td>
          <td>${productContainer[i].cat}</td>
          <td>${productContainer[i].desc}</td>
          <td><button class="btn btn-outline-warning" onclick= "updateProduct(${i})">Update</button></td>
          <td><button class="btn btn-outline-danger" onclick = "deleteProduct(${i})">Delete</button></td>
        </tr>
    `;
  }

  document.getElementById('rowData').innerHTML = data;
}


function deleteProduct(cursor){
  productContainer.splice(cursor , 1);
  localStorage.setItem('productDB' , JSON.stringify(productContainer));
  displayProducts();
}


function updateProduct(cursor){
  currentCursor = cursor;
  productName.value = productContainer[cursor].name;
  productPrice.value = productContainer[cursor].price;
  productCat.value = productContainer[cursor].cat;
  productDesc.value = productContainer[cursor].desc;

  addBtn.innerHTML = 'Update Product';
}

function setData(){
  productContainer[currentCursor].name = productName.value;
  productContainer[currentCursor].price =   productPrice.value;
  productContainer[currentCursor].cat  = productCat.value;
  productContainer[currentCursor].desc =  productDesc.value;
  localStorage.setItem('productDB' , JSON.stringify(productContainer));
  displayProducts();
  clearForm()

  addBtn.innerHTML = 'Add Product';
}

function search(word){
  let data = '';
  for(let i = 0; i < productContainer.length; i++)
  {
    if(productContainer[i].name.toLowerCase().includes(word.toLowerCase()))
    {
      data += `
        <tr>
          <td>${i}</td>
          <td>${productContainer[i].name}</td>
          <td>${productContainer[i].price}</td>
          <td>${productContainer[i].cat}</td>
          <td>${productContainer[i].desc}</td>
          <td><button class="btn btn-outline-warning" onclick= "updateProduct(${i})">Update</button></td>
          <td><button class="btn btn-outline-danger" onclick = "deleteProduct(${i})">Delete</button></td>
        </tr>
    `;
  }

  document.getElementById('rowData').innerHTML = data;
    }
    
  }



