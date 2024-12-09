//starter für electron application

const { exec } = require('child_process');
const { app, BrowserWindow } = require('electron');

// Creates the main window
function createWindow() {
  const win = new BrowserWindow({
    width: 1300,              
    height: 700,             
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Loads HTML file into the window
  win.loadFile('main.html');
}

// Calls createWindow() when the app is ready
app.whenReady().then(createWindow);

// Quits the app when all windows are closed (Windows & Linux)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
exec('start "testnode.js" cmd /k "node testnode.js" && start "ValueLengthnode.js" cmd /k "node ValueLengthnode.js" && start "console-execute.js" cmd /k "node console-execute.js"');

//start "testnode.js" cmd /k "node testnode.js" && start "ValueLengthnode.js" cmd /k "node ValueLengthnode.js" && start "console-execute.js" cmd /k "node console-execute.js"