'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _rollingSpider = require('rolling-spider');

var _rollingSpider2 = _interopRequireDefault(_rollingSpider);

var _temporal = require('temporal');

var _temporal2 = _interopRequireDefault(_temporal);

var _flight = require('flight');

var _flight2 = _interopRequireDefault(_flight);

var chopper = new _rollingSpider2['default']();

chopper.connect(function () {
  chopper.setup(function () {
    _temporal2['default'].queue(_flight2['default']);
  });
});