'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteral(['\n      ', '\n    '], ['\n      ', '\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n          ', '\n\n          ', '\n        '], ['\n          ', '\n\n          ', '\n        ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  flex: 0 0 auto;\n\n  ', '\n\n  ', '\n'], ['\n  box-sizing: border-box;\n  flex: 0 0 auto;\n\n  ', '\n\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = require('./media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BREAKPOINT_SYSTEM = {
  xsmall: { key: 'xs', gutter: 16, cols: 4 },
  small: { key: 'sm', gutter: 16, cols: 8 },
  medium: { key: 'md', gutter: 24, cols: 12 },
  large: { key: 'lg', gutter: 24, cols: 12 },
  xlarge: { key: 'xl', gutter: 24, cols: 12 }
};

var colOffset = function colOffset(offset) {
  var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;

  var margin = 100 / cols * offset;

  return 'margin-left: ' + margin + '%;';
};

var colMargin = function colMargin(offset, mediaOffset) {
  var cols = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
  var gutter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 24;

  var halfGutter = gutter / 2;

  if (mediaOffset) {
    return '\n      margin-right: ' + halfGutter + 'px;\n      ' + colOffset(mediaOffset, cols) + '\n    ';
  } else if (offset) {
    return '\n      margin-right: ' + halfGutter + 'px;\n      ' + colOffset(offset, 12) + '\n    ';
  }

  return '\n    margin-left: ' + halfGutter + 'px;\n    margin-right: ' + halfGutter + 'px;\n  ';
};

var colWidth = function colWidth(span) {
  var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;
  var gutter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 24;

  if (!span) return '';
  var width = 100 / cols * span;

  return '\n    flex-basis: calc(' + width + '% - ' + gutter + 'px);\n  ';
};

var breakpointsStyle = function breakpointsStyle(props) {
  return Object.keys(BREAKPOINT_SYSTEM).map(function (size) {
    var _BREAKPOINT_SYSTEM$si = BREAKPOINT_SYSTEM[size];
    var key = _BREAKPOINT_SYSTEM$si.key;
    var gutter = _BREAKPOINT_SYSTEM$si.gutter;
    var cols = _BREAKPOINT_SYSTEM$si.cols;

    var mediaQuery = _media2.default[size];

    return (0, _styledComponents.css)(_templateObject, mediaQuery(_templateObject2, colMargin(props.offset, props[key + 'Offset'], cols, gutter), colWidth(props[key + 'Span'], cols, gutter)));
  });
};

var Col = _styledComponents2.default.div(_templateObject3, function (_ref) {
  var span = _ref.span;
  return colWidth(span);
}, function (props) {
  return breakpointsStyle(props);
});

exports.default = Col;