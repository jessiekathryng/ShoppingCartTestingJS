// Testing module
module.exports = class Checkout{

//construct for Test 5
    constructor(){
        //This object holds price methods
        this.prices = new Object();
        //Keep track of how many of each type of item has be added
        //The integer will be the count of each item that has been added
        this.items = new Object();
        //Added for Test 7 
        //  Add an object to hold discount rules by creating
        // a new object in checkout for holding the new discounts
        this.discounts = new Object();
    }
    //Method for Test 2
    addItemPrice(item, price){
        //added for Test 5
        this.prices[item] = price;
    }
    //Method for Test 3
    addItem(item){
        //added for Test 5
        //this.total = this.total + this.prices[item];
        //Refactored for Test 7
        //Keep track of how many of each type of item has been added
        if(this.items[item] == undefined){
            this.items[item] = 1;
        }
        //Update the calculateTotal method to repeat over all the 
        //the counts in the items dictionary
        else {
            this.items[item]++;
        }
    }
    //Method written for Test 4
    //Removed for Test 5
    /*currentTotal(total){
        return (currentTotal);
    }*/

    //Method for Test 5
    calculateTotal(){ 
    //Refactored for Test 7
    //Calculate the total by multiplying the total number of items added,
    //by each itemprice, and returning that value.
        var total = 0;
        for(var item in this.items){
            total += this.calculateItemTotal(item);
        }
        return total;
    }
    //Refactored and added after Test 7
    //Create seperate function that calcs total for a particular item
    calculateItemTotal(item){
        var total = 0;  
        var discount = this.discounts[item];
        if( discount != undefined){
            total += this.calculateDiscount(item, this.items[item], discount);
            //That value is multiplied by the normal item price 
            //and added to the total
        }
        else {
            total += (this.prices[item] * this.items[item]);
        }
        return total;
    }
    //Test 7 Refactor
    //Extract function to calculate the total price for an item when 
    //there is a discount. 
    //This function should be passed the item type, item count, and discount
    calculateDiscount(item, itemCount, discount){
        //Calc number of discount that shuld be applied
        //Number of items add to checkout, divided by
        //number of items specified for the discount. Then,
        //multiply that number by the discounted price to calc
        //what needs to be added to the total
        var total = 0; 
        var numbrOfDiscounts = itemCount / discount.cnt;
        total += numbrOfDiscounts * discount.price;
        //Calc how many items cannot be applied to a discount
        //number of items added to checkout % the discount number of items
        //The remainder value is the number of items that cannot be applied
        //to the discount
        var remainder = itemCount % discount.cnt;
        total += remainder * this.prices[item];
        return total;
    }
    //Method for Test 6
    addDiscount(item, itemCount, discountPrice){
        //Added for Test 7
        //Update the addDiscount method to create a new discount object,
        // with the item count and the discounted item price, in that discount object.
        // this data structure stores discounts that we can use when calculating the total.
       this.discounts[item] = {cnt:itemCount, price:discountPrice};
    }
}


