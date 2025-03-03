const char:string |null = prompt('Enter a character:');

if(char!= null){
    console.log(`${char}`)
}else{
    console.log("No character received")
}
// prompt("Enter a character:") → Opens a pop-up asking for input.
// char is either:
// A string (if the user enters something).
// null (if they press "Cancel").
// console.log() prints the entered character.