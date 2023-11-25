let products = [
    {name: "apple", image: "apple.jpg", price: 12},
    {name: "tomato", image: "tomato.jpg", price: 33}
]
let cart = []

function load(){
    const cartData = localStorage.getItem('cart');
    cart = JSON.parse(cartData)
    cart.forEach((i)=>{

        let item = document.createElement('div');
        item.innerHTML = `
        <div class="product">
        <img src="images/${products[i].image}">
        <p class="name">${products[i].name}</p>
        <p class="price">$${products[i].price}</p>
        <button class="remove">Remove</button>
        </div>
        `
        const items = document.getElementById('items');
        
        item.getElementsByClassName('remove')[0].addEventListener('click', (e)=> {
            remove(i, e)
        })
        items.append(item)
    })
    tot();
}

load()

function tot(){
    let total = 0;
    cart.forEach((i)=> {
        total += products[i].price
    });
    document.getElementById('total').innerText = total;
}
function remove(i, e){
    for (let index = 0; index < cart.length; index++) {
        if(cart[index] === i){
            cart.splice(index, 1)
        } 
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    e.target.parentElement.remove()
    tot();
    alert(`${products[i].name} from cart`)
}