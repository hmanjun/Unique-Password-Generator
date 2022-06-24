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
    return ""
  }
  // Prompts for password criterias
  var incLower = confirm("Should the password include lowercase characters?")
  var incUpper = confirm("Should the password include uppercase characters?")
  var incNum = confirm("Should the password include numbers?")
  var incSp = confirm("Should the password include special characters?")
  var pass = passwordGen(incLower,incUpper,incNum,incSp,len)

  //Check if any criteria was selected (works even if a password was generated behind the scenes)
  if(pass.length < 8){
    alert("Please select a minimum of one character criteria.")
  }
  return pass
  //alert("Product preshuffle " + pass)

}


// Prompts user for the lenght of desired password
function promptLenght(){
  var len = prompt("Enter how many characters the password needs to be: (min 8 to max 128")
  if(!len){ // Break if cancel is clicked
    return null
  }
  len = Number(len)
  if (len < 8 || len > 128){ // Require min len of 8 and max of 128
    alert("We require a minimum size of 8 characters and have a maximum size of 128 characters.")
  } else if(isNaN(len)) { // Checks and throws error if input isn't a number
    alert("Please enter a real number.")
  } else {
    //alert("reached promp return")
    return len
  }
}

function passwordGen(low,up,num,sp,len){
  var lStr = "abcdefghijklmnopqrstuvwxyz"
  var uStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var nStr = "1234567890"
  var sStr = "!@#$%^&*()?"
  var numDiv = low + up + num + sp
  var rtn = []

  //Each loop adds a proportionate amount of random characters that fill desired criterias
  if(low){
    for(var i = 0; i < Math.floor(len/numDiv); i++){
      rtn.push(lStr.charAt(Math.floor(Math.random()*(26)))) //choose+add rand char from appropriate "array"
    }
  }

  if(up){
    for(var i = 0; i < Math.floor(len/numDiv); i++){
      rtn.push(uStr.charAt(Math.floor(Math.random()*(26))))
    }
  }

  if(num){
    for(var i = 0; i < Math.floor(len/numDiv); i++){
      rtn.push(nStr.charAt(Math.floor(Math.random()*(10))))
    }
  }

  if(sp){
    for(var i = 0; i < (Math.floor(len/numDiv)+(len%numDiv)); i++){
      rtn.push(sStr.charAt(Math.floor(Math.random()*(11))))
    }
  }
  //alert(rtn)
  //console.log("Preshuffle: " + rtn)

  return shuffleStr(rtn)
  
}

function shuffleStr(arr){
  var len = arr.length

  //Shuffle the array with required elements by swapping elements
  for(var i = 0; i < len; i++){
    var randIndex = Math.floor(Math.random()*(len))
    var swap1 = arr[i]
    var swap2 = arr[randIndex]
    console.log(swap1,swap2)
    arr[i] = swap2
    arr[randIndex] = swap1
  }

  var rtn = ""

  //Convert array into a string before outputing
  for(var i = 0; i < len; i++){
    rtn += arr[i]
  }
  //alert("shuffled array: " + rtn)
  //console.log("shuffled array: " + rtn)
  return rtn
}

