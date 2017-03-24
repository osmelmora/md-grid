"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var selectCssOutput = exports.selectCssOutput = function selectCssOutput(styleSheet) {
  return styleSheet.componentStyleSheet.tags[0].innerHTML;
};