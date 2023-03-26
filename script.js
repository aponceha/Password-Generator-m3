// Assignment code here
var passwordLength = 8;
var choice = "";

var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "01234567890";


var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompt();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {

    var password = generatePassword();
    passwordText.value = password;
  }
  else {
    passwordText.value = "";
  }
}
// Generate new Password function
function generatePassword() {
  var newpassword = "";
  for (var i = 0; i < characterLength; i++) {
    var randomLetter = choice.charAt(Math.floor(Math.random() * choice.length));
    newpassword = newpassword + randomLetter
  }
  return newpassword;
}


// Code for prompting the user

function getPrompt() {
  choice = "";
  characterLength = parseInt(prompt("How many characters would you like your password to be? Please enter a number between 8 and 128"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please enter a number  between 8 and 128. Please try again");
    return false;
  }
  if (confirm("Would you like to include lowercase letters in your password? Click 'Cancel' box for No.")) {
    choice = choice + lowercase;
  }
  if (confirm("Would you like to include uppercase letters in your password? Click 'Cancel' box for No.")) {
    choice = choice + uppercase;
    }
  if (confirm("Would you like to include special characters in your password? Click 'Cancel' box for No.")) {
    choice = choice + symbols;
  }
  if (confirm("Would you like to include numbers in your password? Click 'Cancel' box for No.")) {
    choice = choice + numbers;
    }
  return true;

}













