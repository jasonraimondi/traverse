import { mediaQueries, ScreenSizesFunctions } from '@/infrastructure/styles/media-queries';

class Theme {
  colors = require('@/infrastructure/data/colors.json');
  screens = require('@/infrastructure/data/screens.json');
  mediaQuery: ScreenSizesFunctions = mediaQueries(this.screens);
}

export const theme = new Theme();
