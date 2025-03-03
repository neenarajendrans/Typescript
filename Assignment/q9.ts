// Accept input from the user (number of rows)
const rows: number = parseInt(prompt("Enter the number of rows:") || "0");

// Loop for each row
for (let i = 1; i <= rows; i++) {
  let pattern = ""; // Initialize an empty string for each row
  for (let j = 1; j <= i; j++) {
    pattern += j + " "; // Append numbers to the pattern
  }
  console.log(pattern.trim()); // Print the row
}
