'use strict';

var hoursToList = ['Cookies Needed By Location', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var hourlyTotalSales = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var grandTotal = 0;

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
      grandTotal += hourlyCookieSales;
      hourlyTotalSales[i].push(hourlyCookieSales);
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
  thead.appendChild(th);
}
//var storeTotal = document.createElement('th');
th.innerText = 'Location Total Sales';
//thead.appendChild(storeTotal);
header.appendChild(thead);

var storesArray = [pike, seatac, seattleCenter, capitol, alki];

var rows = document.getElementById('salesTable');
for (var j = 0; j < storesArray.length; j++) {
  var tr = document.createElement('tr');
  th.id = 'store' + (j - 1);
  var th = document.createElement('th');
  th.innerText = storesArray[j].name;
  tr.appendChild(th);
  for (var k = 0; k < hoursToList.length - 1; k++) {
    var td = document.createElement('td');
    td.innerText = storesArray[j].simCookies[k];
    tr.appendChild(td);
  }
  var td = document.createElement('td');
  td.innerText = storesArray[j].totalCookieSales;
  tr.appendChild(td);
  rows.appendChild(tr);
};

var footer = document.getElementById('salesTable');
var tr = document.createElement('tr');
var td = document.createElement('td');
td.class = 'footer';
td.innerText = 'Total Sales: ';
tr.appendChild(td);
for (var i = 1; i < hoursToList.length + 1; i++){
  var td = document.createElement('td');
  td.innerText = hourlyTotalSales[i].reduce(function(sum,value) {
    return sum + value ;
  },0);
  td.class = 'footer';
  tr.appendChild(td);
};
var superTotal = document.createElement('td');
td.innerText = grandTotal;
//tr.appendChild(superTotal);
footer.appendChild(tr);

//here begins the effort to take form inputs and create a row
/*function Post(name, minCust, maxCust, avgCookies) {
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
  this.renderToHTML = function() {
    var body = document.getElementById('store4');
    var postRow = document.createElement('tr');
    for (var j = 1; j < hoursToList.length; j++) {
      var postSales = document.createElement('td');
      postSales.innerText = this.simCookies[j];
    };
  };
};
function bakeAndPost(event) {
  event.preventDefault();
  var formStore = new Store();
  post.name = this.elements['storeName'].value;
  post.minCust = this.elements['minCust'].value;
  post.maxCust = this.elements['maxCust'].value;
  post.avgCookies = this.elements['avgCookies'].value;
  post.renderToHTML();

}
/*
(function() {
  var form = document.getElementById('theForm');
  addEvent(form, 'submit', function(e) {
    e.preventDefault();
    var elements = this.elements;
    var name = this.elements;
  })

  */
//form.addEventListener('submit', bakeAndPost);
