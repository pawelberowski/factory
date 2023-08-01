import './styles.css';
import { Factory } from './Factory';
import { wait } from './wait';

const factory = new Factory();
factory.runProductionLine();
wait(2000).then(function () {
  factory.runProductionLine();
});
wait(4000).then(function () {
  factory.runProductionLine();
});
wait(6000).then(function () {
  factory.runProductionLine();
});
