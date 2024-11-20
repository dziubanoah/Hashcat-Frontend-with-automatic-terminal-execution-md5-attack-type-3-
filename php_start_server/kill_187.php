<?php
exec('cmd.exe /c cd ..\ && taskkill /F /FI "IMAGENAME eq node.exe" /FI "WINDOWTITLE eq testnode.js"', $output);
exec('powershell.exe -Command "Test-NetConnection -ComputerName localhost -Port 187"', $output);
echo '<pre>' . htmlspecialchars(implode("\n", $output)) . '</pre>';
?>