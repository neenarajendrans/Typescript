class Car {
    name: string;
    mileage: number;
    max_speed: number;

    constructor(name: string, mileage: number, max_speed: number) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
}

// Creating an instance of Car
const myCar = new Car("Toyota Corolla", 18, 180);

// Displaying the Car object
console.log(myCar);
