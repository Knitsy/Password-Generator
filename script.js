// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = prompt("Enter password length:");
  
  // Validate the entered length
  if (!length || isNaN(length)) {
    alert("Invalid length. Please enter a valid number.");
    return;
  }

  length = parseInt(length);

  // Validate the password length requirements
  var MIN_LENGTH = 8;
  var MAX_LENGTH = 128;
  if (length < MIN_LENGTH || length > MAX_LENGTH) {
    alert(`Invalid length. Please enter a length between 8 and 128.`);
    return;
  }

  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password based on user-selected options and desired length
function generatePassword(length) {
  // Set the password length requirements
  var MIN_LENGTH = 8;
  var MAX_LENGTH = 128;

  // Prompt for character types and validate at least one is chosen
  var specialChars, numericChars, uppercaseChars, lowercaseChars;
  while (true) {
    specialChars = confirm("Include special characters?");
    numericChars = confirm("Include numeric characters?");
    uppercaseChars = confirm("Include uppercase alphabetic characters?");
    lowercaseChars = confirm("Include lowercase alphabetic characters?");

    if (specialChars || numericChars || uppercaseChars || lowercaseChars) {
      break;
    }
    alert("Please select at least one character type.");
  }

  // Generate the password
  var characterPool = "";
  if (specialChars) {
    characterPool += "!@#$%^&*()_+-=[]{};:,.<>?/";
  }
  if (numericChars) {
    characterPool += "0123456789";
  }
  if (uppercaseChars) {
    characterPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowercaseChars) {
    characterPool += "abcdefghijklmnopqrstuvwxyz";
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool.charAt(randomIndex);
  }

  return password;
}
