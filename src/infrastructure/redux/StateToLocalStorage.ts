import { flashMessage } from '@/app/FlashMessage/FlashMessage';
import { ElectronSettingService } from '@/electron/SettingsService';

export const loadStateFromElectronSettings = () => {
  const serializedState = ElectronSettingService.get('state');
  if (serializedState === null) {
    return undefined;
  }
  return serializedState;
};

export const saveStateToElectronSettings = (state) => {
  try {
    ElectronSettingService.set('state', state);
  } catch (err) {
    flashMessage.error('Error Loading Electron State');
  }
};
