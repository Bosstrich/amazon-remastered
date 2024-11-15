import { cart } from "../data/cart.js";
import { getDeliveryOption, getTodayDate } from "../data/deliveryOptions.js";
import { Order, orders } from "../data/ordersData.js";
import { getProduct } from "../data/products.js";
import { formatCurrency } from "../utils/price.js";

export function renderPaymentSummary(){

    let productPrice = 0;
    let shippingPrice = 0;

    const cartQuantity = cart.getQuantity();

    cart
        .cartItems
        .forEach((cartItem) => {

            const product = getProduct(cartItem.productId);
            productPrice += product.priceCents * cartItem.quantity;

            const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
            shippingPrice += deliveryOption.priceCents;
        });

    const totalBeforeTax = productPrice + shippingPrice;
    const tax = totalBeforeTax * 0.1;
    const totalPrice =  totalBeforeTax  + tax;

    const paymentSummaryHTML = `

        <div class="card">
            <div class="card-body pb-2">
                <h5 class="fw-bold">Order Summary</h5>
                <div class="d-flex justify-content-between">
                    <div class="payment-items-label text-left">Items (${cartQuantity}):</div>
                    <div class="payment-price text-right">$${formatCurrency(productPrice)} </div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="text-left">Shipping & Handling:</div>
                    <div class="payment-shipping-price text-right">$${formatCurrency(shippingPrice)} </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <div class="text-left">Total before tax:</div>
                    <div class="payment-total-taxed text-right border-top">$${formatCurrency(totalBeforeTax)} </div>
                </div>
                <div class="d-flex justify-content-between border-bottom pb-2">
                    <div class="text-left">Estimated tax(10%):</div>
                    <div class="payment-tax text-right">$${formatCurrency(tax)} </div>
                </div>
                <div class="d-flex justify-content-between fs-5 py-3 text-highlight">
                    <div class="text-left fw-bold">Order total:</div>
                    <div class="payment-total text-right fw-bold">$${formatCurrency(totalPrice)} </div>
                </div>
                <a href="orders.html" class="order-btn btn btn-primary w-100">
                    Place your Order
                </a>
                <p></p>
            </div>
        </div>
    
    `;


    document
        .querySelector('.payment-summary')
        .innerHTML = paymentSummaryHTML;

    
    const orderBtn = document
        .querySelector('.order-btn');


    orderBtn.addEventListener('click', ()=> {

        if(cart.cartItems.length !== 0){
            const order = new Order({

                orderId: crypto.randomUUID(),
                orderDate: getTodayDate(),
                totalPrice: totalPrice,
            })
    
            order.pushCart(cart.cartItems);
            orders.addOrder(order);
    
            cart.flushCart();

        }


     });


}