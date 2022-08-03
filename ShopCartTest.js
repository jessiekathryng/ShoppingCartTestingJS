// 9 Test Cases
//Canary Test
//Can create an instance of the checkout class
//Can add an item price
//Can add an item
//Can calculate the current total
//Can add dmultiple items and get correct total
//Can add discount rules
//Can apply discount rules to the total
//Exception is thrown for item added without a price

//This defines the variable 'Checkout'
const Checkout = require('./ShopCartCode.js');
var expect = require('chai').expect;
//Test 1
it('Can create checkout', function(){
    var checkout = new Checkout();
});
