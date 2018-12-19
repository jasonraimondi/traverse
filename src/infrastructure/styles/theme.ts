import { mediaQueries, ScreenSizesFunctions } from '@/infrastructure/styles/media-queries';

class Theme {
  public colors = require('@/infrastructure/data/colors.json');
  // screens: ScreenSizesFunctions = mediaQueries(s)
  public screens = require('@/infrastructure/data/screens.json');
  public mediaQuery: ScreenSizesFunctions = mediaQueries(this.screens);
}

export default new Theme();
