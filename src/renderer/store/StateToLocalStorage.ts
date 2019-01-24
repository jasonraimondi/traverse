import { ElectronSettingService } from '@/main/SettingsService';
import { flashMessage } from '@/renderer/infrastructure/services/FlashMessage';

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
