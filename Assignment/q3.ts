const principal: number = parseFloat(prompt("Enter the Principal Amount, P:")||'0')
const rate: number = parseFloat(prompt("Enter the rate of interest in %, R:")||'0')
const years: number = parseFloat(prompt("Enter the No:of years, N:")||'0')

const simpleInterest : number = (principal*rate*years)/100;
console.log(`simple interest is : ${simpleInterest}`)