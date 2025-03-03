function isPrime(num: number): boolean {
    if (num < 2) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If divisible, not prime
    }
    return true; // Prime if no divisors found
}

function main(): void {
    let input = parseInt(prompt("Enter a number:") || "0");

    if (isNaN(input)) {
        alert("Please enter a valid number.");
    } else {
        if (isPrime(input)) {
            alert(`${input} is a Prime Number.`);
        } else {
            alert(`${input} is Not a Prime Number.`);
        }
    }
}

main();
