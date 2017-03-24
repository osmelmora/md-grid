'use strict';

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _Col = require('../Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('../Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Grid />', function () {
  it('export the rightful components', function () {
    expect(_index2.default.Col).toEqual(_Col2.default); // eslint-disable-line import/no-named-as-default-member
    expect(_index2.default.Row).toEqual(_Row2.default); // eslint-disable-line import/no-named-as-default-member
  });
});