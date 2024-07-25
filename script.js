fetch("https://dummyjson.com/carts")

.then(data => data.json())

.then(cart => display(cart))

function display(cart) {
    for (let product of cart.carts){
        for (let item of product.products) {
            console.log(item.id);
            card = `
            <div class="card" style="width: 18rem;">
            <img src="${item.thumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text text-primary">Price:${item.price}</p>
              
               <p class="discount"> ${item.discountPercentage}%off</p>
            
          
              <a href="#" class="btn btn-primary">Buy Now</a>
              <a href="#" class="btn btn-success ms-2">Add to cart</a>
            </div>
           
          </div>
          `

          result.innerHTML += card
        }
    }
}