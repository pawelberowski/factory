import './styles.css';
import { Factory } from './Factory';

const factory = new Factory();

setInterval(function () {
  factory.runProductionLine();
}, 2000);
