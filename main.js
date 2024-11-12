let submit = document.getElementById("Input_Submit");
let Passwort = document.getElementById("Input_PW");

submit.addEventListener("click", function(){
    let Value = Passwort.value;
    window.alert(Value);
    one();
});

function one () {
const fs = require('fs')

// Data which will write in a file.
let data = "Learning how to write in a file."

// Write data in 'Output.txt' .
fs.writeFile('output.txt', data, (err) => {

    // In case of a error throw err.
    if (err) throw err;
})
    };