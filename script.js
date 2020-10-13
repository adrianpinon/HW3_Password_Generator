// Assignment Code
let generateBtn = document.querySelector("#generate");
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let upperCaseCharaters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let lowerCaseCharaters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let speicalCharaters = ["!", "?", "@", "#", "$", "%", "&", "*", ";"]

console.log(generateBtn)
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let passwordLength = prompt("How Long do you want your password to be?")
  let optionsArray = []
  console.log(passwordLength)
  if (passwordLength < 8 || passwordLength > 128) {
    return ""
  }
  // ask the user a series of questions//
  //1st question is do you want numbesr included in the password//
  //2nd question is do you want speical charaters in the password//
  //3rd question is do you want upper case charaters in the password//
  //4rd question is do you want lower case charaters in the password//
  //the questions must a confirm//
  //loop through the password length//
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
