import Drone from 'rolling-spider';
import temporal from 'temporal';

const chopper = new Drone();

chopper.connect(() => {
  chopper.setup(() => {
    temporal.queue([
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
    ]);
  });
});
