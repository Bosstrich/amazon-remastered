export class Order{

    orderId;
    orderDate;
    totalPrice;
    products;

  
    constructor(orderDetails) {

        this.orderId = orderDetails.orderId;
        this.orderDate = orderDetails.orderDate;
        this.totalPrice = orderDetails.totalPrice;
    }

    pushCart(cartItems) {

        this.products = cartItems;

    }

}

class Orders{

    orderList;
    #localStorageKey;

    constructor(localStorageKey){

        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }

    #loadFromStorage(){

        this.orderList = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [];
    }

    saveToStorage(){

        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.orderList));

        
    }

    addOrder(order){

        this.orderList.push(order);
        this.saveToStorage();
    
        
    }

    displayOrders(){

        console.log(this.orderList);
    }
}

export const orders = new Orders('orders'); 