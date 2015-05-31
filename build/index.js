'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _rollingSpider = require('rolling-spider');

var _rollingSpider2 = _interopRequireDefault(_rollingSpider);

var _temporal = require('temporal');

var _temporal2 = _interopRequireDefault(_temporal);

var chopper = new _rollingSpider2['default']();

chopper.connect(function () {
  chopper.setup(function () {
    _temporal2['default'].queue([{
      delay: 0,
      task: function task() {
        chopper.flatTrim();
        chopper.startPing();
        chopper.takeOff();
      }
    }, {
      delay: 3000,
      task: function task() {
        chopper.forward();
      }
    }, {
      delay: 500,
      task: function task() {
        chopper.land();
      }
    }]);
  });
});
