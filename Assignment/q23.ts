class Matrix {
    private arr: number[][] = [];

    constructor(private size: number) {}

    getArray(): void {
        for (let i = 0; i < this.size; i++) {
            this.arr[i] = [];
            for (let j = 0; j < this.size; j++) {
                let value = parseInt(prompt(`Enter value for row ${i + 1}, column ${j + 1}:`) || "0");
                this.arr[i][j] = value;
            }
        }
    }

    displayArray(): void {
        console.log("Array elements are:");
        for (let row of this.arr) {
            console.log(row.join("\t"));
        }
    }
}

// Main function
function main() {
    let size = parseInt(prompt("Enter the size of the array:") || "0");

    let matrix = new Matrix(size);
    matrix.getArray();  // Get user input
    matrix.displayArray(); // Display the matrix
}

// Call main function
main();
