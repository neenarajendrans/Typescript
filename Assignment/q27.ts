// function checkHeight(my_height) {
//     try {
//         // Convert input to number if possible
//         let height = Number(my_height);

//         // Check for NaN (not a number)
//         if (isNaN(height)) {
//             throw new Error("notANumberError");
//         }
//         // Check for huge height (> 75)
//         else if (height > 75) {
//             throw new Error("hugeHeightError");
//         }
//         // Check for tiny height (<= 0)
//         else if (height <= 0) {
//             throw new Error("tinyHeightError");
//         }

//         // If valid height, print the height
//         console.log(height);
//     } catch (err) {
//         // Print the error message
//         console.log(err.message);
//     }
// }

// // Test Cases
// checkHeight("seven");  // Sample Input 0
// checkHeight(77);       // Sample Input 1
// checkHeight(0);        // Sample Input 2
// checkHeight(8);        // Sample Input 3
function checkHeight(my_height: any): void {
    try {
        if (isNaN(my_height)) {
            throw new Error("notANumberError");
        } else if (my_height > 75) {
            throw new Error("hugeHeightError");
        } else if (my_height < 1) {
            throw new Error("tinyHeightError");
        } else {
            console.log(my_height);
        }
    } catch (err: any) {
        console.log(err.message);
    }
}

// Test cases
checkHeight("seven"); // Output: notANumberError
checkHeight(77);      // Output: hugeHeightError
checkHeight(0);       // Output: tinyHeightError
checkHeight(8);       // Output: 8
