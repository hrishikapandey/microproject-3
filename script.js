let outputScreen = document.getElementById("Display");
function appendCharacter(num){
outputScreen.value += num;
}
function Equalbtn(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("invalid")
    }
}
function Resetbtn(){
    outputScreen.value = '0';
}
function Delete(){
    outputScreen.value = outputScreen.value.slice(0 ,-1);
}
  
 script.js
