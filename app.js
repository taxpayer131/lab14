var submitform = document.getElementById('HTMLform');
var orderTable = document.getElementById('ordersTable');

// var custName = '';
// var custAddPhone = 0;
// //Dropdown Menu
// var prodName = [];
// var prodQuantity = 0;
// var creditCard = 0;
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

function header() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  for (var i = 0; i < NewOrder.header.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = NewOrder.header[i];
    trEl.appendChild(thEl);
    orderTable.appendChild(trEl);
  }
}
header();

function handleSubmit(event) {
  console.log('I fuckn dont work');
  event.preventDefault();
  if ((!event.target.custName.value) || (!event.target.custAddPhone.value) || (!event.target.prodName.value) || (!event.target.prodQuantity.value) || (!event.target.creditCard.value)) {
    return alert('You have empty fields!');
  }

  var custName = event.target.custName.value;
  var custAddPhone = parseInt(event.target.custAddPhone.value);
  var prodName = event.target.prodName.value;
  var prodQuantity = parseInt(event.target.prodQuantity.value);
  var creditCard = parseInt(event.target.creditCard.value);

  new NewOrder(custName, custAddPhone, prodName, prodQuantity, creditCard);

  event.target.custName.value = null;
  event.target.custAddPhone.value = null;
  event.target.prodName.value = null;
  event.target.prodQuantity.value = null;
  event.target.creditCard.value = null;

}

submitform.addEventListener('submit', handleSubmit);
