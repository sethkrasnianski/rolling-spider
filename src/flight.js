export var flight = [
  {
    delay: 0,
    task: () => {
      chopper.flatTrim();
      chopper.startPing();
      chopper.takeOff();
    }
  },
  {
    delay: 3000,
    task: () => {
      chopper.forward();
    }
  },
  {
    delay: 500,
    task: () => {
      chopper.land();
    }
  }
];
