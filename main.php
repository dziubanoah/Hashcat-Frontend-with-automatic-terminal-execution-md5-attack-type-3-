<P>Output von IP Config unter Windows:    </P>

<?php
// Beispiel: 'dir' in CMD ausführen
exec('cmd.exe /c ipconfig', $output);
exec('cmd.exe /c cd C:\Users\noah\Desktop\OPEN-TERMINAL-WITH-PHP-JS-HTML & node testnode.js', $output);

    echo implode("\n", $output); // Ausgabe des Befehls
?>