import { mediaQueries, ScreenSizesFunctions } from '@/renderer/infrastructure/styles/MediaQueries';

class Theme {
  readonly colors = require('@/data/colors.json');
  readonly screens = require('@/data/screens.json');
  readonly mediaQuery: ScreenSizesFunctions = mediaQueries(this.screens);
  readonly sizes = {
    sidebarWidth: '140px',
    topbarHeight: '43px',
    bottomNavHeight: '40px',
  };
}

export const themeConfig = new Theme();
