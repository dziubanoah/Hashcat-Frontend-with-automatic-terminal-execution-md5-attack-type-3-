const http = require("http");
const fs = require('fs')

http.createServer((req, res) => {
    let body = "";
    req.on("data", chunk => body += chunk); //empfängt die Daten
    req.on("end", () => {
        let Length = body; //deklariert body als value


    for (let i = 1; i <= Length; i++) {
        let LengthValue = "?a".repeat(i) + "o";
        window.alert(LengthValue);
    }

    fs.writeFile('PWLength.txt', LengthValue, (err) => {

    if (err) throw err;
})

    })
}).listen(189);

//Weitera aktion zur verschlüsselung: