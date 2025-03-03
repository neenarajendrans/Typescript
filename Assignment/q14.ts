// Function to add two 2D arrays
function addMatrices(matrix1: number[][], matrix2: number[][]): number[][] {
    const rows = matrix1.length;
    const cols = matrix1[0].length;
    const result: number[][] = [];

    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < cols; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return result;
}

// Define two 2D arrays
const matrix1: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrix2: number[][] = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

// Get the sum of the matrices
const sumMatrix = addMatrices(matrix1, matrix2);

// Display the result
console.log("Sum of 2 arrays is:");
sumMatrix.forEach(row => console.log(row.join(" ")));
