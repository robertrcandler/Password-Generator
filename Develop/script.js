// Assignment Code
var generateBtn = document.querySelector("#generate");

//creating password character array
let arrchar = [];

function generatePassword() {
  //these are my prompts 
    //Input number of characters
    for (var i=0;i<1;) {
      //a prompt for how many characters the user would like
      //must be 8-128 characters
      var Characterprompt  = prompt("How many characters in the password, must be between 8 and 128.");
      //make answer number type
      var numCharacter = parseInt(Characterprompt);
      //Test is input is number
      if (isNaN(numCharacter)=true) {
        i=0
        alert("Input is not a number, please input valid number");
      } else {
        //Test number of characters is in range
        if (numCharacter < 8 || numCharacter > 128) {
          i=0
          alert("Input is not in the specified range of values");
        } else {i=1
        alert("success")
        }
      }
    }

  
  //ask the user if they want lowercase
    //store it in a variable
    var lowercase = confirm("Do you want to use lowercase characters?");
    //create lowercase array
    if (lowercase=true) {
      var strlow = "abcdefghijklmnopqrstuvwxyz";
      arrchar.push(strlow.split(""));
    } 
  //ask the user if they want uppercase
    //store it in a variable
    var uppercase = confirm("Do you want to use uppercase characters?");
    //create uppercase array
    if (uppercase=true) {
      var strup = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      arrchar.push(strup.split(""));
    }
  //ask the user if they want numeric
    //store it in a variable
    var numbers = confirm("Do you want to use numbers?");
    //create uppercase array
    if (numbers=true) {
      var strnum = "0123456789";
      arrchar.push(strnum.split(""));
    }
  //ask the user if they want special characters
    //store it in a variable
    var symbols = confirm("Do you want to use special characters?");
    //create uppercase array
    if (symbols=true) {
      var strsym = "!#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
      arrchar.push(strsym.split(""));
    }
    
    //Now to make the password!
    if (arrchar.lenght<1) {
      alert("You did not select any characters");
      return null;
    } else {
      for (var i = 0; i < numCharacter; i++) {
        var arrpasscode = passcode.push(arrchar[Math.floor(Math.random() * Math.floor(arrchar.length))]); 
      }
    }
    var passcode = arrpasscode.join("");
    return passcode;
}
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
