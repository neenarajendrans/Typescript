function calculateGrade(writtenTest: number, labExam: number, assignment: number): number {
    let grade = (writtenTest * 70) / 100 + (labExam * 20) / 100 + (assignment * 10) / 100;
    return parseFloat(grade.toFixed(2)); // Rounding to 2 decimal places
}

function main(): void {
    let writtenTest = parseFloat(prompt("Enter Written Test Marks:") || "0");
    let labExam = parseFloat(prompt("Enter Lab Exam Marks:") || "0");
    let assignment = parseFloat(prompt("Enter Assignment Marks:") || "0");

    // Validate input
    if (isNaN(writtenTest) || isNaN(labExam) || isNaN(assignment)) {
        alert("Invalid input! Please enter valid numbers.");
        return;
    }

    let finalGrade = calculateGrade(writtenTest, labExam, assignment);
    alert(`Grade of the student is: ${finalGrade}`);
}

// Run the program
main();
