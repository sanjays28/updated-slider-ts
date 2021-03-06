"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../Button"));

var DefaultToggleButton = React.forwardRef(function (props, ref) {
  return React.createElement(_Button.default, (0, _extends2.default)({
    componentClass: "a",
    ripple: false
  }, props, {
    ref: ref
  }));
});
DefaultToggleButton.displayName = 'DefaultToggleButton';
var _default = DefaultToggleButton;
exports.default = _default;
module.exports = exports.default;