const http = require("http");
const fs = require('fs')

http.createServer((req, res) => {
    let body = "";
    req.on("data", chunk => body += chunk); //empfängt die Daten
    req.on("end", () => {
        let Length = body; 
        console.log(Length);
if (Length == 1) {
    let LengthValue = "?a";
    fs.writeFile('PWLength.txt', LengthValue, (err) => {

        if (err) throw err;
    })
}
if (Length == 2) {
    let LengthValue = "?a?a";
    fs.writeFile('PWLength.txt', LengthValue, (err) => {

        if (err) throw err;
    })
}
if (Length == 3) {
    let LengthValue = "?a?a?a";
    fs.writeFile('PWLength.txt', LengthValue, (err) => {

        if (err) throw err;
    })
}
if (Length == 4) {
    let LengthValue = "?a?a?a?a";
    fs.writeFile('PWLength.txt', LengthValue, (err) => {

        if (err) throw err;
    })
}
if (Length == 5) {
    let LengthValue = "?a?a?a?a?a";
    fs.writeFile('PWLength.txt', LengthValue, (err) => {

        if (err) throw err;
    })
}
    })
}).listen(189);

//Weitera aktion zur verschlüsselung: