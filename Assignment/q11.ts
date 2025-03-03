// Accept the size of the array
const sizes: number = parseInt(prompt("Enter the size of the array:") || "0");

// Accept values for the array
const array: number[] = prompt("Enter the values of the array (comma-separated):")
  ?.split(",")
  .map(Number) || [];

// Ensure the correct number of elements are entered
if (array.length !== sizes) {
  console.log("Error: Please enter the correct number of elements.");
} else {
  // Count the even numbers
  const evenCount = array.filter(num => num % 2 === 0).length;

  // Display the result
  console.log("Number of even numbers in the given array is:", evenCount);
}
