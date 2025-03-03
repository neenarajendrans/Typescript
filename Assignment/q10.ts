// Accept the size of arrays
const size: number = parseInt(prompt("Enter the size of arrays:") || "0");

// Accept values for Array 1
const array1: number[] = prompt("Enter the values of Array 1 (comma-separated):")
  ?.split(",")
  .map(Number) || [];

// Accept values for Array 2
const array2: number[] = prompt("Enter the values of Array 2 (comma-separated):")
  ?.split(",")
  .map(Number) || [];

// Ensure both arrays are of the same size
if (array1.length !== size || array2.length !== size) {
  console.log("Error: Please enter the correct number of elements.");
} else {
  // Swap elements one by one
  for (let i = 0; i < size; i++) {
    let temp = array1[i];
    array1[i] = array2[i];
    array2[i] = temp;
  }

  // Display the swapped arrays
  console.log("Arrays after swapping:");
  console.log("Array 1:", array1.join(", "));
  console.log("Array 2:", array2.join(", "));
}
