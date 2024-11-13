import { renderNavbar } from "./navbar.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { cart } from "./data/cart.js";

renderNavbar();
cart.updateQuantity();
renderOrderSummary();
