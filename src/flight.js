import temporal from 'temporal';

export default function(drone) {
  temporal.queue([
    {
      delay: 0,
      task: () => {
        drone.flatTrim();
        drone.startPing();
        drone.takeOff();
      }
    },
    {
      delay: 3000,
      task: () => {
        drone.forward();
      }
    },
    {
      delay: 500,
      task: () => {
        drone.land();
      }
    }
  ]);
}
