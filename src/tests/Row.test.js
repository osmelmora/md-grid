import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import styleSheet from 'styled-components/lib/models/StyleSheet';

import { selectCssOutput } from './utils';

import Row from '../Row';

const testCase = (description, props) => {
  describe(description, () => {
    it('renders as expected', () => {
      const tree = renderer.create(
        <Row {...props}>Row</Row>
      );
      expect(tree).toMatchSnapshot();
    });

    it('renders the proper styles', () => {
      shallow(<Row {...props}>Row</Row>);
      const styles = selectCssOutput(styleSheet);

      expect(styles).toMatchSnapshot();
    });
  });
};

describe('<Row />', () => {
  testCase('centered row', { centered: true });
  testCase('container row', { container: true });
  // Justify
  ['start', 'end', 'center', 'between', 'around'].forEach((justify) => (
    testCase(`justify ${justify}`, { justify })
  ));
  // Align
  ['start', 'end', 'center', 'stretch', 'baseline'].forEach((align) => (
    testCase(`align ${align}`, { align })
  ));
  testCase('reversed row', { reverse: true });
});
