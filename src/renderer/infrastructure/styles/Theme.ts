import { mediaQueries, ScreenSizesFunctions } from '@/renderer/infrastructure/styles/MediaQueries';

class Theme {
  readonly colors = require('@/data/colors.json');
  readonly screens = require('@/data/screens.json');
  readonly mediaQuery: ScreenSizesFunctions = mediaQueries(this.screens);
  readonly sizes = {
    sidebarWidth: 140,
    topbarHeight: 22,
    flashMessageHeight: 22 * 2,
    bottomNavHeight: 40,
    appDragHeight: 22,
  };
}

export const themeConfig = new Theme();
