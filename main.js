
let app = document.getElementById("app");
//view
function buildSearch() {
  app.innerHTML = `
    <div class="container">
      <input id="searchInput" type="text">
      <img src="assets/Search-icon .svg" onclick="searchItemCallback()" alt="">
    </div>`;
}
//controller
function searchItemCallback() {
    const inputValue = document.getElementById("searchInput").value;
    console.log(inputValue);

}
//model

buildSearch()


   


    
    
    
    