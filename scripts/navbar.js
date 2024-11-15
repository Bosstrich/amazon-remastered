import { cart } from "./data/cart.js";

export function renderNavbar(){



    const html = `
        <nav class="navbar navbar-dark fixed-top py-0" >
            <div class="navbar-top d-flex container-fluid justify-content-between align-items-center flex-nowrap px-3 py-1  gap-2">
                <div class="d-flex align-items-center justify-content-start gap-0">
                    <a class="d-md-none d-block" href="amazon.html">
                        <img src="images/amazon-mobile-logo-white.png" class="navbar-brand white-border-hover"  style="width:50px ">
                    </a>
                    <a class="d-none d-md-block" href="amazon.html">
                        <img src="images/amazon-logo-white.png" class="navbar-brand white-border-hover"  style="width:120px ">
                    </a>
                    <a href="#"
                       class="text-decoration-none white-border-hover text-white d-flex lh-sm fs-6"
                       data-bs-toggle="modal"
                       data-bs-target="#modal">
                        <i class="bi bi-geo-alt self-end fs-5" style="align-self: self-end; "></i>
                        <div style="line-height: 1rem;">
                            <span class="d-block text-gray-1" style="font-size: 0.75rem;">Deliver to</span>
                            <span class="fw-bold" style="font-size: 0.85rem;">Philippines</span>
                        </div>
                    </a>
        
        
                </div>
                <div class="input-group input-group-m input-group-border d-flex flex-nowrap align-items-stretch" id="search-group" style=" max-width: 800px; height: 2.5rem;">
                    <button class="btn bg-gray-1 dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style="font-size: 0.75rem;"
                            >All </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">All Departments</a></li>
                      <li><a class="dropdown-item" href="#">Arts & Crafts</a></li>
                      <li><a class="dropdown-item" href="#">Automotive</a></li>
                    </ul>
                    <input class="amazon-search form-control px-3 flex-grow-1" type="text" placeholder="Search Amazon" style="outline: none;">
                    <button class="search-btn input-group-text btn bg-pink-light d-flex align-items-center" type="button" style="width: 50px;">
                        <i class="bi bi-search text-white fs-5"></i>
                    </button>
                </div>
                <div class="d-flex gap-3 align-items-center" >
                    <a href="orders.html" class="text-decoration-none text-white white-border-hover" style="line-height: 1rem;">
                        <span class="d-block" style="font-size: 0.75rem;">Returns</span>
                        <span class="text-nowrap fw-bold" style="font-size: 0.85rem;">& Orders</span>
                    </a>
                    <a href="checkout.html" class="position-relative text-decoration-none text-white d-flex white-border-hover">
                        <img src="images/icons/cart-icon.png" style="width: 40px; height: 30px; align-self: self-end;" >
                        <div class="fw-bold mt-3">Cart</div>
                        <div class="cart-quantity position-absolute translate-middle fw-bold fs-6" style="top: 40%; left: 32%;"></div>
                    </a>
        
                </div>
        
            </div>
            <div class="navbar-bottom d-flex justify-content-between container-fluid px-3">
                <div class="d-flex align-items-stretch">
                    <a href="#offcanvas" class=" d-flex align-items-center text-decoration-none text-white links-white-hover fw-bold fs-6"
                                data-bs-toggle="offcanvas"
                                role="button"
                                aria-controls="offcanvas">
                        <i class="bi bi-list" style="font-size: 1.5rem;"></i>
                        <span>All</span>
                    </a>
                    <a href="#" class="d-none links-white-hover text-decoration-none text-white d-lg-flex align-items-center">Today's Deals</a>
                    <a href="#" class="d-none links-white-hover text-decoration-none text-white d-lg-flex align-items-center">Customer Service</a>
                    <a href="#" class="d-none links-white-hover text-decoration-none text-white d-lg-flex align-items-center">Registry</a>
                    <a href="#" class="d-none links-white-hover text-decoration-none text-white d-lg-flex align-items-center">Gift Cards</a>
                    <a href="#" class="d-none links-white-hover text-decoration-none text-white d-lg-flex align-items-center">Sell</a>
                </div>
                <div>
                    <a href="#" class="links-white-hover text-decoration-none text-white d-flex align-items-center">Get free shipping to Philippines</a>
                </div>
            </div>
        </nav>
        <div class="modal modal-md" id="modal">
            <div class="modal-dialog modal-dialog-centered"  style="max-width: 400px;">
                <div class="modal-content">
                    <div class="modal-header d-flex align-items-center bg-gray-3">
                        <p class="modal-title fw-bold">Choose Your Location</p>
                        <button class="btn-close"
                                data-bs-dismiss="modal"
                                data-bs-target="#modal">
                        </button>
                    </div>
                    <div class="modal-body">
                        <p style="font-size: 0.85rem;">Delivery options and delivery speeds may vary for different locations</p>
                        <button class="btn btn-primary w-100">Sign in to see your Address</button>
                        <div class="d-flex align-items-center my-3">
                            <div class="flex-grow-1 border-top"></div>
                            <span class="mx-3">or enter a US zip code</span>
                            <div class="flex-grow-1 border-top"></div>
                        </div>
                        <div class="d-flex gap-2">
                            <input class="form-control flex-grow-1" type="text" maxlength="5">
                            <button class="btn btn-outline-secondary">Apply</button>
                        </div>
                        <div class="d-flex align-items-center my-3">
                            <div class="flex-grow-1 border-top"></div>
                            <span class="mx-3">or ship outside the US</span>
                            <div class="flex-grow-1 border-top"></div>
                        </div>
                        <div class="dropup">
                            <button class="btn bg-gray-3 dropdown-toggle w-100 d-flex justify-content-between align-items-center"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                Philippines
                            </button>
                            <ul class="dropdown-menu w-100">
                                <li><a class="dropdown-item " href="#">Paruguay</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-dismiss="modal">Done</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="offcanvas offcanvas-start " style="width: 23rem;" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
            <div class="offcanvas-header position-relative" style="padding: 0;">
                <button class="btn btn-lg btn-dark w-100 rounded-0 d-flex justify-content-start align-items-center gap-2 ps-4 py-2">
                    <i class="bi bi-person-circle fs-4"></i>
                    <span class="fw-bold fs-5">Hello, sign in</span>
                </button>
                <button type="button"
                        class="btn-close btn-close-white fs-5 position-absolute top-50"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        style="right: -30px;"></button>
            </div>
            <div class="offcanvas-body list-group px-0">
                <span class="text-dark fw-bold px-4 py-2">Digital Content & Devices</span>
                <button class="btn btn-light w-100 text-start px-4 py-2 rounded-0 d-flex justify-content-between align-items-center fw-bold" 
                        style="height: 3rem" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseWidthExample" 
                        aria-expanded="false" 
                        aria-controls="collapseWidthExample">Amazon Music <i class="bi bi-chevron-right "></i>
                </button>
                <button class="btn btn-light w-100 text-start px-4 py-2 rounded-0 d-flex justify-content-between align-items-center fw-bold" 
                        style="height: 3rem" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseWidthExample" 
                        aria-expanded="false" 
                        aria-controls="collapseWidthExample">Kindle E-Readers & Books <i class="bi bi-chevron-right "></i>
                </button>
                <button class="btn btn-light w-100 text-start px-4 py-2 mb-2 rounded-0 d-flex justify-content-between align-items-center fw-bold" 
                        style="height: 3rem" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseWidthExample" 
                        aria-expanded="false" 
                        aria-controls="collapseWidthExample">Amazon Appstore <i class="bi bi-chevron-right "></i>
                </button>

                <span class="text-dark fw-bold px-4 pt-3 pb-2 border-top">Help & Settings</span>
                <button class="btn btn-light w-100 text-start px-4 py-2 rounded-0 d-flex justify-content-between align-items-center fw-bold" 
                        style="height: 3rem" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseWidthExample" 
                        aria-expanded="false" 
                        aria-controls="collapseWidthExample">Your Account
                </button>
                <button class="btn btn-light w-100 text-start px-4 py-2 rounded-0 d-flex justify-content-start gap-2 align-items-center fw-bold" 
                        style="height: 3rem" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseWidthExample" 
                        aria-expanded="false" 
                        aria-controls="collapseWidthExample"><i class="bi bi-globe"></i>English
                </button>
                                <button class="btn btn-light w-100 text-start px-4 py-2 rounded-0 d-flex justify-content-between align-items-center fw-bold" 
                        style="height: 3rem" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseWidthExample" 
                        aria-expanded="false" 
                        aria-controls="collapseWidthExample">Sign in
                </button>
                
                
                
            </div>
        </div>

    `

    const header = document.querySelector('header');

    header.innerHTML = html;
    const searchInput = document.querySelector('.amazon-search');
    const inputGroup = document.getElementById('search-group');

    searchInput.addEventListener('focus', () => {
        inputGroup.classList.add('focus-border');
    });

    searchInput.addEventListener('blur', () => {
        inputGroup.classList.remove('focus-border');
    });

    cart.updateQuantity();

}