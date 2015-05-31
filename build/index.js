'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _rollingSpider = require('rolling-spider');

var _rollingSpider2 = _interopRequireDefault(_rollingSpider);

var _flight = require('./flight');

var _flight2 = _interopRequireDefault(_flight);

var chopper = new _rollingSpider2['default']();

chopper.connect(function () {
  chopper.setup(function () {
    (0, _flight2['default'])(chopper);
  });
});