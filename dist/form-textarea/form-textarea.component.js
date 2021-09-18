"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./form-element.component.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TextArea = _ref => {
  let {
    handleChange,
    value,
    label,
    name,
    required = false
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "".concat(value.length ? 'shrink' : '', " form-element-label")
  }, label), /*#__PURE__*/_react.default.createElement("textarea", {
    name: name,
    className: "form-element",
    onChange: handleChange,
    required: required
  }));
};

var _default = TextArea;
exports.default = _default;