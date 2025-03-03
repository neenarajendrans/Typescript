// Accept input from the user
const dayNumber: number = parseInt(prompt("Enter a number (1-7) for the day of the week:") || "0");

// Determine the day using switch-case
let day: string;

switch (dayNumber) {
  case 1:
    day = "Sunday";
    break;
  case 2:
    day = "Monday";
    break;
  case 3:
    day = "Tuesday";
    break;
  case 4:
    day = "Wednesday";
    break;
  case 5:
    day = "Thursday";
    break;
  case 6:
    day = "Friday";
    break;
  case 7:
    day = "Saturday";
    break;
  default:
    day = "Invalid Entry";
}

// Display the result
console.log(`Day: ${day}`);
