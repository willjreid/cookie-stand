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
    for (var i = 0; i < openHours.length; i++) {
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

var store2 = {
  name: 'SeaTac Airport',
  minHrCustomers: 3,
  maxHrCustomers: 24,
  avgCookiesSale: 1.2,
  cookiesSold: [],
  dailyCookieSales: 0,
  cookieSales: function() {
    for (var i = 0; i < openHours.length; i++) {
      var customers = Math.floor(Math.random() * (this.maxHrCustomers - this.minHrCustomers) + this.minHrCustomers);
      var hourlySales = Math.floor(customers * this.avgCookiesSale);
      console.log(hourlySales);
      this.cookiesSold.push(hourlySales);
      this.dailyCookieSales = this.dailyCookieSales + hourlySales;
    }
    return this.cookiesSold;
  }
};

store2.cookieSales();
console.log(store2.dailyCookieSales);
console.log(store2.cookiesSold);
document.getElementById('store2Name').innerHTML = store2.name;
document.getElementById('store2hour1').innerHTML = store2.cookiesSold[0];
document.getElementById('store2hour2').innerHTML = store2.cookiesSold[1];
document.getElementById('store2hour3').innerHTML = store2.cookiesSold[2];
document.getElementById('store2hour4').innerHTML = store2.cookiesSold[3];
document.getElementById('store2hour5').innerHTML = store2.cookiesSold[4];
document.getElementById('store2hour6').innerHTML = store2.cookiesSold[5];
document.getElementById('store2hour7').innerHTML = store2.cookiesSold[6];
document.getElementById('store2hour8').innerHTML = store2.cookiesSold[7];
document.getElementById('store2hour9').innerHTML = store2.cookiesSold[8];
document.getElementById('store2hour10').innerHTML = store2.cookiesSold[9];
document.getElementById('store2hour11').innerHTML = store2.cookiesSold[10];
document.getElementById('store2hour12').innerHTML = store2.cookiesSold[11];
document.getElementById('store2hour13').innerHTML = store2.cookiesSold[12];
document.getElementById('store2hour14').innerHTML = store2.cookiesSold[13];
document.getElementById('store2hour15').innerHTML = store2.cookiesSold[14];
document.getElementById('store2total').innerHTML = store2.dailyCookieSales;

var store3 = {
  name: 'Seattle Center',
  minHrCustomers: 11,
  maxHrCustomers: 38,
  avgCookiesSale: 3.7,
  cookiesSold: [],
  dailyCookieSales: 0,
  cookieSales: function() {
    for (var i = 0; i < openHours.length; i++) {
      var customers = Math.floor(Math.random() * (this.maxHrCustomers - this.minHrCustomers) + this.minHrCustomers);
      var hourlySales = Math.floor(customers * this.avgCookiesSale);
      console.log(hourlySales);
      this.cookiesSold.push(hourlySales);
      this.dailyCookieSales = this.dailyCookieSales + hourlySales;
    }
    return this.cookiesSold;
  }
};

store3.cookieSales();
console.log(store3.dailyCookieSales);
console.log(store3.cookiesSold);
document.getElementById('store3Name').innerHTML = store3.name;
document.getElementById('store3hour1').innerHTML = store3.cookiesSold[0];
document.getElementById('store3hour2').innerHTML = store3.cookiesSold[1];
document.getElementById('store3hour3').innerHTML = store3.cookiesSold[2];
document.getElementById('store3hour4').innerHTML = store3.cookiesSold[3];
document.getElementById('store3hour5').innerHTML = store3.cookiesSold[4];
document.getElementById('store3hour6').innerHTML = store3.cookiesSold[5];
document.getElementById('store3hour7').innerHTML = store3.cookiesSold[6];
document.getElementById('store3hour8').innerHTML = store3.cookiesSold[7];
document.getElementById('store3hour9').innerHTML = store3.cookiesSold[8];
document.getElementById('store3hour10').innerHTML = store3.cookiesSold[9];
document.getElementById('store3hour11').innerHTML = store3.cookiesSold[10];
document.getElementById('store3hour12').innerHTML = store3.cookiesSold[11];
document.getElementById('store3hour13').innerHTML = store3.cookiesSold[12];
document.getElementById('store3hour14').innerHTML = store3.cookiesSold[13];
document.getElementById('store3hour15').innerHTML = store3.cookiesSold[14];
document.getElementById('store3total').innerHTML = store3.dailyCookieSales;

var store4 = {
  name: 'Capitol Hill',
  minHrCustomers: 20,
  maxHrCustomers: 38,
  avgCookiesSale: 2.3,
  cookiesSold: [],
  dailyCookieSales: 0,
  cookieSales: function() {
    for (var i = 0; i < openHours.length; i++) {
      var customers = Math.floor(Math.random() * (this.maxHrCustomers - this.minHrCustomers) + this.minHrCustomers);
      var hourlySales = Math.floor(customers * this.avgCookiesSale);
      console.log(hourlySales);
      this.cookiesSold.push(hourlySales);
      this.dailyCookieSales = this.dailyCookieSales + hourlySales;
    }
    return this.cookiesSold;
  }
};

store4.cookieSales();
console.log(store4.dailyCookieSales);
console.log(store4.cookiesSold);
document.getElementById('store4Name').innerHTML = store4.name;
document.getElementById('store4hour1').innerHTML = store4.cookiesSold[0];
document.getElementById('store4hour2').innerHTML = store4.cookiesSold[1];
document.getElementById('store4hour3').innerHTML = store4.cookiesSold[2];
document.getElementById('store4hour4').innerHTML = store4.cookiesSold[3];
document.getElementById('store4hour5').innerHTML = store4.cookiesSold[4];
document.getElementById('store4hour6').innerHTML = store4.cookiesSold[5];
document.getElementById('store4hour7').innerHTML = store4.cookiesSold[6];
document.getElementById('store4hour8').innerHTML = store4.cookiesSold[7];
document.getElementById('store4hour9').innerHTML = store4.cookiesSold[8];
document.getElementById('store4hour10').innerHTML = store4.cookiesSold[9];
document.getElementById('store4hour11').innerHTML = store4.cookiesSold[10];
document.getElementById('store4hour12').innerHTML = store4.cookiesSold[11];
document.getElementById('store4hour13').innerHTML = store4.cookiesSold[12];
document.getElementById('store4hour14').innerHTML = store4.cookiesSold[13];
document.getElementById('store4hour15').innerHTML = store4.cookiesSold[14];
document.getElementById('store4total').innerHTML = store4.dailyCookieSales;

var store5 = {
  name: 'Alki',
  minHrCustomers: 2,
  maxHrCustomers: 16,
  avgCookiesSale: 4.6,
  cookiesSold: [],
  dailyCookieSales: 0,
  cookieSales: function() {
    for (var i = 0; i < openHours.length; i++) {
      var customers = Math.floor(Math.random() * (this.maxHrCustomers - this.minHrCustomers) + this.minHrCustomers);
      var hourlySales = Math.floor(customers * this.avgCookiesSale);
      console.log(hourlySales);
      this.cookiesSold.push(hourlySales);
      this.dailyCookieSales = this.dailyCookieSales + hourlySales;
    }
    return this.cookiesSold;
  }
};

store5.cookieSales();
console.log(store5.dailyCookieSales);
console.log(store5.cookiesSold);
document.getElementById('store5Name').innerHTML = store5.name;
document.getElementById('store5hour1').innerHTML = store5.cookiesSold[0];
document.getElementById('store5hour2').innerHTML = store5.cookiesSold[1];
document.getElementById('store5hour3').innerHTML = store5.cookiesSold[2];
document.getElementById('store5hour4').innerHTML = store5.cookiesSold[3];
document.getElementById('store5hour5').innerHTML = store5.cookiesSold[4];
document.getElementById('store5hour6').innerHTML = store5.cookiesSold[5];
document.getElementById('store5hour7').innerHTML = store5.cookiesSold[6];
document.getElementById('store5hour8').innerHTML = store5.cookiesSold[7];
document.getElementById('store5hour9').innerHTML = store5.cookiesSold[8];
document.getElementById('store5hour10').innerHTML = store5.cookiesSold[9];
document.getElementById('store5hour11').innerHTML = store5.cookiesSold[10];
document.getElementById('store5hour12').innerHTML = store5.cookiesSold[11];
document.getElementById('store5hour13').innerHTML = store5.cookiesSold[12];
document.getElementById('store5hour14').innerHTML = store5.cookiesSold[13];
document.getElementById('store5hour15').innerHTML = store5.cookiesSold[14];
document.getElementById('store5total').innerHTML = store5.dailyCookieSales;
