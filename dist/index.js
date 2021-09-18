"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FormInput", {
  enumerable: true,
  get: function get() {
    return _formInput.default;
  }
});
Object.defineProperty(exports, "FormTextArea", {
  enumerable: true,
  get: function get() {
    return _formTextarea.default;
  }
});

var _formInput = _interopRequireDefault(require("./form-input/form-input.component"));

var _formTextarea = _interopRequireDefault(require("./form-textarea/form-textarea.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }