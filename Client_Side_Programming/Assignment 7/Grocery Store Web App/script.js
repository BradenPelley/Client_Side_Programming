const prices = {
    milk: 3.99,
    bread: 2.49,
    eggs: 4.99,
    rice: 5.99,
    apples: 3.49,
    chicken: 9.99
};

let inactivityTimer;

//This starts the inactivity timer when the page is loaded
window.onload = function () {
    resetInactivityTimer();

    const inputs = document.querySelectorAll("input[type='number']");

    inputs.forEach(function (input) {
        input.addEventListener("input", resetInactivityTimer);
        input.addEventListener("click", resetInactivityTimer);
    });
};


//This resets the timer on any interaction
function resetInactivityTimer() {
    clearTimeout(inactivityTimer);

    inactivityTimer = setTimeout(function () {
        document.getElementById("receipt").textContent =
            "Cart reset due to inactivity.";
        resetCart();
    }, 15000);
}

function calculateTotal() {
    resetInactivityTimer();

    let total = 0;

    for (let item in prices) {
        let quantity = parseInt(document.getElementById(item).value);

        if (isNaN(quantity) || quantity < 0) {
            quantity = 0;
        }

        total += quantity * prices[item];
    }

    document.getElementById("total").textContent = total.toFixed(2);
}

function printReceipt() {
    resetInactivityTimer();

    let receiptText = "Small Grocery Store\n";
    receiptText += "------------------------\n";

    const now = new Date();

    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2, "0");
    let day = String(now.getDate()).padStart(2, "0");

    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, "0");

    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    receiptText += `${year}-${month}-${day} ${hours}:${minutes} ${ampm}\n`;
    receiptText += "------------------------\n";

    let total = 0;
    let hasItems = false;

    for (let item in prices) {
        let quantity = parseInt(document.getElementById(item).value);

        if (isNaN(quantity) || quantity < 0) {
            quantity = 0;
        }

        if (quantity > 0) {
            hasItems = true;
            let lineTotal = quantity * prices[item];
            total += lineTotal;

            receiptText += `${item} x${quantity} - $${lineTotal.toFixed(2)}\n`;
        }
    }

    if (!hasItems) {
        receiptText += "Cart is empty.\n";
    } else {
        receiptText += "------------------------\n";
        receiptText += `Total: $${total.toFixed(2)}\n`;
    }

    document.getElementById("receipt").textContent = receiptText;
    document.getElementById("total").textContent = total.toFixed(2);
}

function resetCart() {
    for (let item in prices) {
        document.getElementById(item).value = 0;
    }

    document.getElementById("total").textContent = "0.00";
}

