let products = [
    {name: "apple", image: "apple.jpg", price: 12},
    {name: "tomato", image: "tomato.jpg", price: 33}
]
let cart = []
function load(){
    products.forEach((i, index)=>{

        let item = document.createElement('div');
        item.innerHTML = `
        <div class="product">
        <img src="images/${i.image}">
        <p class="name">${i.name}</p>
        <p class="price">$${i.price}</p>
        <button class="add">Add To Cart</button>
        </div>
        `
        const items = document.getElementById('items');
        
        item.getElementsByClassName('add')[0].addEventListener('click', ()=> {
            addToCart(index)
        })
        items.append(item)
    })
}

load()

function addToCart(index){
    cart.push(index)
    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`${products[index].name} added to cart`)
}