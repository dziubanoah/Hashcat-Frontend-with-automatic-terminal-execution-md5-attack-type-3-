const { exec } = require('child_process');
const { app, BrowserWindow } = require('electron');

// erstellt das fenster für die .exe
function createWindow() {
  const win = new BrowserWindow({
    width: 1300,              
    height: 700,             
    webPreferences: {
      nodeIntegration: true
    }
  });

  // der "Haupt GUI" für die Anwendung
  win.loadFile('main.html');
}


app.whenReady().then(createWindow);

// Schließt die app, sodass kein Hintergrundprozess mehr da ist, wenn alle fenster zu sind.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
//exec('start "testnode.js" cmd /k "node testnode.js" && start "ValueLengthnode.js" cmd /k "node ValueLengthnode.js" && start "console-execute.js" cmd /k "node console-execute.js"');

//Startet jedes Script einzel. Eine Befehlskette ist aus irgend welchen gründen nnicht möglich, desswegen 3 execute commands
exec('start cmd.exe /K "dir && cd resources && cd app && node testnode.js && start "testnode.js"');
exec('start cmd.exe /k "dir && cd resources && cd app && node ValueLengthnode.js && start "ValueLengthnode.js"');
exec('start cmd.exe /k "dir && cd resources && cd app && node console-execute.js && start "console-execute.js"');

//start "testnode.js" cmd /k "node testnode.js" && start "ValueLengthnode.js" cmd /k "node ValueLengthnode.js" && start "console-execute.js" cmd /k "node console-execute.js"