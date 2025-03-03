// Define an array
const a: number[] = [20, 10, 50, 30, 40];

// Sort the array in descending order
const sortedArray = a.sort((a, b) => b - a);

// Display the result
console.log("Sorted array in descending order:", sortedArray);
//or
function getArrays(): number[] {
    let size = parseInt(prompt("Enter the size of the array:") || "0");
    let arr: number[] = [];

    for (let i = 0; i < size; i++) {
        let value = parseInt(prompt(`Enter element ${i + 1}:`) || "0");
        arr.push(value);
    }

    return arr;
}

function sortDescending(arr: number[]): number[] {
    return arr.sort((a, b) => b - a);
}

function displayArrays(arr: number[]): void {
    alert("Sorted array in descending order: " + arr.join(", "));
}

// Main function
function mainfn(): void {
    let arr = getArrays(); // Get user input
    let sortedArr = sortDescending(arr); // Sort in descending order
    displayArrays(sortedArr); // Display result
}

mainfn();

