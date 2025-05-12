let pw = document.getElementById("pw");
let submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    giveValue();
});

function giveValue() {
    // hier wird die Passwortlänge festgelegt, damit die HashCat Befehlssyntax korrekt gebildet werden kann.
    let pwData_Laenge = pw.value.length
    console.log(pwData_Laenge);
    let pwData_laenge_for_hashcat = "?a".repeat(pwData_Laenge);
    console.log(pwData_laenge_for_hashcat);

    let pwData = pw.value;
    let pwData_md5 = CryptoJS.MD5(pwData).toString();
    console.log(pwData_md5);

    fetch("http://localhost:8080", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",  // Header für JSON-Daten
        },
        body: JSON.stringify({
            Passwort_verschlüsselt: pwData_md5,
            Passwort_Laenge_for_hashcat: pwData_laenge_for_hashcat
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error: ", error));
    console.log("DIe Payload ist: " + pwData);
}
