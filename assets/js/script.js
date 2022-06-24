// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var len = promptLenght()
  if (!len){
    return
  }
  var incLower = confirm("Should the password include lowercase characters?")
  var incUpper = confirm("Should the password include uppercase characters?")
  var incNum = confirm("Should the password include numbers?")
  var incSp = confirm("Should the password include special characters?")



}

function promptLenght(){
  var len = prompt("Enter how many characters the password needs to be: (min 8 to max 128")
  if(!len){
    return null
  }
  len = Number(len)
  if (len < 8 || len > 128){
    alert("We require a minimum size of 8 characters and have a maximum size of 128 characters.")
  } else if(isNaN(len)) {
    alert("Please enter a real number.")
  } else {
    //alert("reached promp return")
    return len
  }
}

function passwordGen(low,up,num,sp,len){
  var lStr = "abcdefghijklmnopqrstuvwxyz"
  var uStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var nStr = "123456789"
  var sStr = "!@#$%^&*()?"

  var numDiv = low + up + num + sp
  var rtn = ""

  if(lStr){
    for(var i = 0; i < Math.floor(len/numDiv); i++){
      rtn += lStr.charAt(Math.floor(Math.random()*(27)))
    }
  }

  if(uStr){
    for(var i = 0; i < Math.floor(len/numDiv); i++){
      rtn += uStr.charAt(Math.floor(Math.random()*(27)))
    }
  }

  if(nStr){
    for(var i = 0; i < Math.floor(len/numDiv); i++){
      rtn += nStr.charAt(Math.floor(Math.random()*(27)))
    }
  }
  
}

