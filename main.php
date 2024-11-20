<?php
exec('cmd.exe /c dir', $output);
echo '<pre>' . htmlspecialchars(implode("\n", $output)) . '</pre>';
?>