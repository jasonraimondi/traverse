import ua from 'universal-analytics';
import * as uuid from 'uuid/v4';

import { ElectronSettingService } from '@/infrastructure/electron/settingsService';

export class AnalyticsTracker {
  constructor(
    private readonly analytics: ua.Visitor,
    private readonly googleAnalyticsId: string,
    private readonly appUserId: string,
  ) {}

  static initializeAppUserId() {
    let appUserId = ElectronSettingService.get('appUserId');

    if (!appUserId) {
      appUserId = uuid();
    }

    ElectronSettingService.set('appUserId', appUserId);
  }

  private trackEvent(category, action, label, value = null) {
    const usr = this.analytics(this.googleAnalyticsId, this.appUserId);
    const params = {
      ec: category,
      ea: action,
      el: label,
      ev: value,
    };
    usr.event(params).send();
  }
}
