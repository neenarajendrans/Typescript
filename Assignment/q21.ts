function multiplyAdjacentValues(arr: number[]): number[] {
    let result: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        result.push(arr[i] * arr[i + 1]); // Multiply adjacent values and store
    }

    return result;
}

// Taking user input
let inputArray: number[] = [];
let sizeOfA = parseInt(prompt("Enter the array limit:") || "0");

for (let i = 0; i < sizeOfA; i++) {
    let num = parseInt(prompt(`Enter value ${i + 1}:`) || "0");
    inputArray.push(num);
}
// Process the array
let multipliedArray = multiplyAdjacentValues(inputArray);

// Displaying the result
console.log("Output:");
console.log(multipliedArray.join("\t"));
