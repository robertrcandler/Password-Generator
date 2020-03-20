// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //these are my prompts 

  //a prompt for how many characters the user would like
    //must be 8-128 characters
    var Characterprompt  = prompt("How many characters in the password, must be between 8 and 128.");
    //make answer number type
    var numCharacter = parseInt(Characterprompt);
    //test for valid number of characters
    for (isNaN(numCharacter)=true || numCharacter < 8 || numCharacter > 128) {
      alert("Invalid Input, Please try again");
      Characterprompt  = prompt("How many characters in the password, must be between 8 and 128.");
      //make answer number type
      numCharacter = parseInt(Characterprompt);
    }
    //store it in a variable

  //ask the user if they want lowercase
    //store it in a variable

  //ask the user if they want uppercase
    //store it in a variable

  //ask the user if they want numeric
    //store it in a variable

  //ask the user if they want special characters
    //store it in a variable
}
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
