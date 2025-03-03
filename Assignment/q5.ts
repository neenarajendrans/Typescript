const totalMark: number = parseFloat(prompt("enter the total Mark:")||"0");

let grade: string;

if(totalMark>=90){
    grade = 'A';
}else if(totalMark>=80){
    grade = 'B';
}else if(totalMark>=70){
    grade = 'C';
}else if(totalMark>=60){
    grade = 'D';
}else if(totalMark>=50){
    grade = 'E';
}else {
    grade = 'FAILED'
}
console.log(`Your Grade is ${grade}`)