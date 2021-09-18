"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormInputLabel = exports.FormInputContainer = exports.GroupContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const subColor = 'grey';
const mainColor = 'black';
const shrinkLabelStyles = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  top: -14px;\n  font-size: 12px;\n  color: ", ";\n"])), mainColor);

const GroupContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  margin: 45px 0;\n  input[type='password'] {\n    letter-spacing: 0.3em;\n  }\n"])));

exports.GroupContainer = GroupContainer;

const FormInputContainer = _styledComponents.default.input(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background: none;\n  background-color: white;\n  color: ", ";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ", ";\n  margin: 25px 0;\n  &:focus {\n    outline: none;\n  }\n  &:focus ~ label {\n    ", "\n  }\n"])), subColor, subColor, shrinkLabelStyles);

exports.FormInputContainer = FormInputContainer;

const FormInputLabel = _styledComponents.default.label(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n  &.shrink {\n    ", "\n  }\n"])), subColor, shrinkLabelStyles);

exports.FormInputLabel = FormInputLabel;