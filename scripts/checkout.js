import { renderNavbar } from "./navbar.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { cart } from "./data/cart.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

renderNavbar();
renderOrderSummary();
renderPaymentSummary();

