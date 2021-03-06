"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _recompose = require("recompose");

var _utils = require("../utils");

var _utils2 = require("./utils");

var _shallowEqualArray = _interopRequireDefault(require("../utils/shallowEqualArray"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Character = _interopRequireDefault(require("./Character"));

var _FormContext = require("../Form/FormContext");

var _constants = require("../constants");

var Rate =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Rate, _React$Component);

  Rate.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, nextState) {
    var value = nextProps.value,
        max = nextProps.max,
        allowHalf = nextProps.allowHalf;
    var characterMap = (0, _utils2.transformValueToCharacterMap)(value, max, allowHalf);

    if (typeof value !== 'undefined' && value !== nextState.prevPropsValue) {
      return {
        prevPropsValue: value,
        characterMap: characterMap
      };
    }

    return null;
  };

  function Rate(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.addPrefix = function (name) {
      return (0, _utils.prefix)(_this.props.classPrefix)(name);
    };

    _this.getCharacterMap = function (value) {
      var _this$props = _this.props,
          max = _this$props.max,
          allowHalf = _this$props.allowHalf;
      return (0, _utils2.transformValueToCharacterMap)(value, max, allowHalf);
    };

    _this.resetCharacterMap = function () {
      _this.setState({
        characterMap: _this.getCharacterMap(_this.getValue())
      });
    };

    _this.handleMouseLeave = function (event) {
      var _this$props$onChangeA, _this$props2;

      _this.resetCharacterMap();

      (_this$props$onChangeA = (_this$props2 = _this.props).onChangeActive) === null || _this$props$onChangeA === void 0 ? void 0 : _this$props$onChangeA.call(_this$props2, _this.getValue(), event);
    };

    _this.handleChangeValue = function (index, event) {
      var _this$props3 = _this.props,
          cleanable = _this$props3.cleanable,
          onChange = _this$props3.onChange;
      var characterMap = _this.state.characterMap;

      var value = _this.getValue();

      var nextValue = (0, _utils2.transformCharacterMapToValue)(characterMap);

      if (cleanable && value === nextValue && _this.getCharacterMap(value)[index] === characterMap[index]) {
        nextValue = 0;
      }

      if (nextValue !== value) {
        _this.setState({
          prevPropsValue: nextValue,
          characterMap: _this.getCharacterMap(nextValue)
        });

        onChange === null || onChange === void 0 ? void 0 : onChange(nextValue, event);
      }
    };

    _this.handleKeyDown = function (index, event) {
      var keyCode = event.keyCode;
      var _this$props4 = _this.props,
          max = _this$props4.max,
          allowHalf = _this$props4.allowHalf;
      var characterMap = _this.state.characterMap;
      var nextValue = (0, _utils2.transformCharacterMapToValue)(characterMap);

      if (keyCode === _constants.KEY_CODE.RIGHT && nextValue < max) {
        nextValue = allowHalf ? nextValue + 0.5 : nextValue + 1;
      } else if (keyCode === _constants.KEY_CODE.LEFT && nextValue > 0) {
        nextValue = allowHalf ? nextValue - 0.5 : nextValue - 1;
      }

      _this.setState({
        characterMap: _this.getCharacterMap(nextValue)
      });

      if (keyCode === _constants.KEY_CODE.ENTER) {
        _this.handleChangeValue(index, event);
      }
    };

    _this.handleClick = function (index, key, event) {
      _this.handleChangeCharacterMap(index, key, event, function () {
        _this.handleChangeValue(index, event);
      });
    };

    var _value = props.value;
    var prevPropsValue = typeof _value !== 'undefined' ? _value : props.defaultValue;
    _this.state = {
      prevPropsValue: prevPropsValue,
      characterMap: _this.getCharacterMap(prevPropsValue)
    };
    return _this;
  }

  var _proto = Rate.prototype;

  _proto.getValue = function getValue() {
    var value = this.props.value;
    return typeof value === 'undefined' ? this.state.prevPropsValue : value;
  };

  _proto.handleChangeCharacterMap = function handleChangeCharacterMap(index, key, event, callback) {
    var _this2 = this;

    var characterMap = this.state.characterMap;
    var nextCharacterMap = characterMap.map(function (_item, i) {
      if (i === index && key === 'before' && _this2.props.allowHalf) {
        return 0.5;
      }

      return index >= i ? 1 : 0;
    });

    if (!(0, _shallowEqualArray.default)(characterMap, nextCharacterMap)) {
      var _this$props$onChangeA2, _this$props5;

      this.setState({
        characterMap: nextCharacterMap
      }, callback);
      (_this$props$onChangeA2 = (_this$props5 = this.props).onChangeActive) === null || _this$props$onChangeA2 === void 0 ? void 0 : _this$props$onChangeA2.call(_this$props5, (0, _utils2.transformCharacterMapToValue)(nextCharacterMap), event);
      return;
    }

    callback === null || callback === void 0 ? void 0 : callback();
  };

  _proto.render = function render() {
    var _classNames,
        _this3 = this;

    var _this$props6 = this.props,
        character = _this$props6.character,
        className = _this$props6.className,
        classPrefix = _this$props6.classPrefix,
        disabled = _this$props6.disabled,
        max = _this$props6.max,
        renderCharacter = _this$props6.renderCharacter,
        readOnly = _this$props6.readOnly,
        vertical = _this$props6.vertical,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props6, ["character", "className", "classPrefix", "disabled", "max", "renderCharacter", "readOnly", "vertical"]);
    var characterMap = this.state.characterMap;
    var hoverValue = (0, _utils2.transformCharacterMapToValue)(characterMap);
    var classes = (0, _classnames.default)(classPrefix, className, (_classNames = {}, _classNames[this.addPrefix('disabled')] = disabled, _classNames[this.addPrefix('readonly')] = readOnly, _classNames));
    var unhandled = (0, _utils.getUnhandledProps)(Rate, rest);
    var plaintextRate = React.createElement("div", (0, _extends2.default)({}, unhandled, {
      className: className
    }), this.getValue() + "(" + max + ")");
    var rate = React.createElement("ul", (0, _extends2.default)({}, unhandled, {
      className: classes,
      onMouseLeave: this.handleMouseLeave
    }), characterMap.map(function (item, index) {
      return React.createElement(_Character.default, {
        key: index,
        status: item,
        disabled: disabled || readOnly,
        vertical: vertical,
        onClick: _this3.handleClick.bind(_this3, index),
        onKeyDown: _this3.handleKeyDown.bind(_this3, index),
        onMouseMove: _this3.handleChangeCharacterMap.bind(_this3, index)
      }, renderCharacter ? renderCharacter(hoverValue, index) : character);
    }));
    return React.createElement(_FormContext.FormPlaintextContext.Consumer, null, function (plaintext) {
      return plaintext ? plaintextRate : rate;
    });
  };

  return Rate;
}(React.Component);

Rate.propTypes = {
  allowHalf: _propTypes.default.bool,
  character: _propTypes.default.node,
  classPrefix: _propTypes.default.string,
  cleanable: _propTypes.default.bool,
  defaultValue: _propTypes.default.number,
  disabled: _propTypes.default.bool,
  max: _propTypes.default.number,
  renderCharacter: _propTypes.default.func,
  readOnly: _propTypes.default.bool,
  size: _propTypes.default.oneOf(_constants.SIZE),
  value: _propTypes.default.number,
  vertical: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  onChangeActive: _propTypes.default.func
};
Rate.defaultProps = {
  character: React.createElement(_Icon.default, {
    icon: "star"
  }),
  cleanable: true,
  defaultValue: 0,
  max: 5,
  size: 'md'
};

var _default = (0, _recompose.compose)((0, _utils.withStyleProps)({
  hasSize: true,
  hasColor: true
}), (0, _utils.defaultProps)({
  classPrefix: 'rate'
}))(Rate);

exports.default = _default;
module.exports = exports.default;