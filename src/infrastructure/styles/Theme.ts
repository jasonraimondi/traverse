import { mediaQueries, ScreenSizesFunctions } from '@/infrastructure/styles/MediaQueries';

class Theme {
  readonly colors = require('@/infrastructure/data/colors.json');
  readonly screens = require('@/infrastructure/data/screens.json');
  readonly mediaQuery: ScreenSizesFunctions = mediaQueries(this.screens);
  readonly sizes = {
    sidebarWidth: '140px',
    topbarHeight: '43px',
    bottomNavHeight: '40px',
  };
}

export const themeConfig = new Theme();
