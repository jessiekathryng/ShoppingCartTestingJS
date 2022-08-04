// Testing module
module.exports = class Checkout{

//construct for Test 5
    constructor(){
        this.prices = new Object();
        this.total = 0;
    }
    //Method for Test 2
    addItemPrice(item, price){
        //added for Test 5
        this.prices[item] = price;
    }
    //Method for Test 3
    addItem(item){
        //added for Test 5
        this.total = this.total + this.prices[item];
    }
    //Method written for Test 4
    //Removed for Test 5
    /*currentTotal(total){
        return (currentTotal);
    }*/
    
    //Method for Test 5
    calculateTotal(){ 
        return this.total;
    }
}