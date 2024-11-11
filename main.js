let submit = document.getElementById("Input_Submit");
let Passwort = document.getElementById("Input_PW");

submit.addEventListener("click", function(){
    let Value = Passwort.value;
    window.alert(Value)
    openCMD;
});
function openCMD() {
    var oShell = new ActiveXObject("WScript.Shell");
    oShell.Run("cmd.exe /k dir");
  }