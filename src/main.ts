import { app, Menu } from 'electron';

import { fileMenuTemplate } from '@/electron/MainMenu';
import { WindowManager } from '@/electron/WindowManager';

import { installExtensions, IS_DEV_ENV, IS_MAC_OS } from '@/environment';

export const windowManager: WindowManager = new WindowManager();

export function openMainWindow() {
  windowManager.createMainWindow();
}
export function reloadAllWindows() {
  windowManager.reloadAll();
}

app.on('ready', () => {
  Menu.setApplicationMenu(Menu.buildFromTemplate(fileMenuTemplate));
  openMainWindow();
  if (IS_DEV_ENV) {
    installExtensions();
  }
});

app.on('activate', () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (IS_MAC_OS) {
    windowManager.focusOrCreate();
  }
});

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (!IS_MAC_OS) {
    app.quit();
  }
});
