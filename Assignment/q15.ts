// Function to get array values from the user
function getArray(): number[] {
    return [10, 20, 30, 40, 50]; // Simulating user input (replace with user prompt if needed)
}

// Function to display array values
function displayArray(arr: number[]): void {
    console.log("Array values:", arr.join(", "));
}

// Main function
function main(): void {
    let arr: number[] = getArray(); // Get array values
    displayArray(arr); // Display array values
}

// Call the main function
main();


// function getArray(): number[] {
//     let size = parseInt(prompt("Enter the size of the array:") || "0");
//     let arr: number[] = [];

//     for (let i = 0; i < size; i++) {
//         let value = parseInt(prompt(`Enter element ${i + 1}:`) || "0");
//         arr.push(value);
//     }

//     return arr;
// }

// function sortDescending(arr: number[]): number[] {
//     return arr.sort((a, b) => b - a);
// }

// function displayArray(arr: number[]): void {
//     alert("Sorted array in descending order: " + arr.join(", "));
// }

// // Main function
// function main(): void {
//     let arr = getArray(); // Get user input
//     let sortedArr = sortDescending(arr); // Sort in descending order
//     displayArray(sortedArr); // Display result
// }

// main();
