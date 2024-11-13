import { products } from "./data/products.js";
import { cart } from "./data/cart.js";
import { renderNavbar } from "./navbar.js";


renderNavbar();
cart.updateQuantity();
function renderProducts() {

    let productsHTML = '';


    products.forEach((product) => {

        productsHTML += `
            
            <div class="product-container product-styling col">
                <div class="card h-100" >
                    <img class="card-img-top p-3 product-img" src="${product.image}" alt="">
                    <div class="card-body ">
                        <h1 class="card-title fs-6 product-name">${product.name}</h1>
                        <div class="product-rating-container d-flex align-items-center gap-2 pt-3" >
                            <img class="w-50" src="images/ratings/rating-${product.rating.stars * 10}.png" alt="">
                            <a class="text-decoration-none" href="#">87</a>
                        </div>
                        <div class="product-price">
                            <p class="fw-bold pt-2">$${product.priceCents / 100}</p>
                        </div>
                        <div class="product-quantity-container">
                            <select class="selector-${product.id} form-select form-select-sm w-50" id="exampleSelect">
                                <option selected value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div class="btn-toaster btn-toaster-${product.id} mt-3 py-2 text-success d-flex align-items-center opacity-0 ">
                            <img src="images/icons/checkmark.png"/>
                            <span class="ps-1">Added</span>
                        </div>
                        <button class="btn btn-primary w-100 mt-2 atc-btn rounded-3"
                                data-product-id="${product.id}">Add to Cart</button>
                    </div>

                </div>
            </div>
        
        `;
    });


    document.querySelector('.products-grid').innerHTML = productsHTML;

    const addedMessageTimeoutIds = {};

    function displayToast(productId) {


        let toaster = document.querySelector(`.btn-toaster-${productId}`);
        let timeoutId;
    
        toaster
            .classList.add('opacity-100');
        toaster
            .classList.remove('opacity-0')

        if (addedMessageTimeoutIds[productId]) {

            clearTimeout(addedMessageTimeoutIds[productId]);

        }

        addedMessageTimeoutIds[productId] = setTimeout(() => {

            toaster
                .classList.add('opacity-0');
            toaster
                .classList.remove('opacity-100')
    
        }, 2000);
    
    
    }


    document
        .querySelectorAll('.atc-btn')
        .forEach((btn) => {

            btn.addEventListener('click', () => {

                const {productId} = btn.dataset;
                const selectorElem = document.querySelector(`.selector-${productId}`);
                const quantity = Number(selectorElem.value);

                displayToast(productId);
                cart.addToCart(productId, quantity);
                
                console.log(`selected Product: ${productId}; Amount: ${quantity}`);


            });
        })

}




renderProducts();
