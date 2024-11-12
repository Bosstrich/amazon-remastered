
export let cart = JSON.parse(localStorage.getItem('cart')) || [];
export let cartQuantity = JSON.parse(localStorage.getItem('cartQuantity')) || 0;

console.log(`Cart : ${JSON.stringify(cart)}`);

document.addEventListener("DOMContentLoaded", () => {

    let cartNumberElem = document
    .querySelector('.cart-quantity');

    cartNumberElem.innerText = cartQuantity;


});

function saveToStorage(){

    localStorage.setItem(`cart`, JSON.stringify(cart));

}

function saveCartQuantity() {

    localStorage.setItem(`cartQuantity`, JSON.stringify(cartQuantity));

}

export function addToCart(productId, quantity) {

    let matchingItem;

    cart.forEach((cartItem ) => {

        if(productId === cartItem.productId) {

            matchingItem = cartItem;
        }
    });



    if(matchingItem) {
        console.log(`Matching Item : ${matchingItem}`);

        matchingItem.quantity += quantity;

    } else{

        cart.push({

            productId,
            quantity,
            deliveryOptionsId: '1'

        });
    }

    saveToStorage();
    updateQuantity();

    console.log(`Cart : ${JSON.stringify(cart)}`);
    console.log(`Updated Cart Quantity : ${cartQuantity}`);

}


export function updateQuantity(){

    cartQuantity = 0;
    console.log(`Current Count: ${cartQuantity}`);
    cart.forEach((cartItem) => {
        console.log(`Current Cart Item Quantity: ${cartItem.quantity}`);

        cartQuantity += cartItem.quantity;
        console.log(`Current Cart Quantity Added: ${cartQuantity}`);
    })


    let cartNumberElem = document
                        .querySelector('.cart-quantity');

    cartNumberElem.innerText = cartQuantity;

    saveCartQuantity();
}