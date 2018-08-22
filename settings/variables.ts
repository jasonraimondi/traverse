const screens = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

export const mediaQueries = {
  small: `screen and (min-width: ${addPx(screens.sm, 1)})`,
  smallOnly: `screen and (max-width: ${screens.md})`,
  medium: `screen and (min-width: ${addPx(screens.md, 1)})`,
  mediumOnly: `screen and (min-width: ${addPx(screens.md, 1)}) and (max-width: ${screens.lg})`,
  large: `screen and (min-width: ${addPx(screens.lg, 1)})`,
  largeOnly: `screen and (min-width: ${addPx(screens.lg, 1)}) and (max-width: ${screens.xl})`,
  xlarge: `screen and (min-width: ${addPx(screens.xl, 1)})`,
  xlargeOnly: `screen and (min-width: ${addPx(screens.xl, 1)}) and (max-width: ${screens.xxl})`,
  xxlarge: `screen and (min-width: ${addPx(screens.xxl, 1)})`,
};

function addPx(a: string, b: number) {
  let num = Number(a.replace('px', ''));
  num += b;
  return num + 'px';
}
