const vat = 0.12;

function computeAmounts() {
  const price1 = Number(document.getElementById("price1").value);
  const price2 = Number(document.getElementById("price2").value);
  const price3 = Number(document.getElementById("price3").value);
  const price4 = Number(document.getElementById("price4").value);
  const price5 = Number(document.getElementById("price5").value);

  const qty1 = Number(document.getElementById("qty1").value);
  const qty2 = Number(document.getElementById("qty2").value);
  const qty3 = Number(document.getElementById("qty3").value);
  const qty4 = Number(document.getElementById("qty4").value);
  const qty5 = Number(document.getElementById("qty5").value);

  const amount1 = price1 * qty1
  const amount2 = price2 * qty2
  const amount3 = price3 * qty3
  const amount4 = price4 * qty4
  const amount5 = price5 * qty5

  document.getElementById("amount1").value = amount1.toFixed(2);
  document.getElementById("amount2").value = amount2.toFixed(2);
  document.getElementById("amount3").value = amount3.toFixed(2);
  document.getElementById("amount4").value = amount4.toFixed(2);
  document.getElementById("amount5").value = amount5.toFixed(2);

  computedValues();
}

function computedValues() {
  const price1 = Number(document.getElementById("price1").value);
  const price2 = Number(document.getElementById("price2").value);
  const price3 = Number(document.getElementById("price3").value);
  const price4 = Number(document.getElementById("price4").value);
  const price5 = Number(document.getElementById("price5").value);

  const qty1 = Number(document.getElementById("qty1").value);
  const qty2 = Number(document.getElementById("qty2").value);
  const qty3 = Number(document.getElementById("qty3").value);
  const qty4 = Number(document.getElementById("qty4").value);
  const qty5 = Number(document.getElementById("qty5").value);

  const amount1 = price1 * qty1
  const amount2 = price2 * qty2
  const amount3 = price3 * qty3
  const amount4 = price4 * qty4
  const amount5 = price5 * qty5

  const totalQty = qty1 + qty2 + qty3 + qty4 + qty5
  const subtotal = amount1 + amount2 + amount3 + amount4 + amount5
  const vatAmt = vat * subtotal
  const totalDue = subtotal + vatAmt

  document.getElementById("totalQty").textContent = totalQty;
  document.getElementById("subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("vatAmt").textContent = vatAmt.toFixed(2);
  document.getElementById("totalDue").textContent = totalDue.toFixed(2);

  const cash = Number(document.getElementById("cash").value);
  const difference = cash - totalDue;
  document.getElementById("difference").value = difference.toFixed(2);
}

function printReceipt() {

  const price1 = Number(document.getElementById("price1").value);
  const price2 = Number(document.getElementById("price2").value);
  const price3 = Number(document.getElementById("price3").value);
  const price4 = Number(document.getElementById("price4").value);
  const price5 = Number(document.getElementById("price5").value);

  const qty1 = Number(document.getElementById("qty1").value);
  const qty2 = Number(document.getElementById("qty2").value);
  const qty3 = Number(document.getElementById("qty3").value);
  const qty4 = Number(document.getElementById("qty4").value);
  const qty5 = Number(document.getElementById("qty5").value);

  const amount1 = price1 * qty1
  const amount2 = price2 * qty2
  const amount3 = price3 * qty3
  const amount4 = price4 * qty4
  const amount5 = price5 * qty5

  const subtotal = amount1 + amount2 + amount3 + amount4 + amount5;
  const vat = 0.12
  const totalVat = vat * subtotal;
  const totalQty = qty1 + qty2 + qty3 + qty4 + qty5;
  const totalDue = subtotal + totalVat;
  const name = document.getElementById("cashier").value;
  const customer = document.getElementById("customer").value;
  const date = document.getElementById("receiptDate").value;
  const cash = Number(document.getElementById("cash").value);
  const difference = cash - totalDue;

  document.getElementById("receipt").textContent =
    "       CodeCraft Workshops\n" +
    "Date:      " + date + "\n" +
    "Cashier:   " + name + "\n" +
    "Customer:  " + customer + "\n" +
    "Quantity:       " + totalQty + "\n" +
    "Subtotal:       " + subtotal.toFixed(2) + "\n" +
    "VAT:            " + totalVat.toFixed(2) + "\n" +
    "Total price:      " + totalDue.toFixed(2) + "\n" +
    "Amount given:     " + cash.toFixed(2) + "\n" +
    "Change:           " + difference.toFixed(2) + "\n" +
    "\n" +
    "     Thank you, come again!"
}

function clearAll() {
  //all value to be cleared by using "" or assigning 0
  document.getElementById("price1").value = "";
  document.getElementById("price2").value = "";
  document.getElementById("price3").value = "";
  document.getElementById("price4").value = "";
  document.getElementById("price5").value = "";

  document.getElementById("qty1").value = "";
  document.getElementById("qty2").value = "";
  document.getElementById("qty3").value = "";
  document.getElementById("qty4").value = "";
  document.getElementById("qty5").value = "";

  document.getElementById("amount1").value = "";
  document.getElementById("amount2").value = "";
  document.getElementById("amount3").value = "";
  document.getElementById("amount4").value = "";
  document.getElementById("amount5").value = "";

  document.getElementById("cash").value = "";
  document.getElementById("cashier").value = "";
  document.getElementById("customer").value = "";

  document.getElementById("receipt").textContent = "";
  document.getElementById("vatAmt").textContent = "0.00";
  document.getElementById("totalQty").textContent = "0";
  document.getElementById("subtotal").textContent = "0.00";
  document.getElementById("vatAmt").textContent = "0.00";
  document.getElementById("difference").value = "";
  document.getElementById("totalDue").textContent = "0";
}

//date//
function showDate() {
  const today = new Date();
  document.getElementById("receiptDate").value = today.toLocaleString();
}

showDate();
document.getElementById("year").textContent = new Date().getFullYear();
computeAmounts();
