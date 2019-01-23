import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import { autoUpdater } from 'electron-updater';
import * as merge from 'lodash.merge';
import { join } from 'path';
import { format } from 'url';

import { IS_DEV_ENV } from '@/environment';
import { ElectronSettingService } from '@/main/SettingsService';

export class WindowManager {
  private readonly DEFAULT_OPTIONS: BrowserWindowConstructorOptions = {
    title: 'Traverse',
    width: 600,
    height: 600,
    titleBarStyle: 'hiddenInset',
    resizable: true,
    backgroundColor: '#22292f',
    minHeight: 400,
    minWidth: 500,
    webPreferences: {
      nodeIntegration: true,
    },
  };
  private windows: Map<string, BrowserWindow> = new Map();
  private settingsWindow: BrowserWindow | null = null;

  private mainWindowUrl = format({
    pathname: join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  });

  constructor() {
    autoUpdater.checkForUpdatesAndNotify();
  }

  reload(): void {
    const window = BrowserWindow.getFocusedWindow();
    if (window) {
      window.loadURL(this.mainWindowUrl);
    }
  }

  reloadAll() {
    this.windows.forEach((window: BrowserWindow, id: string) => {
      window.loadURL(this.mainWindowUrl);
    });
  }

  focusOrCreate(): void {
    const window = this.lastWindow;
    if (window) {
      window.focus();
    } else {
      this.createMainWindow();
    }
  }

  createMainWindow(options: BrowserWindowConstructorOptions = {}): BrowserWindow {
    const baseOptions = this.DEFAULT_OPTIONS;

    if (this.lastWindow) {
      baseOptions.x = this.lastWindow.getBounds().x + 20;
      baseOptions.y = this.lastWindow.getBounds().y;
    }

    const windowOptions = merge(baseOptions, this.DEFAULT_OPTIONS, options);
    const window = new BrowserWindow(windowOptions);

    if (IS_DEV_ENV) {
      console.log('is development environment');
      window.webContents.openDevTools();
    }

    const id = `window-${window.id}`;
    const settingsId = `windows.${id}`;
    const existingSettings = ElectronSettingService.get(settingsId);
    if (existingSettings) {
      window.setSize(existingSettings.size[0], existingSettings.size[1]);
      window.setPosition(existingSettings.position[0], existingSettings.position[1]);
    }

    window.on('closed', () => {
      this.windows.delete(id);
      ElectronSettingService.delete(settingsId);

      if (this.windows.size === 0 && this.settingsWindow) {
        this.settingsWindow.close();
      }
    });

    window.on('moved', () => {
      ElectronSettingService.set(settingsId, {
        size: window.getSize(),
        position: window.getPosition(),
      });
    });

    window.loadURL(this.mainWindowUrl);

    this.windows.set(id, window);

    return window;
  }

  private get windowKeys(): string[] {
    const ids = [];
    for (const id of Array.from(this.windows.keys())) {
      ids.push(id);
    }
    return ids;
  }

  private get lastWindow(): BrowserWindow | null {
    return this.windows.get(this.windowKeys[this.windowKeys.length - 1]);
  }

}
