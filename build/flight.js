"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var flight = [{
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
}];
exports.flight = flight;