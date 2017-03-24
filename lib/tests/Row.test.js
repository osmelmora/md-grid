'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _StyleSheet = require('styled-components/lib/models/StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _utils = require('./utils');

var _Row = require('../Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testCase = function testCase(description, props) {
  describe(description, function () {
    it('renders as expected', function () {
      var tree = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Row2.default,
        props,
        'Row'
      ));
      expect(tree).toMatchSnapshot();
    });

    it('renders the proper styles', function () {
      (0, _enzyme.shallow)(_react2.default.createElement(
        _Row2.default,
        props,
        'Row'
      ));
      var styles = (0, _utils.selectCssOutput)(_StyleSheet2.default);

      expect(styles).toMatchSnapshot();
    });
  });
};

describe('<Row />', function () {
  testCase('centered row', { centered: true });
  testCase('container row', { container: true });
  // Justify
  ['start', 'end', 'center', 'between', 'around'].forEach(function (justify) {
    return testCase('justify ' + justify, { justify: justify });
  });
  // Align
  ['start', 'end', 'center', 'stretch', 'baseline'].forEach(function (align) {
    return testCase('align ' + align, { align: align });
  });
  testCase('reversed row', { reverse: true });
});