class Area {
    circle(radius: number): number {
        return 3.14 * radius * radius;
    }

    square(side: number): number {
        return side * side;
    }

    rectangle(length: number, width: number): number {
        return length * width;
    }

    triangle(base: number, height: number): number {
        return 0.5 * base * height;
    }
}

class MyClass extends Area {
    main(): void {
        console.log("Choose an option:");
        console.log("1. Circle");
        console.log("2. Square");
        console.log("3. Rectangle");
        console.log("4. Triangle");

        let choice = parseInt(prompt("Enter your choice (1-4):") || "0");

        switch (choice) {
            case 1:
                let radius = parseFloat(prompt("Enter the radius of the circle:") || "0");
                console.log(`Area of the circle is: ${this.circle(radius).toFixed(2)}`);
                break;

            case 2:
                let side = parseFloat(prompt("Enter the length of the square:") || "0");
                console.log(`Area of the square is: ${this.square(side).toFixed(2)}`);
                break;

            case 3:
                let length = parseFloat(prompt("Enter the length of the rectangle:") || "0");
                let width = parseFloat(prompt("Enter the width of the rectangle:") || "0");
                console.log(`Area of the rectangle is: ${this.rectangle(length, width).toFixed(2)}`);
                break;

            case 4:
                let base = parseFloat(prompt("Enter the base of the triangle:") || "0");
                let height = parseFloat(prompt("Enter the height of the triangle:") || "0");
                console.log(`Area of the triangle is: ${this.triangle(base, height).toFixed(2)}`);
                break;

            default:
                console.log("Invalid choice! Please select a valid option.");
        }
    }
}

// Call the main function
let obj = new MyClass();
obj.main();
