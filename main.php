<P>Output von IP Config unter Windows:    </P>

<?php
// Beispiel: 'dir' in CMD ausführen
exec('cmd.exe /c ipconfig', $output);

    echo implode("\n", $output); // Ausgabe des Befehls
?>