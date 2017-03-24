import styled, { css } from 'styled-components';
import media from './media';

const BREAKPOINT_SYSTEM = {
  xsmall: { key: 'xs', gutter: 16, cols: 4 },
  small: { key: 'sm', gutter: 16, cols: 8 },
  medium: { key: 'md', gutter: 24, cols: 12 },
  large: { key: 'lg', gutter: 24, cols: 12 },
  xlarge: { key: 'xl', gutter: 24, cols: 12 },
};

const colOffset = (offset, cols = 12) => {
  const margin = (100 / cols) * offset;

  return `margin-left: ${margin}%;`;
};

const colMargin = (offset, mediaOffset, cols = 12, gutter = 24) => {
  const halfGutter = gutter / 2;

  if (mediaOffset) {
    return `
      margin-right: ${halfGutter}px;
      ${colOffset(mediaOffset, cols)}
    `;
  } else if (offset) {
    return `
      margin-right: ${halfGutter}px;
      ${colOffset(offset, 12)}
    `;
  }

  return `
    margin-left: ${halfGutter}px;
    margin-right: ${halfGutter}px;
  `;
};

const colWidth = (span, cols = 12, gutter = 24) => {
  if (!span) return '';
  const width = (100 / cols) * span;

  return `
    flex-basis: calc(${width}% - ${gutter}px);
  `;
};

const breakpointsStyle = (props) => (
  Object.keys(BREAKPOINT_SYSTEM).map((size) => {
    const { key, gutter, cols } = BREAKPOINT_SYSTEM[size];
    const mediaQuery = media[size];

    return css`
      ${
        mediaQuery`
          ${colMargin(props.offset, props[`${key}Offset`], cols, gutter)}

          ${colWidth(props[`${key}Span`], cols, gutter)}
        `
      }
    `;
  })
);

const Col = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;

  ${({ span }) => colWidth(span)}

  ${(props) => breakpointsStyle(props)}
`;

export default Col;
