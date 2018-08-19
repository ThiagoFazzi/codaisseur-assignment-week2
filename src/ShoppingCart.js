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
        //const temp = this
        let tempObj = new ShoppingCart()
        //tempObj = temp
        //console.log(temp)
        //console.log(tempObj)
        //return tempObj

        return Object.assign(tempObj,this)
    }
}


/** 
Tests about clone()

const cart = new ShoppingCart()
cart.addItem('car', 1, 2)
const cartView = cart.getItems();
console.log(cartView)
cart.clone()
cart1 = cart.clone()
const cart1View = cart1.getItems();
console.log(cart1View)
if(cart === cart1){ console.log(true) }else{ console.log(false)}
cart.addItem('pen', 1, 5)
if(cart === cart1){ console.log(true) }else{ console.log(false)}
const cartView2 = cart.getItems()
const cartView3 = cart1.getItems()
console.log(cartView2)
console.log(cartView3)
*/





module.exports =  ShoppingCart

