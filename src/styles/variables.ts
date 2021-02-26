export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const device = {
  mobileS: `(max-width: ${size.mobileM}px)`,
  mobileM: `(max-width: ${size.mobileL}px)`,
  mobileL: `(max-width: ${size.tablet}px)`,
  tablet: `(max-width: ${size.laptop}px)`,
  laptop: `(max-width: ${size.laptopL}px)`,
  laptopL: `(max-width: ${size.desktop}px)`,
};

export const spacing = {
  small: "10px",
  regular: "20px",
  large: "40px",
  extraLarge: "60px",
};

export enum TypographySize {
  small,
  regular,
  large,
  extraLarge,
}

export const typography = (size: TypographySize) => {
  let pixelSize: number;

  switch (size) {
    case TypographySize.small:
      pixelSize = 12;
      break;
    case TypographySize.regular:
      pixelSize = 16;
      break;
    case TypographySize.large:
      pixelSize = 24;
      break;
    case TypographySize.extraLarge:
      pixelSize = 32;
      break;
  }

  return `font-size:${pixelSize}px;`;
};
