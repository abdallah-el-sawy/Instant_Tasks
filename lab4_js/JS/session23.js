let productsContainer;
let singleRecipeContainer;


async function getApi(food) {
  try {
    let api = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${food}`, { method: 'GET' });
    let data = await api.json();
    console.log(data);

    if (data.recipes && data.recipes.length > 0) {
      productsContainer = data.recipes;
      displayProducts();
    }
  }
  catch (error) {
    console.log(error);
    rowData.innerHTML = `
          <p class="text-center text-danger">Failed to load recipes , please try again later!</p>
    `;
  }
}



let rowData = document.getElementById('data').querySelector('.row');
function displayProducts() {
  let data = '';
  for (let i = 0; i < productsContainer.length; i++) {
    data += `
      <div class = "col-lg-4 col-md-6 col-sm-12">
        <div class="card">
          <img src="${productsContainer[i].image_url}" alt="product#" onclick = "getSingleRecipe(${productsContainer[i].recipe_id})" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <div class="card-body">
            <h5 class="card-title">${productsContainer[i].title}</h5>
            <p class="text-secondary">${productsContainer[i].publisher}</p>
          </div>
        </div>
      </div>
    
    `;
  }
  rowData.innerHTML = data;
}





let links = document.querySelectorAll('.nav-link');
links.forEach(function (link, index) {

  link.addEventListener("click", function (e) {

    links.forEach(function (item) {
      item.classList.remove("active");
    });

    links[index].classList.add("active");

    getApi(e.target.innerHTML);

  });

});



//جزء ال بنخلي فيه ان الداتا تظهر مجرد ما نفتح الويب سايت
window.addEventListener('DOMContentLoaded', () => {
  getApi('Pizza');
})


let modal = document.getElementById('model');


async function getSingleRecipe(id) {
  try {
    let api = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`, { method: 'GET' });
    let data = (await api.json()).recipe;
    if (data) {
      singleRecipeContainer = data;
      console.log(singleRecipeContainer);
      displaySingleRecipe();
    }
    else {
      rowData.innerHTML =
        `
            <p class="text-center text-danger">No data Found!</p>
        `;
    }

  }


  catch (error) {
    console.log(error);
    rowData.innerHTML = `
            <p class="text-center text-danger">Failed to load recipes , please try again later!</p>
      `;
  }

}



function displaySingleRecipe() {
  document.getElementById('exampleModalLabel').innerHTML = singleRecipeContainer.title;

  let ingredientsCounter = '';
  for (let i = 0; i < singleRecipeContainer.ingredients.length; i++) {
    ingredientsCounter += `
    <li>${singleRecipeContainer.ingredients[i]}</li>
  `;
  }

  document.getElementById('model').innerHTML = `
      <img src = "${singleRecipeContainer.image_url}" class = "w-100" />
      <h2>Ingredients: </h2>
      <ul>
        ${ingredientsCounter}
      </ul>
`;

}



//search function
let Search = document.getElementById('input1');
Search.addEventListener('keyup' , () => {
  search(Search.value);
})

function search(word){
  let data = '';
  for(let i = 0; i < productsContainer.length; i++){
    if(productsContainer[i].title.toLowerCase().includes(word.toLowerCase())){
      data += `
          <div class = "col-lg-4 col-md-6 col-sm-12">
            <div class = "card">
              <img src = "${productsContainer[i].image_url}" alt = "recipe${i}" />
              <div class = "card-body">
                <h5 class = "card-title">${productsContainer[i].title}</h5>
                <p class = "card-text text-muted">${productsContainer[i].publisher}</p>
              </div>
            </div>
          </div>
      `;
    }
  }

  rowData.innerHTML = data;
}


