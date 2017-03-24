import Grid from '../index';
import Col from '../Col';
import Row from '../Row';

describe('<Grid />', () => {
  it('export the rightful components', () => {
    expect(Grid.Col).toEqual(Col); // eslint-disable-line import/no-named-as-default-member
    expect(Grid.Row).toEqual(Row); // eslint-disable-line import/no-named-as-default-member
  });
});
