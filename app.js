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
document.getElementById('store1hour3').innerHTML = store1.cookiesSold[2];
document.getElementById('store1hour4').innerHTML = store1.cookiesSold[3];
document.getElementById('store1hour5').innerHTML = store1.cookiesSold[4];
document.getElementById('store1hour6').innerHTML = store1.cookiesSold[5];
document.getElementById('store1hour7').innerHTML = store1.cookiesSold[6];
document.getElementById('store1hour8').innerHTML = store1.cookiesSold[7];
document.getElementById('store1hour9').innerHTML = store1.cookiesSold[8];
document.getElementById('store1hour10').innerHTML = store1.cookiesSold[9];
document.getElementById('store1hour11').innerHTML = store1.cookiesSold[10];
document.getElementById('store1hour12').innerHTML = store1.cookiesSold[11];
document.getElementById('store1hour13').innerHTML = store1.cookiesSold[12];
document.getElementById('store1hour14').innerHTML = store1.cookiesSold[13];
document.getElementById('store1hour15').innerHTML = store1.cookiesSold[14];
document.getElementById('store1total').innerHTML = store1.dailyCookieSales;
/*document.getElementByClass('<h3 class ='store1'></h3>').innerHTML = '<h3 class ='store1'></h3>';

/*
var store1Name = document.getElementByClass('store1');
var showTextContent = store1Name.textContent;
var */
