import { PropTypes } from 'react';
import styled from 'styled-components';

const containerStyle = `
  width: 100%;
  max-width: 1200px;
`;
const centeredStyle = 'margin: 0 auto;';

const baseProps = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
};

const JUSTIFY_CONTENT = {
  ...baseProps,
  between: 'space-between',
  around: 'space-around',
};

const ALIGN_ITEMS = {
  ...baseProps,
  stretch: 'stretch',
  baseline: 'baseline',
};

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;

  /* Reverse */
  ${({ reverse }) => reverse ? 'flex-direction: reverse;' : ''}

  /* Container for main views */
  ${({ container }) => container ? containerStyle : ''}
  ${({ centered }) => centered ? centeredStyle : ''}

  /* Justify content, X axis aligment  */
  ${({ justify }) => `justify-content: ${JUSTIFY_CONTENT[justify]};`}
  /* Align items, Y axis */
  ${({ align }) => `align-items: ${ALIGN_ITEMS[align]};`}
`;

Row.defaultProps = {
  justify: 'start',
  align: 'start',
};

Row.propTypes = {
  reverse: PropTypes.bool,
  container: PropTypes.bool,
  centered: PropTypes.bool,
  justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
  align: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'baseline']),
};

export default Row;
