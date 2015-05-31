'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _temporal = require('temporal');

var _temporal2 = _interopRequireDefault(_temporal);

exports['default'] = function (drone) {
  _temporal2['default'].queue([{
    delay: 0,
    task: function task() {
      drone.flatTrim();
      drone.startPing();
      drone.takeOff();
    }
  }, {
    delay: 3000,
    task: function task() {
      drone.forward();
    }
  }, {
    delay: 500,
    task: function task() {
      drone.land();
    }
  }]);
};

module.exports = exports['default'];