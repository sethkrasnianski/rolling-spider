import Drone from 'rolling-spider';
import fly from './flight';

const chopper = new Drone();

chopper.connect(() => {
  chopper.setup(() => {
    fly(chopper);
  });
});
