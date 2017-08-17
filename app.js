'use strict';

//var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var hoursToList = ['', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

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
    for (var i = 1; i < hoursToList.length; i++) {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.simCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  };
  this.eachHourSales();
} ;

var pike = new store('1st and Pike', 23, 65, 6.3);
var seatac = new store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new store('Seattle Center', 11, 38, 3.7);
var capitol = new store('Capitol Hill', 20, 38, 2.3);
var alki = new store('Alki', 2, 16, 4.6);

//adding hours to the header row
var header = document.getElementById('salesTable');
var thead = document.createElement('thead');
for (var i = 0; i < hoursToList.length + 1; i++) {
  var th = document.createElement('th');
  thead.id = 'hours';
  th.class = 'bold';
  th.innerText = hoursToList[i];
  //console.log(hoursToList[i]);
  thead.appendChild(th);
}
var storeTotal = document.createElement('th');
th.innerText = 'Location Total Sales';
thead.appendChild(storeTotal);
header.appendChild(thead);

var storesArray = [pike, seatac, seattleCenter, capitol, alki];

var rows = document.getElementById('salesTable');
for (var j = 0; j < storesArray.length; j++) {
  var tr = document.createElement('tr');
  th.id = 'store' + (j - 1);
  var th = document.createElement('th');
  th.innerText = storesArray[j].name;
  tr.appendChild(th);
  //console.log(storesArray[j].name);
  for (var k = 0; k < hoursToList.length - 1; k++) {
    var td = document.createElement('td');
    td.innerText = storesArray[j].simCookies[k];
    console.log(storesArray[j].name);
    console.log(storesArray[j].simCookies[k]);
    tr.appendChild(td);
  }
  rows.appendChild(tr);
};
//for (var l = 0; l < stores.Array.length; l++) {

//var totals = document.getElementById('store');

//this section should add an initial row value of the store name but I haven't cracked it yet
/*var table = document.getElementById('salesBody');
for (var i = 0; i < storesArray.length; i++) {
  var site = document.createElement('tr');
  var site = document.createElement('th');
  site.innerText = '1st and Pike';
  table.appendChild(site);
};*/

//adding hourly sales projections
/*var table = document.getElementById('salesBody');
for (var i = 0; i < storesArray.length; i++) {
  var record = document.createElement('tr');
  for (var j = 0; j < storeHours.length; j++) {
    var tableData = document.createElement('td');
    tableData.innerText = storesArray[i].simCookies[j];
    //console.log(storesArray[i].simCookies);
    record.appendChild(tableData);
  };
  table.appendChild(record);
}*/
/*var table = document.getElementById('store1');
for (var j = 0; j < storeHours.length; j++) {
  var tableData = document.createElement('td');
  tableData.innerText = storesArray[0].name.simCookies[j];
  console.log(store.pike);
  //console.log(storesArray[i].simCookies);
  record.appendChild(tableData);
};*/
