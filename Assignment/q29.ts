function myFilter(myArray: number[], callback: (num: number) => boolean): number {
    let sum = myArray.reduce((acc, num) => acc + num, 0);
    return sum;
}

// Callback function to check if the sum is even or odd
function isEven(num: number): boolean {
    return num % 2 === 0;
}

// Sample Input: 12345 (Converted to an array of numbers [1,2,3,4,5])
const inputString_ = "12345";
const inputArray_ = inputString_.split("").map(Number);

// Calling the myFilter function
const result = myFilter(inputArray_, isEven);

// Output
console.log(result);  // Output: 15
