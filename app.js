'use strict';

var hoursToList = ['Cookies Needed By Location', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var hourlyTotalSales = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var grandTotal = 0;

function Store (storeName, minCust, maxCust, avgCookies) {
  this.storeName = storeName;
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

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitol = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

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

Store.prototype.rowMaker = function () {
  var row = document.getElementById('salesTable');
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.innerText = this.storeName;
  tr.appendChild(th);
  for (var k = 0; k < hoursToList.length - 1; k++) {
    var td = document.createElement('td');
    td.innerText = this.simCookies[k];
    tr.appendChild(td);
  }
  var td = document.createElement('td');
  td.innerText = this.totalCookieSales;
  tr.appendChild(td);
  row.appendChild(tr);
};

for (var i = 0; i < storesArray.length; i++) {
  storesArray[i].rowMaker();
}
//var rowMaker = function () {
  //for (var j = 0; j < storesArray.length; j++) {
    //th.id = 'store' + (j - 1);
//     var td = document.createElement('td');
//     td.innerText = storesArray[j].totalCookieSales;
//     tr.appendChild(td);
//     row.appendChild(tr);
//   };
// };
// rowMaker(event);

var footerMaker = function() {
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
};
footerMaker();

function addNewCookieStore(event) {
  console.log('click');
  event.preventDefault();
  var form = event.target;//review this further
  var formStoreName = form.storeName.value;
  console.log(formStoreName);
  var formMinCust = parseInt(form.elements['minCust'].value);
  console.log(formMinCust);
  var formMaxCust = parseInt(form.elements['maxCust'].value);
  var formAvgCookies = parseFloat(form.elements['avgCookies'].value);
  var newStore = new Store(formStoreName, formMinCust, formMaxCust, formAvgCookies);
  console.log(newStore);
  storesArray.push(newStore);
  newStore.rowMaker();
  //newStore.footerMaker();
  theForm.reset();
}
var getSubmit = document.getElementById('theForm');
getSubmit.addEventListener('submit', addNewCookieStore);
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
