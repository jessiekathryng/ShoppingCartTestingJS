// 9 Test Cases
//Canary Test - done
//Can create an instance of the checkout class - done
//Can add an item price - done
//Can add an item - done
//Can calculate the current total 
//Can add multiple items and get correct total
//Can add discount rules
//Can apply discount rules to the total
//Exception is thrown for item added without a price

//This defines the variable 'Checkout'
const Checkout = require('./ShopCartCode.js');
var expect = require('chai').expect;

beforeEach(function(){
    checkout = new Checkout();
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
    checkout.addItemPrice('item', '1');
    checkout.addItem('item');
    expect(checkout.currentTotal()).to.equal(1);
});

/*
it('Can add an item price', function(){
    var checkout = new Checkout();
    checkout.addItemPrice('a', '1');
});
it('Can add an item price', function(){
    var checkout = new Checkout();
    checkout.addItemPrice('a', '1');
});
*/
