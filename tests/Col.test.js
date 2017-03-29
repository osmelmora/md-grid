import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import styleSheet from 'styled-components/lib/models/StyleSheet';

import { selectCssOutput } from './utils';

import Col from '../src/Col';

const testCase = (description, props) => {
  describe(description, () => {
    it('renders as expected', () => {
      const tree = renderer.create(
        <Col {...props}>Col</Col>
      );
      expect(tree).toMatchSnapshot();
    });

    it('renders the proper styles', () => {
      shallow(<Col {...props}>Col</Col>);
      const styles = selectCssOutput(styleSheet);

      expect(styles).toMatchSnapshot();
    });
  });
};

describe('<Col />', () => {
  [
    'span', 'xsSpan', 'smSpan', 'mdSpan', 'lgSpan', 'xlSpan',
    'offset', 'xsOffset', 'smOffset', 'mdOffset', 'lgOffset', 'xlOffset',
  ].forEach((prop) => testCase(prop, { [prop]: 4 }));
});
