// Assignment Code
let generateBtn = document.querySelector("#generate");
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let speicalCharacter = ["!", "?", "@", "#", "$", "%", "&", "*",";"]

console.log(generateBtn);
// Write password to the #password input
function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//loop through the password length//
function generatePassword ()
  {

    passwordLength = prompt("How long do you want your password to be?                                 (Chose between 8 and 25 Characters)");
    for (let passwordLength = 0[Math.floor(Math.random)]; passwordLength < password.Length; i++) 
    if (passwordLength < 8 || passwordLength > 25)
    

    passwordNumber = confirm("D0 Y0u W4nt Numb3rs 1nclud3d 1n the 9assword?");
        if (numbers) {generatePassword}
    passwordSpeical = confirm("Do You W@nt $pe!cal Ch@r@cters !nclude !n the P@ssword?!");
        if (speicalCharacter)  {generatePassword}
    passwordUppercase = confirm("DO YOU WANT UPPERCASE CHARACTERS IN THE PASSWORD!");
        if (uppercaseCharacter)  {generatePassword}
    passwordLowercase = confirm("do you want lowercase characters in the password?");
        if (lowercaseCharacter) {generatePassword}
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);