const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'assets', 'icon.png'),  // ← Cambia questa riga
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true
    },
    title: 'Claude'
  });

  // Carica claude.ai
  mainWindow.loadURL('https://claude.ai');

  // Apri link esterni nel browser predefinito
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https://claude.ai') || url.startsWith('https://accounts.anthropic.com')) {
      return { action: 'allow' };
    }
    shell.openExternal(url);
    return { action: 'deny' };
  });

  // Gestisci la navigazione
  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('https://claude.ai') && !url.startsWith('https://accounts.anthropic.com')) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});