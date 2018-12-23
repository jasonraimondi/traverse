import { GOOGLE_ANALYTICS_ID } from '@/constants';
import * as ua from 'universal-analytics';
import * as uuid from 'uuid/v4';

import { ElectronSettingService } from '@/infrastructure/electron/settingsService';

export function initializeAppUserId() {
  const appUserId = ElectronSettingService.get('appUserId') || uuid();
  ElectronSettingService.set('appUserId', appUserId);
}

export function trackSetLanguage(language: string) {
  trackEvent('trending-repos', 'set-language', 'language', language);
}

export function trackCreateWindow() {
  trackEvent('application', 'create-window');
}

function trackEvent(category, action, label = null, value = null) {
  const appUserId = ElectronSettingService.get('appUserId') || 'unknown';
  const usr = ua(GOOGLE_ANALYTICS_ID, appUserId);
  const params = {
    ec: category,
    ea: action,
    el: label,
    ev: value,
  };
  usr.event(params).send();
}
