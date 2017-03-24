import { css } from 'styled-components';

const sizes = {
  xlarge: { value: 1920, media: 'min' },
  large: { value: 1280 + 1, media: 'min' },
  medium: { value: 1280, media: 'max' },
  small: { value: 960, media: 'max' },
  xsmall: { value: 600, media: 'max' },
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const breakpoint = sizes[label];
  const emSize = breakpoint.value / 16;
  const mediaType = breakpoint.media;

  accumulator[label] = (...args) => // eslint-disable-line no-param-reassign
    css`@media (${mediaType}-width: ${emSize}em) {
      ${css(...args)}
    }`;

  return accumulator;
}, {});

export default media;
