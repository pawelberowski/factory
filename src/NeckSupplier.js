import { getRandomInteger } from './getRandomInteger';
import { Neck } from './Neck';

export class NeckSupplier {
  constructor(frequencyInSeconds) {
    this.frequencyInSeconds = frequencyInSeconds;
    this.lastDeliveryDateTime = 4;
  }

  delivery() {
    if (this.lastDeliveryDateTime < this.frequencyInSeconds) {
      return null;
    }
    return Array(getRandomInteger(3, 6)).fill(new Neck());
  }
}
