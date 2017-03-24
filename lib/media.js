'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['@media (', '-width: ', 'em) {\n      ', '\n    }'], ['@media (', '-width: ', 'em) {\n      ', '\n    }']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sizes = {
  xlarge: { value: 1920, media: 'min' },
  large: { value: 1280 + 1, media: 'min' },
  medium: { value: 1280, media: 'max' },
  small: { value: 960, media: 'max' },
  xsmall: { value: 600, media: 'max' }
};

var media = Object.keys(sizes).reduce(function (accumulator, label) {
  var breakpoint = sizes[label];
  var emSize = breakpoint.value / 16;
  var mediaType = breakpoint.media;

  accumulator[label] = function () {
    return (// eslint-disable-line no-param-reassign
      (0, _styledComponents.css)(_templateObject, mediaType, emSize, _styledComponents.css.apply(undefined, arguments))
    );
  };

  return accumulator;
}, {});

exports.default = media;