export const size = {
    mobile: `480px`,
    tablet: `768px`,
    desktop: `1280px`,
  };
  
  export const device = {
    mobile: `@media screen and (min-width: ${size.mobile})`,
    tablet: `@media screen and (min-width: ${size.tablet})`,
    desktop: `@media screen and (min-width: ${size.desktop})`,
    retina: `@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dpx)`,
  };
  