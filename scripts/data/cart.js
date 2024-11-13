
class Cart {


    cartItems;
    cartQuantity;

    #localStorageKey;

    constructor (localStorageKey){

        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
        this.#loadCartQuantity();
    }

    #loadFromStorage(){

        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [];
    }

    #loadCartQuantity(){

        this.cartQuantity = JSON.parse(localStorage.getItem('cartQuantity')) || 0;
    }


    saveToStorage(){

        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));

        
    }

    saveCartQuantity() {

        localStorage.setItem(`cartQuantity`, JSON.stringify(this.cartQuantity));
    
    }

    addToCart(productId, quantity){

        let matchingItem;

        this.cartItems.forEach((cartItem ) => {
    
            if(productId === cartItem.productId) {
    
                matchingItem = cartItem;
            }
        });
    
    
    
        if(matchingItem) {
            console.log(`Matching Item : ${matchingItem}`);
    
            matchingItem.quantity += quantity;
    
        } else{
    
            this.cartItems.push({
    
                productId,
                quantity,
                deliveryOptionId: '1'
    
            });
        }
    
        this.saveToStorage();
        this.updateQuantity();
    
        console.log(`Cart : ${JSON.stringify(this.cartItems)}`);
        console.log(`Updated Cart Quantity : ${cartQuantity}`);


    }

    removeFromCart(productId){

        const newCart = [];
    
        this
            .cartItems
            .forEach((cartItem) => {
    
                if(cartItem.productId !== productId){
    
                    newCart.push(cartItem);
                }
            })
        
        this.cartItems = newCart;

        this.updateQuantity();
        this.saveToStorage();
    }

    updateItem(productId, newQuantity){

        let matchingItem;

        this.cartItems.forEach((cartItem) => {

            if(productId === cartItem.productId){

                matchingItem = cartItem;
            }
        })

        matchingItem.quantity = newQuantity;
        this.updateQuantity();
        this.saveToStorage();

    }

    updateQuantity(){

        this.cartQuantity = 0;
        console.log(`Current Count: ${this.cartQuantity}`);
        this
            .cartItems
            .forEach((cartItem) => {

            console.log(`Current Cart Item Quantity: ${cartItem.quantity}`);
    
            this.cartQuantity += cartItem.quantity;
            console.log(`Current Cart Quantity Added: ${this.cartQuantity}`);
        })
    
    
        let cartNumberElem = document
                            .querySelector('.cart-quantity');
    
        cartNumberElem.innerText = this.cartQuantity;
    
        this.saveCartQuantity();
    }

    updateDeliveryOption(productId, deliveryOptionId){

        let matchingItem;

        this.cartItems.forEach((cartItem) =>{
       
             if (productId === cartItem.productId) {
               matchingItem = cartItem;
             }
             
        });
      
        matchingItem.deliveryOptionId = deliveryOptionId;
      
      
        this.saveToStorage();
        
    }

}


export const cart = new Cart('cart');



// export let cart = JSON.parse(localStorage.getItem('cart')) || [];
// export let cartQuantity = JSON.parse(localStorage.getItem('cartQuantity')) || 0;

// console.log(`Cart : ${JSON.stringify(cart)}`);

// document.addEventListener("DOMContentLoaded", () => {

//     let cartNumberElem = document
//     .querySelector('.cart-quantity');

//     cartNumberElem.innerText = cartQuantity;


// });

// function saveToStorage(){

//     localStorage.setItem(`cart`, JSON.stringify(cart));

// }

// function saveCartQuantity() {

//     localStorage.setItem(`cartQuantity`, JSON.stringify(cartQuantity));

// }

// export function addToCart(productId, quantity) {

//     let matchingItem;

//     cart.forEach((cartItem ) => {

//         if(productId === cartItem.productId) {

//             matchingItem = cartItem;
//         }
//     });



//     if(matchingItem) {
//         console.log(`Matching Item : ${matchingItem}`);

//         matchingItem.quantity += quantity;

//     } else{

//         cart.push({

//             productId,
//             quantity,
//             deliveryOptionsId: '1'

//         });
//     }

//     saveToStorage();
//     updateQuantity();

//     console.log(`Cart : ${JSON.stringify(cart)}`);
//     console.log(`Updated Cart Quantity : ${cartQuantity}`);

// }

// export function removeFromCart(productId){

//     const newCart = [];

//     cart
//         .forEach((cartItem) => {

//             if(cartItem.productId !== productId){

//                 newCart.push(cartItem);
//             }
//         })
    
//     cart = newCart;
//     saveToStorage();
// }


// export function updateQuantity(){

//     cartQuantity = 0;
//     console.log(`Current Count: ${cartQuantity}`);
//     cart.forEach((cartItem) => {
//         console.log(`Current Cart Item Quantity: ${cartItem.quantity}`);

//         cartQuantity += cartItem.quantity;
//         console.log(`Current Cart Quantity Added: ${cartQuantity}`);
//     })


//     let cartNumberElem = document
//                         .querySelector('.cart-quantity');

//     cartNumberElem.innerText = cartQuantity;

//     saveCartQuantity();
// }