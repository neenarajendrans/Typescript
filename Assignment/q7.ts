// Accept input from the user
const num: number = parseInt(prompt("Enter a number:") || "0");

// Print the multiplication table
console.log(`Multiplication table of ${num}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${i} x ${num} = ${i * num}`);
}
