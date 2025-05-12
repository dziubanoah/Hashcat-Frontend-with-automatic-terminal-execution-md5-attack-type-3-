let pw = document.getElementById("pw");
let submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    giveValue();
});

function giveValue() {
    // hier wird die Passwortlänge festgelegt, damit die HashCat Befehlssyntax korrekt gebildet werden kann.
    let pwData_laenge_for_hashcat = "?u?a?a?a?a?a?a?s"
    console.log(pwData_laenge_for_hashcat);
    //Hier wird das eingegebene Passwort verschlüsselt.
    let pwData = pw.value;
    let pwData_md5 = CryptoJS.MD5(pwData).toString();
    console.log(pwData_md5);

    fetch("http://localhost:8080", { //verschickt die daten per fetch an den Node Server
        method: "POST",
        headers: {
            "Content-Type": "application/json",  // Header für JSON-Daten
        },
        body: JSON.stringify({ //Daten, die als JSON verschickt werden.
            Passwort_verschlüsselt: pwData_md5,
            Passwort_Laenge_for_hashcat: pwData_laenge_for_hashcat
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error: ", error));
    console.log("DIe Payload ist: " + pwData);
}
