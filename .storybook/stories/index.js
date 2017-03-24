import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styled, { injectGlobal } from 'styled-components';

import Row from 'Row';
import Col from 'Col';

injectGlobal`
  body {
    background:  #2196f3;
    padding: 16px;
  }
`;

const CustomRow = styled(Col) `
  color: #fff;
  background: #e91e63;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

storiesOf('Col & Row', module)
  .add('Basic example', () => (
    <Row>
      <CustomRow span={8}>
        Span 8
      </CustomRow>
      <CustomRow span={2} offset={1}>
        Span 2 offset 1
      </CustomRow>
    </Row>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));
