<P>Output von IP Config unter Windows:    </P>

<?php
// Beispiel: 'dir' in CMD ausführen
exec('cmd.exe /c ipconfig', $output);
//exec('cmd.exe /c cd C:\Users\noah\Desktop\OPEN-TERMINAL-WITH-PHP-JS-HTML & node testnode.js', $output);

echo '<pre>' . htmlspecialchars(implode("\n", $output)) . '</pre>';

//Momentane ausführung besser über node js, so wird auch
//ein CMD window geöffnet
?>