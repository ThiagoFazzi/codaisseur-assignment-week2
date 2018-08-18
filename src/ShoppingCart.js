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

    }

}

module.exports =  ShoppingCart 