function printPattern(rows: number): void {
    let num = 1; // Initialize the starting number

    for (let i = 1; i <= rows; i++) {
        let rowOutput = "";
        for (let j = 1; j <= i; j++) {
            rowOutput += num + "\t"; // Add number with a tab space
            num++; // Increment the number
        }
        console.log(rowOutput); // Print each row
    }
}

// Call the function with 4 rows
printPattern(4);
