const screens = {
  small: 576,
  medium: 768,
  large: 992,
  xlarge: 1200,
  xxlarge: 1400,
};

export const mediaQueries = () => {
  const mq = {};

  for (const screen in screens) {
    if (screens.hasOwnProperty(screen)) {
      const pixelSize = screens[screen];
      mq[screen] = `screen and (min-width: ${pixelSize + 1}px)`;
      mq[screen + 'Only'] = `screen and (max-width: ${pixelSize}px)`;
    }
  }

  return mq;
};
