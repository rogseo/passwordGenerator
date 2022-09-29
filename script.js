
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // input for # of characters
  var aNumber = Number(window.prompt("Type a number of length of your password", ""));
  
  //Check if it is not a number or less than 8 or greater than 128
   while (isNaN(aNumber)|| aNumber < 8 || aNumber >= 128) {
    aNumber = Number(window.prompt("Invalid ; Choose a length of at least 8 and no more that 128 characters", ""));
  }
  //Include special character
  var isSpecialCharInclude = Boolean(window.confirm("Include Special Characters", ""));
  //Include lowercase
  var isLowerCaseInclude = Boolean(window.confirm("Include lowercase", ""));
  //Include Uppercase
  var isUpperCaseInclude = Boolean(window.confirm("Include uppercase", ""));
  //Include number
  var isNumberInclude = Boolean(window.confirm("Include number", ""));

  var passwordSet_chars = "";
  if (isSpecialCharInclude) {
    passwordSet_chars=passwordSet_chars.concat(" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  }
  if (isLowerCaseInclude) {
    passwordSet_chars = passwordSet_chars.concat("abcdefghijklmnopqrstuvwxyz");
  }
  if (isUpperCaseInclude) {
    passwordSet_chars = passwordSet_chars.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (isNumberInclude) {
    passwordSet_chars = passwordSet_chars.concat("0123456789");
  }
  
  //randomly generate password
  var password = "";
  for (var i = 0; i <= aNumber; i++) {
    var randomNumber = Math.floor(Math.random() * passwordSet_chars.length);
    password += passwordSet_chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if(password==""){
    password="At least one character type should be selected\nclick 'Generate Password' again"
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






