function calculateTax(income: number): number {
    let tax = 0;

    if (income > 10000000) {
        tax = (income * 30) / 100;
    } else if (income > 5000000) {
        tax = (income * 30) / 100;
    } else if (income > 500000) {
        tax = (income * 20) / 100;
    } else if (income > 250000) {
        tax = (income * 5) / 100;
    }

    return parseFloat(tax.toFixed(2)); // Rounding to 2 decimal places
}

function main(): void {
    let income = parseFloat(prompt("Enter your annual income:") || "0");

    // Validate input
    if (isNaN(income) || income < 0) {
        alert("Invalid input! Please enter a valid income.");
        return;
    }

    let taxAmount = calculateTax(income);
    alert(`Income tax amount = ${taxAmount}`);
}

// Run the program
main();
