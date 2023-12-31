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

  // use pop-up box in Javascript (external source: https://www.w3schools.com/js/js_popup.asp)
  // use "parseInt" apply only decimal-exclude integers (external source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
  // use "While" loop (external source https://www.w3schools.com/js/js_loop_while.asp)
  // use "isNAN" return true if a value is Not-a-Number (external source: https://www.w3schools.com/jsref/jsref_isnan.asp)
  // use Prompt-box to answer as instructed on the criteria for password by "filling in the box"
  // Password condition: Only integers can be registered, exclude value with no number
  // using "!" as not equal to (external source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality)
  let promptinput = prompt('Select a number between 8 to 128 to determine the length of new password:');
  let length = parseInt(promptinput);
  while (isNaN(length) || length < 8 || length > 128 || promptinput != length) {
      promptinput = prompt('Invalid input; Select a number between 8 to 128 to determine the length of new password:');
      length = parseInt(promptinput);
  }
  // Use confirm-box to answer as instructed on the criteria for password, in case of "Yes/No question"
  var addlowercase = confirm('add lowercase in the password?');
  var adduppercase = confirm('add uppercase in password?');
  var addnumbers = confirm('add numbers in the password?');
  var addspecialC = confirm('add special characters in the password?');

  // using "!" as not equal to (external source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality)
  // confirm whether or not to include lowercase, uppercase, numbers, and/or special characters
  while (!(addlowercase || adduppercase || addnumbers || addspecialC)) {
    alert('You must add at least one condition to generate a password.');
    addlowercase = confirm('add lowercase in the password?');
    adduppercase = confirm('add uppercase in the password?');
    addnumbers = confirm('add numbers in the password?');
    addspecialC = confirm('add special characters in the password?');
  }
  // check if the below variables are truthy (i.e., not false, 0, null, undefined, empty string, or NaN)
  // (external source: https://www.freecodecamp.org/news/javascript-if-statement-equality-and-truthy-falsy)
  var alladd = '';
  if (addlowercase) alladd += lowercase;
  if (adduppercase) alladd += uppercase;
  if (addnumbers) alladd += numbers;
  if (addspecialC) alladd += specialC;

  var password = '';
  // For loop starts at 0, runs while i is less than length of the "alladd"
  // password can be value between 0 and the length of the "alladd"  
  for (var i = 0; i < length; i++) {
    // use Variable "number" to set the condition for random values which can be appear on the Password Generator box
    // (external source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 
    var number = Math.floor(Math.random() * alladd.length)
    password += alladd[number];
  }

  return password;
}

