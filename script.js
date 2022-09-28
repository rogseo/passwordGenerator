// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // input for # of characters
  var aNumber = Number(window.prompt("Type a number", ""));
  console.log(`number:${aNumber}, datatype:${typeof (aNumber)}`);
  //validate 8<=num<=128
  while (aNumber < 8 || aNumber > 128) {
    aNumber = Number(window.prompt("Choose a length of at least 8 and no more that 128 characters", ""));
    console.log(`number:${aNumber}, datatype:${typeof (aNumber)}`);
  }
  //input for spectial chracter
  var isSpecialCharInclude = Boolean(window.confirm("include Special Characters", ""));
  console.log(isSpecialCharInclude);

  var isLowerCaseInclude = Boolean(window.confirm("include lowercase", ""));
  console.log(isLowerCaseInclude);

  var isUpperCaseInclude = Boolean(window.confirm("include uppercase", ""));
  console.log(isUpperCaseInclude);

  var isNumberInclude = Boolean(window.confirm("include number", ""));
  console.log(isNumberInclude);

  var passwordset_chars = "";
  if (isSpecialCharInclude) {
    // " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    passwordset_chars=passwordset_chars.concat("!*+,-./:;<=>?@[^_");
    console.log(passwordset_chars);
  }

  if (isLowerCaseInclude) {
    passwordset_chars = passwordset_chars.concat("abcdefghijklmnopqrstuvwxyz");
    console.log(passwordset_chars);
  }
  if (isUpperCaseInclude) {
    passwordset_chars = passwordset_chars.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    console.log(passwordset_chars);
  }
  if (isNumberInclude) {
    passwordset_chars = passwordset_chars.concat("0123456789");
    console.log(passwordset_chars);
  }
  

  var passwordLength = 12;
  var password = "";
  for (var i = 0; i <= aNumber; i++) {
    var randomNumber = Math.floor(Math.random() * passwordset_chars.length);
    console.log(`ramdomnum: ${randomNumber}`);
    password += passwordset_chars.substring(randomNumber, randomNumber + 1);
    console.log(`password: ${password}`);
  }

  return password;








}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //password;
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






