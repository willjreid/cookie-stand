'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function store (name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.simCookies = [];
  this.randomCustomersPerHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };
  this.eachHourSales = function() {
    this.totalCookieSales = 0;
    for (var i = 0; i < storeHours.length; i++) {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.simCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
      //console.log(this.name);
      //console.log(this.simCookies);
    }
  };
  this.eachHourSales();
} ;

var pike = new store('1st and Pike', 23, 65, 6.3);
var seatac = new store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new store('Seattle Center', 11, 38, 3.7);
var capitol = new store('Capitol Hill', 20, 38, 2.3);
var alki = new store('Alki', 2, 16, 4.6);

//store.eachHourSales();
var table = document.getElementById('salesTable');
var storesArray = [pike, seatac, seattleCenter, capitol, alki];
for (var i = 0; i < storesArray.length; i++) {
  var record = document.createElement('tr');
  for (var j = 0; j < storeHours.length; j++) {
    var tableData = document.createElement('td');
    tableData.innerText = storesArray[i].simCookies[j];
    console.log(storesArray[i].simCookies);
    record.appendChild(tableData);
  };
  table.appendChild(record);
}
