interface IMediaQuery { [size: string]: number; }

export function mediaQueries(screenSizes: IMediaQuery): IMediaQuery {
  const mq = {};

  for (const screen in screenSizes) {
    if (screenSizes.hasOwnProperty(screen)) {
      const pixelSize = screenSizes[screen];
      mq[screen] = `screen and (min-width: ${pixelSize + 1}px)`;
      mq[screen + 'Only'] = `screen and (max-width: ${pixelSize}px)`;
    }
  }

  return mq;
}
