'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  flex: 0 1 auto;\n\n  /* Reverse */\n  ', '\n\n  /* Container for main views */\n  ', '\n  ', '\n\n  /* Justify content, X axis aligment  */\n  ', '\n  /* Align items, Y axis */\n  ', '\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  flex: 0 1 auto;\n\n  /* Reverse */\n  ', '\n\n  /* Container for main views */\n  ', '\n  ', '\n\n  /* Justify content, X axis aligment  */\n  ', '\n  /* Align items, Y axis */\n  ', '\n']);

var _react = require('react');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var containerStyle = '\n  width: 100%;\n  max-width: 1200px;\n';
var centeredStyle = 'margin: 0 auto;';

var baseProps = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end'
};

var JUSTIFY_CONTENT = _extends({}, baseProps, {
  between: 'space-between',
  around: 'space-around'
});

var ALIGN_ITEMS = _extends({}, baseProps, {
  stretch: 'stretch',
  baseline: 'baseline'
});

var Row = _styledComponents2.default.div(_templateObject, function (_ref) {
  var reverse = _ref.reverse;
  return reverse ? 'flex-direction: reverse;' : '';
}, function (_ref2) {
  var container = _ref2.container;
  return container ? containerStyle : '';
}, function (_ref3) {
  var centered = _ref3.centered;
  return centered ? centeredStyle : '';
}, function (_ref4) {
  var justify = _ref4.justify;
  return 'justify-content: ' + JUSTIFY_CONTENT[justify] + ';';
}, function (_ref5) {
  var align = _ref5.align;
  return 'align-items: ' + ALIGN_ITEMS[align] + ';';
});

Row.defaultProps = {
  justify: 'start',
  align: 'start'
};

Row.propTypes = {
  reverse: _react.PropTypes.bool,
  container: _react.PropTypes.bool,
  centered: _react.PropTypes.bool,
  justify: _react.PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
  align: _react.PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'baseline'])
};

exports.default = Row;