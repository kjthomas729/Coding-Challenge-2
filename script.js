// Function to calculate the tip based on the bill amount
function calcTip(billAmount) {
    // Check if the bill amount is between $50 and $300
    const tipPercentage = (billAmount >= 50 && billAmount <= 300) ? 0.15 : 0.20;

    // Calculate the tip amount
    const tipAmount = billAmount * tipPercentage;

    // Return the tip amount
    return tipAmount;
}

// Test data values
const bills = [275, 40, 430];

// Calculate tips for each bill and store them in an array
const tips = bills.map(bill => calcTip(bill));

// Calculate totals by adding each bill with its respective tip
const totals = bills.map((bill, index) => bill + tips[index]);

// Display the bills, tips, and totals in the console
for (let i = 0; i < bills.length; i++) {
    console.log(`Bill: $${bills[i].toFixed(2)}, Tip: $${tips[i].toFixed(2)}, Total: $${totals[i].toFixed(2)}`);
}
