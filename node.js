const { exec } = require('child_process');

// Beispiel-Befehl: cmd.exe öffnen und "dir" ausführen, um den Inhalt des aktuellen Verzeichnisses anzuzeigen
exec('cmd.exe /c dir', (error, stdout, stderr) => {
  if (error) {
    console.error(`Fehler: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
