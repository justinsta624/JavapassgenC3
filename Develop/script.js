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

// Generate a random password based on criteria below;
function generatePassword(){
// Whether to include lower/uppercase, numbers, and/or special characters in random password  
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var specialC = '~!@#$%^&*()-_=+[{]}",<.>?/';

// use pop-up in Javascript (external source: https://www.w3schools.com/js/js_popup.asp)
// apply only decimal-exclude integers (external source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
// returns true if a value is Not-a-Number (external source: https://www.w3schools.com/jsref/jsref_isnan.asp)
// use "While" loop (external source https://www.w3schools.com/js/js_loop_while.asp)
// use Prompt-box to answer as instructed on the criteria for password by "filling in the box"
// Password condition: Only integers can be registered, exclude value with no number
let length = parseInt(prompt('Choose between 8 to 128 characters for the password:'));
while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt('Invalid input; Choose between 8 to 128 characters for the password:'));
}
// Use confirm-box to answer as instructed on the criteria for password, in case of "Yes/No question"
  var addlowercase = confirm('add lowercase in password?');
  var adduppercase = confirm('add uppercase in password?');
  var addnumbers = confirm('add numbers in password?');
  var addspecialC = confirm('add special characters in password?');

// using "!" as not equal to (external source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality)
// confirm whether or not to include lowercase, uppercase, numbers, and/or special characters
while (!(addlowercase || adduppercase || addnumbers || addspecialC)) {
  alert('You must add at least one condition to generate a password.');
  addlowercase = confirm('add lowercase in password?');
  adduppercase = confirm('add uppercase in password?');
  addnumbers = confirm('add numbers in password?');
  addspecialC = confirm('add special characters in password?');
}

}