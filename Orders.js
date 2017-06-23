var submitform = document.getElementById('HTMLform');
var orderTable = document.getElementById('ordersTable');

NewOrder.header = ['custName', 'custAddPhone', 'prodName', 'prodQuantity', 'creditCard'];
NewOrder.all = [];

function NewOrder (custName, custAddPhone, prodName, prodQuantity, creditCard) {
  this.custName = custName;
  this.custAddPhone = custAddPhone;
  this.prodName = prodName;
  this.prodQuantity = prodQuantity;
  this.creditCard = creditCard;
  NewOrder.all.push(this);
}
// new NewOrder ('Cow', 5, 'Cow', 4, 1);

function header() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  for (var i = 0; i < NewOrder.header.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = NewOrder.header[i];
    trEl.appendChild(thEl);
    orderTable.appendChild(trEl);
  }
}

function render () {
  for (var i = 0; i < NewOrder.all.length; i++) {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = NewOrder.all[i].custName;
    trEl.appendChild(tdEl);
    orderTable.appendChild(trEl);

    var tdElTwo = document.createElement('td');
    tdElTwo.textContent = NewOrder.all[i].custAddPhone;
    trEl.appendChild(tdElTwo);

    var tdElThree = document.createElement('td');
    tdElThree.textContent = NewOrder.all[i].prodName;
    trEl.appendChild(tdElThree);

    var tdElFour = document.createElement('td');
    tdElFour.textContent = NewOrder.all[i].prodQuantity;
    trEl.appendChild(tdElFour);

    var tdElFive = document.createElement('td');
    tdElFive.textContent = NewOrder.all[i].creditCard;
    trEl.appendChild(tdElFive);
    orderTable.appendChild(trEl);
  }
};

function pullStorage() {
  // if (localStorage.all){
  console.log('pull');

  // }
  var storeAll = localStorage.getItem('all');
  NewOrder.all = JSON.parse(storeAll);
}

pullStorage();
header();
render();
