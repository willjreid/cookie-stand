'use strict';

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
  for (var k = 0; k < hoursToList.length - 1; k++) {
    var td = document.createElement('td');
    td.innerText = storesArray[j].simCookies[k];
    tr.appendChild(td);
  }
  rows.appendChild(tr);
};
//here begins the effort to take form inputs and create a row
function Post(name, minCust, maxCust, avgCookies) {
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

(function() {
  var form = document.getElementById('theForm');
  addEvent(form, 'submit', function(e) {
    e.preventDefault();
    var elements = this.elements;
    var name = this.elements;
  })
form.addEventListener('submit', bakeAndPost);

//Gabe's code solution -- he built his table from the bottom up


dailySalesGen function()

this.render = function () {
  this.dailySalesGen();
  var cont = document.getElementById('header');
  var tabeRow = document.createElement('tr');
  cont.insertBefore(tableRow, cont.childNodes[1]);
  createAppend('th', '', '', this.name, tableRow);
  for (var i = 0; i < this.salesReport.length; i++) {
    createAppend('td', '', '', this.salesReport[i], tableRow);
  };
  createAppend('td', 'lastCel', '', this.totalSold, tableRow);
};
//this function creates a single header row and a column for the daily location total.
var headerMaker = function() {
  var anchorPoint = document.getElementById('salesContent');
  var tableHeader = createAppend('table', '', '', 'header', anchorPoint);
  var thead = createAppend('thead', '','','', tableHeader);
  var tableRow = createAppend('tr', '', 'tableHeader', '', thead);
  var head = createAppend('th', '', '', '', tableRow);
  for (var i = 0; i < hoursOfOp.length; i++) {
    var hour = createAPpend('th', '', '', hoursOfOp[i], tableRow);
  };
  var totalHeadCel = createAppend('th', '', '', '', tableRow);
};
//using getElementsByTagName will get all the tables that match that. Use the [0] to show which indexed tag you are looking for
var footerMaker = function() {
  var anchorPoint = document.getElementsByTagName('table')[0];
  var tableRow = createAppend('tr', '', 'totalsRow', '', anchorPoint);
  var leftCel = createAppend('th', '', '', 'Totals', tableRow);
//refactoring here to pull in hourly totals, as long as you have an array for salesReport per store
  var grantTotal = 0;
  for (var i = 0; i < hoursOfOp.length; i++) {
    var total = 0;
    for (var j = 0; j < shotLocations.length; j++) {
      total += shopLocations[j].salesReport[i];
    }
    var totalCel = createAppend('td', '', '', total, tableRow);
    grandTotal += total;
  };
  var rightCel = createAppend('td', '', '', grandTotal, tableRow)
}
//this function will add a new store given some event
function addNewCookieStore(event) {
  event.preventDefault();
  var storeName = form.elements['storeName'].value; // storeName is the input reference on the html; .value returns the input value
  var minCust = parseInt(form.elements['minCust'].value);
  var maxCust = parseInt(form.elements['maxCust'].value);
  var avgCPH = parseFloat(form.elements['avgCPH'].value);
  var newStore = new CookieShop(storeNAme, minCust, maxCust, avgCPH);
  newStore.render(); //this adds the new store to teh table
//add the new store to teh shopLocations array
  shopLocations.push(newStore); // added to push the new store into the array of stores
  //select old totals row and remove it from its container
  var oldRow = document.getElementById('tableRow');
  var container = oldRow.parentNode;
  container.removeChild(oldRow);
  //re-run function taht creates tables footer row
  footerMaker();
  form.reset();
}
var alki = new CookieShop('Alki', 2, 20, 4.5);
//inputs return as strings. you need to convert them to numbers if they are numbers
//the className and idName are less important. Consider ordering: newElementTag, content, parentElement, className, idName so that you could only add three attributes or four or five when creating
//in Gabe's code, he created a constructor function called createAppend
function createAppend(newElementTag, className, idName, content, parentElement) {
  var newElem = document.createElement(newElementTag);
  if(className && className !== '') {
    newElem.className = className;
  } if (idName && idNAme !== '') {
    newElem.id = idName;
  }
  newElem.innerText = conent;
  parentElement.appendChild(newElem);
  return newElem;
};

var tableMaker = function(locationArray) {
  headerMaker();
  for (var i = 0; i < locationArray.length; i++) {
    locationArray[i].render();
  }
  footerMaker();
};

var form = document.getElementById('addStoreForm');
form.addEventListener('submit', addNewCookieStore);

tableMaker(shopLocations);
//clicking the submit button is not the same as submitting the form. this specifically looks for submitting the form.


//how to create a form element with JS:
var newInput = document.createElement('input');
newInput.setAttribute('type', 'text');
newInput.setAttribute('required', true);
