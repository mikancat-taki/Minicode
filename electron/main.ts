import { app, BrowserWindow, Menu } from 'electron';
import * as path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:3000');
  } else {
    win.loadFile(path.join(__dirname, '../renderer/index.html'));
  }

  const menu = Menu.buildFromTemplate([
    { label: 'ファイル', submenu: [{ role: 'quit', label: '終了' }] },
    { label: '表示', submenu: [{ role: 'toggledevtools', label: '開発者ツール' }] }
  ]);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
