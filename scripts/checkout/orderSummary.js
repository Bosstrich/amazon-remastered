import { cart } from "../data/cart.js";
import { formatCurrency } from "../utils/price.js";
import { getProduct } from "../data/products.js";
import { calculateDeliveryDate, deliveryOptions, getDeliveryOption } from "../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";

export function renderOrderSummary(){


    let cartSummaryHTML = ``;

    cart.cartItems.forEach((cartItem) => {

        const {productId} = cartItem;

        const matchingProduct = getProduct(productId);
        const deliveryOptionId = cartItem.deliveryOptionId;
        let deliveryOption = getDeliveryOption(deliveryOptionId);
        const dateString = calculateDeliveryDate(deliveryOption);

        cartSummaryHTML += `
    
            <div class="cart-item-container cart-item-${matchingProduct.id} card mb-3">
                <div class="card-body">
                    <h5 class="delivery-date text-success fw-bold">Delivery Date: ${dateString}</h5>
                    <div class="items-grid row row-cols-2 row-cols-md-3 pt-3 gx-3">
                        <div class="col-5 col-lg-2">
                            <img class="product-image w-100" src="${matchingProduct.image}" alt="">
                        </div>
                        <div class="item-details col-7 col-lg-5">
                            <p class="fw-bold product-name mb-0">${matchingProduct.name}</p>
                            <span class="fw-bold product-price text-highlight">$${formatCurrency(matchingProduct.priceCents)}</span>
                            <div class="product-quantity d-flex gap-2 align-items-center h-25">
                                <span>Quantity:
                                    <span class="quantity-label quantity-label-${matchingProduct.id}">
                                        ${cartItem.quantity}
                                    </span>
                                </span>
                                <span data-product-id="${matchingProduct.id}"
                                      role="button" 
                                      class="update-link update-link-${matchingProduct.id} link text-blue-primary">Update</span>
                                <input max='10' min='0'
                                       type="number" 
                                       class="quantity-input quantity-input-${matchingProduct.id} form-control form-control-sm" style="width: 60px;">
                                <span data-product-id="${matchingProduct.id}"
                                      role="button" 
                                      class=" save-link link text text-blue-primary">Save</span>
                                <span role="button"
                                      class="delete-link link text-blue-primary"
                                      data-product-id="${matchingProduct.id}" 
                                      >Delete</span>
                            </div>
                        </div>
                        <div class="col-12 col-lg-5  delivery-option-container mt-3 mt-md-0">
                            <p class="delivery-options-title fw-bold mb-2">Choose a Delivery Option:</p>
                            ${deliveryOptionsHTML(matchingProduct, cartItem)}
                        </div>
                    </div>
                </div>
            </div>   
    
    
        `

    });

    function deliveryOptionsHTML(matchingProduct, cartItem) {

        let html = '';

        deliveryOptions.forEach((deliveryOption) => {

            const dateString = calculateDeliveryDate(deliveryOption);

            const priceString = deliveryOption.priceCents === 0 ? 'Free': `$${formatCurrency(deliveryOption.priceCents)} -`;
            
            const isChecked = deliveryOption.id === cartItem.deliveryOptionId;


            html += `

                <div class="delivery-option 
                            delivery-option-${matchingProduct.id}-${deliveryOption.id} d-flex gap-2 mb-2 mt-0"
                     data-product-id="${matchingProduct.id}"
                     data-delivery-option-id="${deliveryOption.id}">
                    <input  ${isChecked? 'checked' : ''}
                            role="button"
                            class=""
                            style="width: 20px;"
                            type="radio"
                            name="${matchingProduct.id}"
                    >
                    <div class="lh-sm">
                        <div class="delivery-option-date fw-bold text-success">${dateString}</div>
                        <div class="delivery-option-price text-secondary">${priceString} Shipping</div>
                    </div>
                </div>
            
            `;
        

        });

        return html;
    }

    document.querySelector('.order-summary').innerHTML = cartSummaryHTML;   

    document
        .querySelectorAll('.update-link')
        .forEach((link) => {

            link.addEventListener('click', () => {

                const {productId} = link.dataset;
                const container = document.querySelector(`.cart-item-${productId}`);
                container.classList.add('isEditing');

            })
        });

    document
    .querySelectorAll('.save-link')
    .forEach((link) => {

        link.addEventListener('click', () => {

            const {productId} = link.dataset;
            const container = document.querySelector(`.cart-item-${productId}`);
            const label = document.querySelector(`.quantity-label-${productId}`);

            const input = document.querySelector(`.quantity-input-${productId}`);
            const updatedQuantity = input.value === '' ? Number(label.innerText) : Number(input.value);

            if(updatedQuantity){

                label.innerText = updatedQuantity;
                cart.updateItem(productId, updatedQuantity);
                renderPaymentSummary();


            }else{

                cart.removeFromCart(productId);
                renderOrderSummary();
                cart.updateQuantity();
                renderPaymentSummary();


            }
            
            container.classList.remove('isEditing');

        })
    });

    document
        .querySelectorAll('.delete-link')
        .forEach((link) => {

            link.addEventListener('click' , () => {

                const {productId} = link.dataset;

                cart.removeFromCart(productId);
                renderOrderSummary();
                renderPaymentSummary();
                cart.updateQuantity();

            })
        });

    document
        .querySelectorAll('.delivery-option')
        .forEach((option) => {

            option.addEventListener('click' , () => {

                const {productId, deliveryOptionId} = option.dataset;

                cart.updateDeliveryOption(productId, deliveryOptionId);
                renderOrderSummary();
                renderPaymentSummary();


            })
    });




}

export function getOrderDetails(){



        
}

function generateOrderId() {
    return uuidv4(); // Generates a random UUID (v4)
}