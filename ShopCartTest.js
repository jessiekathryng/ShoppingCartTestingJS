// 9 Test Cases
//Canary Test - done
//Can create an instance of the checkout class - done
//Can add an item price
//Can add an item
//Can calculate the current total
//Can add multiple items and get correct total
//Can add discount rules
//Can apply discount rules to the total
//Exception is thrown for item added without a price

//This defines the variable 'Checkout'
const Checkout = require('./ShopCartCode.js');
var expect = require('chai').expect;
//Test 1
//Refactored: checkout expression is duplicated in test 1 and 2; Test 1 not necessary
//it('Can create checkout', function(){
    //var checkout = new Checkout();
//});
//Test 2
it('Can add an item price', function(){
    var checkout = new Checkout();
    checkout.addItemPrice('a', '1');
});
