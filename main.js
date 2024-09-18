
function getData (myUrl){
        fetch (myUrl)
    // the data from myUrl goes to respose when loaded
        .then((response) => {
          console.log(response);
    //now take machine data and convert to json file
            return response.json()
        })
        // Put json info in data
        .then((data) => {
        // put json data in console and display message as table
       console.table(data);
            console.table(data.products[0].title,
                data.products[0].id);
        // get section billede deom html and call it billede
           
        })
        //fanger fejl og displayer i consol
        .catch ((error) => {
            console.log(error);
        })
    }


    // //show products

    // function showProducts(data){

    //     let product = document.getElementById('product')
    //     data.forEach(myData => {
    //         let myCard = document.createElement('figure')
    //         let myHtml = `<h2>${myData.title}</h2><img src="${myData.image}"><p>${myData.description}</p><button class="CTAbutton" onclick="buyCallback(${myData.id})">køb</button>`
    //         myCard.innerHTML = myHtml
    //         myCard.classList.add("productCard")
    //         product.appendChild(myCard)

    //     });
        
    // }

    // gets data from api that get data function
    
    // getData('https://dummyjson.com/products')

   getData('https://dummyjson.com/products/categories')

    //getData('https://dummyjson.com/products?0&select=title,price')

    
    
    
    