// initialize the variables
var lowerArr = ["a", "b", "c", "d", "e","f","g","h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperArr = ["A", "B", "C", "D", "E","F","G","H", "I", "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialArr = ["\!", "\"", "\#", "\$","\%","\&","\'","\(","\)","\*","\+","\,","\-","\.","\/","\:","\;","\<","\=","\>","\?","\@","\[","\\","\]","\^","\_","\`","\{","\|","\}","\~"];
var finalArr;
var passGenerated = "";
var passLength;
var lowerCase;
var upperCase;
var numberCase;
var specialCase;
var Alertbx = document.getElementById("Alertbx");
var Messbx = document.getElementById("Messbx");

// take control of generate password button and link the event handler function 
var generateBtn = document.querySelector("#generateBtn");
generateBtn.addEventListener("click", writePassword);

// take control of copy button and link the event handler function  
document.getElementById('copyButn').onclick = function() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  Messbx.innerHTML = "Password copied!";
  Alertbx.innerHTML="";
};


function writePassword() {
  // initialize the arraylist based on user-selected criteria
  finalArr = [];
  if (numberCase.checked) finalArr = finalArr.concat(numberArr);
  if (specialCase.checked) finalArr = finalArr.concat(specialArr);
  if (upperCase.checked) finalArr = finalArr.concat(upperArr);
  if (lowerCase.checked) finalArr = finalArr.concat(lowerArr);

  passGenerated="";
  // random password is being generated
  for(i=0;i<passLength;i++) 
    passGenerated += finalArr[Math.floor(Math.random()*finalArr.length)];
  
  // generated password to be shown in textarea
  var passwordText = document.querySelector("#password");
  passwordText.value = passGenerated;
  Alertbx.innerHTML="";
  Messbx.innerHTML = "";
}

function submitCriteria(){
      // capturing the password criteria
      passLength = !isNaN(document.getElementById('passLength').value)?Number(document.getElementById('passLength').value):0;
      lowerCase = document.getElementById("lowerCase");
      upperCase = document.getElementById('upperCase');
      numberCase = document.getElementById('numberCase');
      specialCase = document.getElementById('specialCase');

      Alertbx.innerHTML = "";
      Messbx.innerHTML = "";
      // validation of password criteria
      if (passLength=="" || passLength < 8 || passLength > 128) {
        Alertbx.innerHTML = 'Please select a number in range';
        return;
      } else if(!(lowerCase.checked || upperCase.checked || numberCase.checked || specialCase.checked)){
        Alertbx.innerHTML += 'Please select at least one checkbox';
        return;
      } else Alertbx.innerHTML ="Criteria Saved, now please &lt; Generate Password &gt;";
}
