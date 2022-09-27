// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTLM;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTLM = `$<span>${quantity.value * price}</span>`;
};

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  // ITERATION 2
  let products = document.getElementByClassName('product');
  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    updateSubtotal(element);
  };


  // ITERATION 3
let subtotalAll = document.querySelectorAll('.subtotal span');
let total = document.querySelector('#total-value')
let sum = 0;
for (let i = 0; i < subtotalAll.length; i++) {
  const element = subtotalAll[i]innerHTLM;
};
  total.innetHTML =`$<span>${sum}</span>`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
