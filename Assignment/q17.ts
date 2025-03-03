class Calculator {
    // Addition
    addition(a: number, b: number): number {
        return a + b;
    }

    // Subtraction
    subtraction(a: number, b: number): number {
        return a - b;
    }

    // Multiplication
    multiplication(a: number, b: number): number {
        return a * b;
    }

    // Division
    division(a: number, b: number): number {
        if (b === 0) {
            alert("Division by zero is not allowed.");
            return NaN;
        }
        return a / b;
    }
}

function main(): void {
    let calculator = new Calculator(); // Create an object of Calculator class

    let choice = parseInt(prompt(
        "Select an operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"
    ) || "0");

    if (![1, 2, 3, 4].includes(choice)) {
        alert("Invalid choice! Please select a valid operation.");
        return;
    }

    let num1 = parseFloat(prompt("Enter first number:") || "0");
    let num2 = parseFloat(prompt("Enter second number:") || "0");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input! Please enter valid numbers.");
        return;
    }

    let result: number;

    switch (choice) {
        case 1:
            result = calculator.addition(num1, num2);
            alert(`Result: ${num1} + ${num2} = ${result}`);
            break;
        case 2:
            result = calculator.subtraction(num1, num2);
            alert(`Result: ${num1} - ${num2} = ${result}`);
            break;
        case 3:
            result = calculator.multiplication(num1, num2);
            alert(`Result: ${num1} * ${num2} = ${result}`);
            break;
        case 4:
            result = calculator.division(num1, num2);
            if (!isNaN(result)) {
                alert(`Result: ${num1} / ${num2} = ${result}`);
            }
            break;
        default:
            alert("Invalid selection!");
            break;
    }
}

main();
