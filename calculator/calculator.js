window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // create object with default values
  const defaultPaymentValues = { amount: 30000, years: 10, rate: 6}
  //console.log(defaultPaymentValues);

  const amountInput = document.getElementById("loan-amount");
  amountInput.value = defaultPaymentValues.amount;

  const yearInput = document.getElementById("loan-years");
  yearInput.value = defaultPaymentValues.years;

  const rateInput = document.getElementById("loan-rate");
  rateInput.value = defaultPaymentValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principle = values.amount; 
  let monthlyInterest = (values.rate / 100) / 12;
  let timeInMonths = values.years * 12;

  return ((principle * monthlyInterest) / 
          (1 - Math.pow((1 + monthlyInterest), -timeInMonths))).toFixed(2);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let calcMonthly = document.getElementById("monthly-payment");
  calcMonthly.innerText = `$ ${monthly}`;
}
