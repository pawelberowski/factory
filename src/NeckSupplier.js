import { getRandomInteger } from './getRandomInteger';
import { Neck } from './Neck';

export class NeckSupplier {
  constructor(frequencyInSeconds, lastSupplyTimestamp) {
    this.frequencyInSeconds = frequencyInSeconds;
    this.lastSupplyTimestamp = lastSupplyTimestamp;
  }

  delivery() {
    if (this.lastSupplyTimestamp < this.frequencyInSeconds) {
      return null;
    }
    return Array(getRandomInteger(3, 6)).fill(new Neck());
  }
}
