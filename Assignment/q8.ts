// Accept input from the user
const limit: number = parseInt(prompt("Enter a limit:") || "0");

// Initialize sum variable
let sum_: number = 0;

// Loop through numbers up to the limit and add only odd numbers
for (let i = 1; i <= limit; i += 2) {
  sum_ += i;
}

// Display the result
console.log(`Sum of odd numbers up to ${limit} = ${sum_}`);
