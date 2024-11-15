import { renderNavbar } from "./navbar.js";
import { Order, orders} from "./data/ordersData.js";
import { cart } from "./data/cart.js";
import { formatCurrency } from "./utils/price.js";
import { getProduct } from "./data/products.js";
import { calculateDeliveryDate, getDeliveryOption } from "./data/deliveryOptions.js";


renderNavbar();

function renderOrdersHTML(){

    let html = '';

    orders.displayOrders();


    orders
        .orderList
        .forEach((order) => {

            html+= `
                <div class="order col">
                    <div class="card mb-5">
                        <div class="card-header p-3 px-4">
                            <div class="row row-cols-1 row-cols-md-3">
                                <div class="col col-md-3 col-lg-2 lh-sm">
                                    <span class="order-date-label fw-semibold d-md-block">Order Placed:</span>
                                    <span class="order-date">${order.orderDate}</span>
                                </div>
                                <div class="col col-md-3 col-lg-5 lh-sm">
                                    <span class="order-total-label fw-semibold d-md-block">Total:</span>
                                    <span class="order-totalPrice">$${formatCurrency(order.totalPrice)}</span>
                                </div>
                                <div class="col col-md-6 col-lg-5 text-md-end lh-sm">
                                    <span class="order-id-label fw-semibold d-md-block">Order ID: </span>
                                    <span class="order-id">${order.orderId}</span>
                                </div>
                            </div>
                        </div>
                        <div class="card-body pt-5 px-4">
                            ${renderProductOrders(order.products)}
                        </div>
                    </div>
                </div>
        
            `   
        });

    document.querySelector('.orders-grid')
            .innerHTML = html;
}


function renderProductOrders(products){


    let productsHTML = '';

    products.forEach((product) => {


        let productItem = getProduct(product.productId);
        const deliveryOption = getDeliveryOption(product.deliveryOptionId);
        console.log('Product Item:', productItem);
        console.log('Product Item Image:', productItem.image);


        productsHTML +=  `
    
            <!-- Products inside the order  (Product 1)-->
            <div class="row row-cols-2 row-cols-md-3  mb-5">
                <div class="col-3 col-md-2">
                    <img class="w-100" src="${productItem.image}" style="width: 100px; max-height: 100px; object-fit: contain;">
                </div>
                <div class="col-8 col-md-5">
                    <p class="product-order-name fw-bold my-0">${productItem.name}</p>
                    <p class="product-order-labelDate my-0">Arriving on: ${calculateDeliveryDate(deliveryOption)}</p>
                    <p class="product-order-labelQuantity my-0">Quantity: ${product.quantity}</p>
                    <a class="text-decoration-none" href="amazon.html"> 
                        <button class="btn btn-primary my-2 d-flex gap-2">
                            <img src="images/icons/buy-again.png" style="width: 25px;"></img>Buy it again
                        </button>
                    </a>
                </div>
                <div class="col col-md-5 d-flex justify-content-md-end justify-content-start offset-3 offset-md-0">
                    <a href="track.html" class="btn btn-track px-md-5 px-4">Track Package</a>
                </div>
            </div>
    
        `
    });

    return productsHTML;
}


renderOrdersHTML();