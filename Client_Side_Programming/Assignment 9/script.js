//The global variable is used to store the inactivity timer.
//We keep it outside the functions so multiple functions can access and reset it.
let timer;


//These are fixed product prices.
//These constants store item prices. Using constants prevents accidental modification and keeps pricing separate from the logic.
const PRICE_MILK = 3.50;
const PRICE_BREAD = 2.25;
const PRICE_EGGS = 4.10;
const PRICE_RICE = 6.00;
const PRICE_APPLES = 2.80;
const PRICE_CHICKEN = 9.50;


//This is the inactivity timer.
//This function resets the 15 second inactivity timer. It is called whenever the user interacts with the inputs or buttons.
function startTimer() {

//This stops the previous timer so multiple timers don't run at once.
  clearTimeout(timer);
//Starts a new 15-second countdown
  timer = setTimeout(function () {

//If the user is inactive for 15 seconds, this will automatically reset the cart.
    resetCart("Cart reset due to inactivity.");

  }, 15000);
}


//This function reads a quantity from an input field. It also validates the input to prevent any negative or invalid values.
function readQty(id) {

//This selects the input element using its ID.
  let v = Number(document.getElementById(id).value);

//If the input is empty, this will treat it as 0.
  if (!document.getElementById(id).value) v = 0;

//This prevents any negative numbers or invalid inputs.
  if (isNaN(v) || v < 0) v = 0;

//This updates the input field with a cleaned value.
  document.getElementById(id).value = v;

  return v;
}


//This updates the total amount shown in the UI
function setTotal(amount) {

//The code 'toFixed(2)' ensures proper currency formatting by 2 decimal places.
  document.getElementById("total").textContent =
    "$" + amount.toFixed(2);
}


//This calculates the total but does not print a full receipt.
function calculateTotal() {

//This resets the inactivity timer.
  startTimer();

//This reads the quantities for each item.
  let milk = readQty("milk");
  let bread = readQty("bread");
  let eggs = readQty("eggs");
  let rice = readQty("rice");
  let apples = readQty("apples");
  let chicken = readQty("chicken");

//This multiplies the quantities by prices and adds them together.
  let total =
    milk * PRICE_MILK +
    bread * PRICE_BREAD +
    eggs * PRICE_EGGS +
    rice * PRICE_RICE +
    apples * PRICE_APPLES +
    chicken * PRICE_CHICKEN;

//This updates the total display.
  setTotal(total);

//If the cart is empty, it will show this message.
  if (milk + bread + eggs + rice + apples + chicken === 0) {
    document.getElementById("receipt").textContent = "Cart is empty.";
  } else {
    document.getElementById("receipt").textContent =
      "Total calculated. Click Print Receipt.";
  }
}


//This formats the date into a readable receipt format.
function formatDateTime(d) {

  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");

  let h = d.getHours();
  const ampm = h >= 12 ? "PM" : "AM";

//This converts to a 12 hour format.
  h = h % 12;
  if (h === 0) h = 12;

  const hh = String(h).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd} ${hh}:${min} ${ampm}`;
}


//This generates a formatted receipt with line by line totals.
function printReceipt() {

  startTimer();

//This reads quantities.
  let milk = readQty("milk");
  let bread = readQty("bread");
  let eggs = readQty("eggs");
  let rice = readQty("rice");
  let apples = readQty("apples");
  let chicken = readQty("chicken");

//If the cart is empty, stop here.
  if (milk + bread + eggs + rice + apples + chicken === 0) {
    setTotal(0);
    document.getElementById("receipt").textContent = "Cart is empty.";
    return;
  }

//This calculates the line totals.
  let milkLine = milk * PRICE_MILK;
  let breadLine = bread * PRICE_BREAD;
  let eggsLine = eggs * PRICE_EGGS;
  let riceLine = rice * PRICE_RICE;
  let applesLine = apples * PRICE_APPLES;
  let chickenLine = chicken * PRICE_CHICKEN;

  let total =
    milkLine + breadLine + eggsLine +
    riceLine + applesLine + chickenLine;

  setTotal(total);

//This gets the current date and time.
  const now = new Date();
  const when = formatDateTime(now);

//This builds the receipt text dynamically.
  let text = "";
  text += "Green Basket Grocery\n";
  text += "Date/Time: " + when + "\n";
  text += "-----------------------------\n";

//This only shows items with a quantity less than 0.
  if (milk > 0) text += "Milk x" + milk + " = $" + milkLine.toFixed(2) + "\n";
  if (bread > 0) text += "Bread x" + bread + " = $" + breadLine.toFixed(2) + "\n";
  if (eggs > 0) text += "Eggs x" + eggs + " = $" + eggsLine.toFixed(2) + "\n";
  if (rice > 0) text += "Rice x" + rice + " = $" + riceLine.toFixed(2) + "\n";
  if (apples > 0) text += "Apples x" + apples + " = $" + applesLine.toFixed(2) + "\n";
  if (chicken > 0) text += "Chicken x" + chicken + " = $" + chickenLine.toFixed(2) + "\n";

  text += "-----------------------------\n";
  text += "FINAL TOTAL: $" + total.toFixed(2) + "\n";
  text += "Thank you for shopping!\n";

//This displays the receipt in a '<pre>' element.
  document.getElementById("receipt").textContent = text;
}


//This clears all inputs and resets the total.
function resetCart(message) {

  document.getElementById("milk").value = 0;
  document.getElementById("bread").value = 0;
  document.getElementById("eggs").value = 0;
  document.getElementById("rice").value = 0;
  document.getElementById("apples").value = 0;
  document.getElementById("chicken").value = 0;

  setTotal(0);

//This shows a reset message.
  document.getElementById("receipt").textContent = message;

//This restarts the inactivity timer.
  startTimer();
}