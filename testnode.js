const http = require("http");
const fs = require('fs')

http.createServer((req, res) => {
    let body = "";
    req.on("data", chunk => body += chunk); //empfängt die Daten
    req.on("end", () => {
        let value = body; //deklariert body als value

    fs.writeFile('output.txt', value, (err) => {

    if (err) throw err;
})
function stateChange(newState) {
    setTimeout(function () {
        if (newState == -1) {
            fs.truncate('output.txt', 0, function(){console.log('done')})
        }
    }, 5000);
}

    })
}).listen(187);

//Weitera aktion zur verschlüsselung: