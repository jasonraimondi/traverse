declare var env: {
  SEGMENT_KEY: string,
};

import Analytics from 'analytics-node';
import { app, ipcMain, Menu } from 'electron';
import * as uuidv4 from 'uuid/v4';

import { installExtensions, IS_DEV_ENV, IS_MAC_OS } from '@/environment';
import { ElectronSettingService } from '@/main/SettingsService';
import { WindowManager } from '@/main/WindowManager';
import { TRACK } from '@/renderer/infrastructure/analytics/AnalyticsTracking';

const windowManager: WindowManager = new WindowManager();

let userId: string;
let analytics: Analytics;

export function openMainWindow() {
  windowManager.createMainWindow();
}

export function reloadAllWindows() {
  windowManager.reloadAll();
}

app.on('ready', async () => {
  userId = getUserId();
  const { fileMenuTemplate } = await import('@/main/MainMenu');
  Menu.setApplicationMenu(Menu.buildFromTemplate(fileMenuTemplate));
  openMainWindow();
  if (IS_DEV_ENV) {
    installExtensions();
  } else {
    analytics = new Analytics(env.SEGMENT_KEY);
    analytics.identify({userId});
    trackEvent(TRACK.BootApp);
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

ipcMain.on('track-event', (event, eventName: string, meta?: {}) => {
  trackEvent(eventName, meta);
});

function getUserId(): string {
  let newId;
  if (ElectronSettingService.has('userId')) {
    newId = ElectronSettingService.get('userId');
  } else {
    newId = uuidv4();
    ElectronSettingService.set('userId', newId);
  }
  return IS_DEV_ENV ? 'dev' : newId;
}

function trackEvent(eventName: string, meta?: {}) {
  if (IS_DEV_ENV) {
    return;
  }
  analytics.track({
    event: eventName,
    userId: getUserId(),
    ...(meta ? {properties: meta} : {}),
  });
}
