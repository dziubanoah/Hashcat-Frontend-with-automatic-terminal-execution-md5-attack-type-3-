<?php
exec('cmd.exe /c cd ..\ && start "testnode.js" node testnode.js', $output);
//exec('powershell.exe -Command "Test-NetConnection -ComputerName localhost -Port 187"', $output);
echo '<pre>' . htmlspecialchars(implode("\n", $output)) . '</pre>';
?>