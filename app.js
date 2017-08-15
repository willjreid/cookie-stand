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
    this.totalCookieSales = 0; //need to repeat this on all five stores
    for (var i = 0; i < this.storeHours.length; i++); {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.simCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  },
  dailySalesReport: function() {
    this.eachHourSales();
    var location = document.getElementById('sales-section');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    location.appendChild(locationName);
    var list = document.createElement('ul');
    location.appendChild(list);
    var list = document.getElemntById('sales-section');
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
var seatac = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
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
    var location = document.getElementById('sales-section');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    location.appendChild(locationName);
    var list = document.createElement('ul');
    location.appendChild(list);
    var list = document.getElemntById('sales-section');
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
var seattleCenter = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
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
    var location = document.getElementById('sales-section');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    location.appendChild(locationName);
    var list = document.createElement('ul');
    location.appendChild(list);
    var list = document.getElemntById('sales-section');
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
var capitol = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
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
    var location = document.getElementById('sales-section');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    location.appendChild(locationName);
    var list = document.createElement('ul');
    location.appendChild(list);
    var list = document.getElemntById('sales-section');
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
var alki = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
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
    var location = document.getElementById('sales-section');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    location.appendChild(locationName);
    var list = document.createElement('ul');
    location.appendChild(list);
    var list = document.getElemntById('sales-section');
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
seatac.dailySalesReport();
seattleCenter.dailySalesReport();
capitol.dailySalesReport();
alki.dailySalesReport();
//generate some sales
//declare a variable named "list" that selects a <ul> to fill with data
//create a for loop
//set starting and stopping point in iteration
//create a new variable for new list itmes
//change the innter text of new list items to be values of an array.
//append the new list item to our selected list.

//figure out how to render stores as lists of data

//notes in class at 11:00 on object constructors
var people = [];

function Person (name, height, weight){
  this.name = name;
  this.height = height;
  this.weight = weight;
  this.eat = function(lbs){
    this.weight += lbs * 0.1;
  };
  this.exercise = function(hrs) {
    this.weight -= hrs;
  };
  people.push(this);
};
var me = new Person('Nick', 71, 185);
me.eat(10);
var mySon = new Person(Nathanial, 22.44, 9.7);

var people = [];
var names = ['Nathan', 'Mike', 'Michelle', 'Dave', 'Cody'];

for (var i = 0; i < names.length; i++) {
  people.push(person = new Person(name[i], Math.random() * (72 - 60) + 60, Math.random() * (200 - 100) + 100));
}
//what if I saids that on instantiation i want to push people into the array
