let rowData = document.getElementById('rowData');
let searchInput = document.getElementById('searchInput');
let linksCategory = document.querySelectorAll('.category-link');

let container = [];

async function getData(){
  try
  {
    let response = await fetch('https://dummyjson.com/products');
    let data = (await response.json()).products;
    container = data;
    displayProducts(container);
    console.log(data);
  }
  catch(error){
    console.log(error);
  }

}


function displayProducts(products){
  let data = '';
  for(let i = 0; i < products.length; i++){
    data += `
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card">
                <img src="${products[i].thumbnail}" alt="">
                <div class="card-body">
                  <h3 class="card-title">${products[i].title}</h3>
                  <p class="text-secondary">${products[i].description}</p>
                  <p class="text-success">${products[i].price}$</p>
                </div>
              </div>
            </div>
    
    `;
  }
  rowData.innerHTML = data;
}

getData();

linksCategory.forEach(function(link){
  link.addEventListener('click' , function(){
    document.querySelector('.active').classList.remove('active');
    link.classList.add('active');

    let category = link.dataset.category;
    if(category === "all"){
      displayProducts(container);
      return;
    }
    let filteredData = container.filter((product)=>{
      return product.category === category;
    });

    displayProducts(filteredData);
  })
})



searchInput.addEventListener('keyup' , function(){
  search(searchInput.value);
})

function search(word){
  let data = '';
  for(let i = 0; i < container.length; i++){
    if(container[i].title.toLowerCase().includes(word.toLowerCase())){
          data += `
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card">
                <img src="${container[i].thumbnail}" alt="">
                <div class="card-body">
                  <h3 class="card-title">${container[i].title}</h3>
                  <p class="text-secondary">${container[i].description}</p>
                  <p class="text-success">${container[i].price}$</p>
                </div>
              </div>
            </div>
    
    `;
  }
  rowData.innerHTML = data;
  }
}



