'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createCSS;

var _cssobj = require('cssobj');

var _cssobj2 = _interopRequireDefault(_cssobj);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactChangeProps = require('react-change-props');

var _reactChangeProps2 = _interopRequireDefault(_reactChangeProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreateCSS = function () {
  function CreateCSS(obj, config) {
    _classCallCheck(this, CreateCSS);

    this.mapClass = this.mapClass.bind(this);
    this.css = (0, _cssobj2.default)(obj, Object.assign({ local: true }, config));
  }

  _createClass(CreateCSS, [{
    key: 'mapClass',
    value: function mapClass(jsx) {
      var css = this.css;

      return (0, _reactChangeProps2.default)(jsx, function (el) {
        var className = el.props.className;

        return className && { className: css.mapClass((0, _classnames2.default)(className)) };
      });
    }
  }]);

  return CreateCSS;
}();

function createCSS(obj, config) {
  return new CreateCSS(obj, config);
}

createCSS.cssobj = _cssobj2.default;
createCSS.classNames = _classnames2.default;
createCSS.changeProps = _reactChangeProps2.default;
