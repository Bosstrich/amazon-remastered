import { cart } from "../data/cart";
import { getProduct } from "../data/products";

export function renderOrderSummary(){


    let cartSummaryHTML = ``;

    cart.cartItems.forEach((cartItem) => {

        const {productId} = cartItem;

        const matchingProduct = getProduct(productId);

    });


}