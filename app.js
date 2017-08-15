'use strict';

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var store1 = {
  name: '1st and Pike',
  minHrCustomers: 23,
  maxHrCustomers: 65,
  avgCookiesSale: 6.3,
  cookiesSold: [],
  dailyCookieSales: 0,
  cookieSales: function() {
    for (var i = 0; i < 15; i++) {
      var customers = Math.floor(Math.random() * (this.maxHrCustomers - this.minHrCustomers) + this.minHrCustomers);
      var hourlySales = Math.floor(customers * this.avgCookiesSale);
      console.log(hourlySales);
      this.cookiesSold.push(hourlySales);
      this.dailyCookieSales = this.dailyCookieSales + hourlySales;
    }
    return this.cookiesSold;
  }
};

store1.cookieSales();
console.log(store1.dailyCookieSales);
console.log(store1.cookiesSold);
document.getElementById('store1Name').innerHTML = store1.name;
document.getElementById('store1hour1').innerHTML = store1.cookiesSold[0];
document.getElementById('store1hour2').innerHTML = store1.cookiesSold[1];
/*document.getElementByClass('<h3 class ='store1'></h3>').innerHTML = '<h3 class ='store1'></h3>';

/*
var store1Name = document.getElementByClass('store1');
var showTextContent = store1Name.textContent;
var */
