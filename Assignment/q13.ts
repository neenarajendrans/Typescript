// Function to check if a string is a palindrome
function isPalindrome(str: string): boolean {
    const cleanedStr = str.toLowerCase(); // Convert to lowercase for case insensitivity
    const reversedStr = cleanedStr.split("").reverse().join(""); // Reverse the string
    return cleanedStr === reversedStr;
}

// Define a test string
const inputString: string = "MALAYALAM";

// Check if it's a palindrome
if (isPalindrome(inputString)) {
    console.log("Entered string is a palindrome");
} else {
    console.log("Entered string is not a palindrome");
}
