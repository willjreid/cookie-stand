'use strict';

var pike = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  simCookies: [],
  totalCookieSales: 0,
  randomCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  eachHourSales: function(){
    this.simCookies = [];
    for (var i = 0; i < this.storeHours.length; i++); {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.simCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  },
  dailySalesReport: function() {
    this.eachHourSales();
    var list = document.getElemntById('list');
    for (var i = 0; i < this.storeHouse.length; i++) {
      var listItems = document.createElement('li');
      listItems.innerText = this.storeHours[i] + ': ' + this.simCookies[i] + ' cookies';
      list.appendChild('listItems');
    };
    var listItems = document.createElement('li');
    listItems.innerText = 'Total: ' + this.totalCookieSales + ' cookies';
    list.appendChild(listItems);
  }
};
pike.dailySalesReport();
//generate some sales
//declare a variable named "list" that selects a <ul> to fill with data
//create a for loop
//set starting and stopping point in iteration
//create a new variable for new list itmes
//change the innter text of new list items to be values of an array.
//append the new list item to our selected list.

var store2 = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 0,
  maxCust: 0,
  avgCookies: 0,
};
var store3 = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 0,
  maxCust: 0,
  avgCookies: 0,
};
var store4 = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 0,
  maxCust: 0,
  avgCookies: 0,
};
var store5 = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 0,
  maxCust: 0,
  avgCookies: 0,
};

//figure out how to render stores as lists of data
