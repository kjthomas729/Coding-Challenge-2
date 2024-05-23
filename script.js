// Function to calculate the tip based on the bill amount
function calcTip(billAmount) {
    // Check if the bill amount is between $50 and $300
    const tipPercentage = (billAmount >= 50 && billAmount <= 300) ? 0.15 : 0.20;

    // Calculate the tip amount
    const tipAmount = billAmount * tipPercentage;

    // Return the tip amount
    return tipAmount;
}

// Test the calcTip function with a bill value of $100
const bill = 100;
const tip = calcTip(bill);
console.log(`For a bill of $${bill}, the tip amount is $${tip}.`);
