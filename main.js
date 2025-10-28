const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  // あなたのWebアプリを表示
  win.loadFile('index.html'); // ← React/Viteなどの場合はdist内を指定
}

app.whenReady().then(createWindow);
