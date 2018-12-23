import { app, BrowserWindow, ipcMain, Menu } from 'electron';
import { autoUpdater } from 'electron-updater';
import { join } from 'path';
import * as ua from 'universal-analytics';
import { format } from 'url';
import * as uuid from 'uuid/v4';

import { fileMenuTemplate } from '@/infrastructure/electron/mainMenu';
import { ElectronSettingService } from '@/infrastructure/electron/settingsService';

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    title: 'Traverse',
    height: 600,
    width: 600,
    titleBarStyle: 'hiddenInset',
    resizable: true,
    // backgroundColor: '#22292f',
  });

  const filePath = format({
    pathname: join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  });
  mainWindow.loadURL(filePath);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

app.on('ready', () => {
  Menu.setApplicationMenu(Menu.buildFromTemplate(fileMenuTemplate));
  createWindow();
  autoUpdater.checkForUpdatesAndNotify();
  initializeGoogleAnalytics();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  trackEvent('application', 'windows', 'close-all');
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

function initializeGoogleAnalytics() {
  let appUserId = ElectronSettingService.get('appUserId');

  if (!appUserId) {
    appUserId = uuid();
  }

  ElectronSettingService.set('appUserId', appUserId);
}

function trackEvent(category, action, label, value = null) {
  const appUserId = ElectronSettingService.get('appUserId');
  const usr = ua('UA-54092750-6', appUserId);
  const params = {
    ec: category,
    ea: action,
    el: label,
    ev: value,
  };
  usr.event(params).send();
}
