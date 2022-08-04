// 9 Test Cases
//Canary Test - done
//Can create an instance of the checkout class - done
//Can add an item price - done
//Can add an item - done
//Can calculate the current total - done
//Can add multiple items and get correct total - done
//Can add discount rules - done
//Can apply discount rules to the total - done
//Exception is thrown for item added without a price

//This defines the variable 'Checkout'
const Checkout = require('./ShopCartCode.js');
var expect = require('chai').expect;
//added for test 5
var checkout;

beforeEach(function(){
    checkout = new Checkout();
    checkout.addItemPrice('ItemA', 1);
    checkout.addItemPrice('ItemB', 1);
});
//Refactored: checkout declaration is duplicated in test 1 and 2;
// Test 1 not necessary;
//Test 1
//it('Can create checkout', function(){
    //var checkout = new Checkout();
//});

//Test 2
//Refactored: checkout declaration is duplicated again; 
//Added test setup function using 'beforeEach' to prevent duplication;
/*
it('Can add an item price', function(){
    checkout.addItemPrice('item', '1');
});
//Test 3
it('Can add an item', function(){
    var checkout = new Checkout();
    checkout.addItemPrice('item', '1');
    checkout.addItem('item');
});
*/
//Test 4
//Refactored: addItemPrice and addItem is now duplicated in this test
//Test 2 & 3 are no longer necessary; being carried out in Test 4
it('Can calculate the current total', function(){
    //Refactored: Prices for item A and B are duplicated; 
    //Moved to beforeEach fixture in beginning
    //checkout.addItemPrice('ItemA', '1');
    checkout.addItem('ItemA');
    expect(checkout.calculateTotal()).to.equal(1);
});
//Test 5
it('Can add multiple items and get correct total', function(){
    //Refactored: Prices for item A and B are duplicated; 
    //Moved to beforeEach fixture in beginning
    //checkout.addItemPrice('ItemA', 1);
    //checkout.addItemPrice('ItemB', 2);
    checkout.addItem('ItemA');
    checkout.addItem('ItemB');
    expect(checkout.calculateTotal()).to.equal(2);
});
//Test 6
it('Can add discount rules', function(){
        //Discount perameters: item type, number of items req for discount, discounted price
    checkout.addDiscount('ItemA', 3, 2);
});
//Test 7
it('Can apply discount rules to the total', function(){
    checkout.addDiscount('ItemA', 3, 2);
    checkout.addItem('ItemA');
    checkout.addItem('ItemA');
    checkout.addItem('ItemA');
    expect(checkout.calculateTotal()).to.equal(2);
});


