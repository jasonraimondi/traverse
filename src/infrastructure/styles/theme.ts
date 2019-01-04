import { mediaQueries, ScreenSizesFunctions } from '@/infrastructure/styles/media-queries';

class Theme {
  readonly colors = require('@/infrastructure/data/colors.json');
  readonly screens = require('@/infrastructure/data/screens.json');
  readonly mediaQuery: ScreenSizesFunctions = mediaQueries(this.screens);
  readonly sidebarWidth: '140px';
}

export const theme = new Theme();
