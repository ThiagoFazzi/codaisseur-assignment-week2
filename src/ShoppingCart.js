class ShoppingCart {
    constructor(){
        this.items = []
    }
    getItems(){
        return this.items;
    }
    
    addItem(itemName, quantity, price){
        this.items.push({
            name: itemName,
            pricePerUnit: price,
            quantity: quantity
        })
    }

    clear(){
        this.items = []
    }

    clone(){
        return Object.assign(new ShoppingCart(),this)
    }
}

const cart = new ShoppingCart()
cart.addItem('car', 1, 2)
const cartView = cart.getItems();
console.log(cartView)
cart1 = cart.clone()
const cart1View = cart1.getItems();
console.log(cart1View)
if(cart === cart1){ console.log(true) }else{ console.log(false)}




module.exports =  ShoppingCart

