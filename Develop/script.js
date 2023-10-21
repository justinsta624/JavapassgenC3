// Generate a random password based on criteria below;
function generatePassword(){
// Whether to include lower/uppercase, numbers, and/or special characters in random password  
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialC = '~!@#$%^&*()-_=+[{]}",<.>?/';

// Prompt for password choosing criteria;
let length = parseInt(prompt('Choose between 8 to 128 characters for the password:'));
while (isNaN(length) || length < 8 || length > 128)
    length = parseInt(prompt('Invalid input; Choose between 8 to 128 characters for the password:'));
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
