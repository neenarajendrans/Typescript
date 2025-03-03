// function reverseString(my_string) {
//     try {
//         // Attempt to reverse the string
//         let reversed = my_string.split('').reverse().join('');
//         console.log(`Reversed string is : ${reversed}`);
//     } catch (err) {
//         // Catch and display errors
//         console.log(`Error : ${err.message}`);
//     } finally {
//         // Always print the type of my_string
//         console.log(`Type of my_string is : ${typeof my_string}`);
//     }
// }

// // Test Cases
// reverseString("1234");  // Sample Input 0
// reverseString(Number(1234));  // Sample Input 1

function reverseString(my_string: any): void {
    try {
        let reversed = my_string.split("").reverse().join("");
        console.log(`Reversed string is : ${reversed}`);
    } catch (err: any) {
        console.log(`Error : ${err.message}`);
    } finally {
        console.log(`Type of my_string is : ${typeof my_string}`);
    }
}

// Test cases
reverseString("1234");    // Output: "4321"
reverseString(Number(1234));  // Output: Error message
