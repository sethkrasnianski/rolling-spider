import Drone from 'rolling-spider';
import temporal from 'temporal';
import flight from 'flight';

const chopper = new Drone();

chopper.connect(() => {
  chopper.setup(() => {
    temporal.queue(flight);
  });
});
