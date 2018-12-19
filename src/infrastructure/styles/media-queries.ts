import { css, DefaultTheme, ThemedCssFunction } from 'styled-components';

import * as variables from '../data/variables.json';

interface ScreenSizes {
  [size: string]: number;
}

type mqFuncType = (arg, ...args) => ThemedCssFunction<DefaultTheme>;

interface ScreenSizesFunctions {
  [size: string]: mqFuncType|any;
}

const mqFunc: mqFuncType = (label: string) => {
  return (arg, ...args) => {
    return css`
        @media ${label} {
          ${css(arg, ...args)}
        }
      `;
  };
};

function mediaQueries(screenSizes: ScreenSizes): ScreenSizesFunctions {
  const mq = {};

  for (const screen in screenSizes) {
    if (screenSizes.hasOwnProperty(screen)) {
      const pixelSize = screenSizes[screen];
      mq[screen] = mqFunc(`screen and (min-width: ${pixelSize + 1}px)`);
      mq[screen + 'Only'] = mqFunc(`screen and (max-width: ${pixelSize}px)`);
    }
  }

  return mq;
}

export const screens: ScreenSizesFunctions = mediaQueries(variables.screenSizes);

console.log(
  screens.smallOnly`background-color:red`,
);
