function getArray(size: number): number[][] {
    let arr: number[][] = [];
    for (let i = 0; i < size; i++) {
        arr[i] = [];
        for (let j = 0; j < size; j++) {
            let value = parseInt(prompt(`Enter value for row ${i + 1}, column ${j + 1}:`) || "0");
            arr[i][j] = value;
        }
    }
    return arr;
}

function addArray(arr1: number[][], arr2: number[][], size: number): number[][] {
    let sumArr: number[][] = [];
    for (let i = 0; i < size; i++) {
        sumArr[i] = [];
        for (let j = 0; j < size; j++) {
            sumArr[i][j] = arr1[i][j] + arr2[i][j]; // Adding elements
        }
    }
    return sumArr;
}

function displayArray(arr: number[][], message: string): void {
    console.log(message);
    for (let row of arr) {
        console.log(row.join("\t"));
    }
}

// Main function
function main() {
    let size = parseInt(prompt("Enter the size of the array:") || "0");

    console.log("Enter the values for Array 1:");
    let array1 = getArray(size);

    console.log("Enter the values for Array 2:");
    let array2 = getArray(size);

    let sumArray = addArray(array1, array2, size);

    displayArray(sumArray, "Sum of Array 1 and Array 2:");
}

// Call main function
main();
