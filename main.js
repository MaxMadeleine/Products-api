let app = document.getElementById("app");
//view
//når search bliver trykket sender den input value til searchItemCallback
function buildSearch() {
  app.innerHTML = `
    <div class="container">
      <input id="searchInput" type="text">
      <img src="assets/Search-icon .svg" onclick="searchItemCallback()" alt="">
    </div>`;
}
//controller
//inputValue bliver det samme som value fra searchInput og sendt til getValueToUrl
function searchItemCallback() {
  const inputValue = document.getElementById("searchInput").value;
  console.log(inputValue);
  getValueToUrl(inputValue);
}
//model
// når getValueToUrl får inputValue køre den fetc ( inputValue bliver sat i parameter så vi kan kalde på den nede i url )
function getValueToUrl(inputValue) {
  fetch(`https://dummyjson.com/products/search?q=${inputValue}`)
    // så tager den data og putter i response
    .then((response) => {
      if (!response.ok) {
        return console.log(new Error("error"));
      }
      return response.json();
    })
    //laver response om til json og tager json og putter i data
    .then((data) => {
      console.log(data);
      displayProducts(data.products);
    });
}

function productView(products) {

let productHTML

}

//product view
function productView(products) {
  app.innerHTML = `
     <div class="productContainer">${product}</div>
    `;
  products.forEach((product) => {
    `   <figure>
    <img src="${product.image}" alt="${product.name}">
    <figcaption>
    <h3>${product.name}</h3>
    <p>Price: $${product.price}</p>
    <p>${product.description}</p>
</figcaption>
</figure>`;
  });
}

buildSearch();
