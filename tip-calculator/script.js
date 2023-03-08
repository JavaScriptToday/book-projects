// get DOM elements
const billAmountInput = document.getElementById("bill-amount");
const tipPercentageInput = document.getElementById("tip-percentage");
const calculateBtn = document.getElementById("calculate-btn");
const totalAmount = document.getElementById("total-amount");
const totalTip = document.getElementById("tip-amount");

// calculate and display tip
calculateBtn.addEventListener("click", function () {
  const billAmount = Number(billAmountInput.value);
  const tipPercentage = Number(tipPercentageInput.value) / 100;
  const tipAmount = billAmount * tipPercentage;
  const total = billAmount + tipAmount;

  totalTip.innerText = tipAmount.toFixed(2);
  totalAmount.innerText = total.toFixed(2);
});
