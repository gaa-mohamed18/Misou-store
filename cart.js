let cart = [];

function addToCart(name,price){

cart.push({
name:name,
price:price
});

alert("Product added to cart");

localStorage.setItem("cart",JSON.stringify(cart));

}
