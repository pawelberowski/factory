import { getRandomInteger } from './getRandomInteger';
import { Neck } from './Neck';

export class NeckSupplier {
  constructor(frequencyInSeconds) {
    this.frequencyInSeconds = frequencyInSeconds;
    this.lastDeliveryDateTime = Math.round(new Date() / 1000);
  }

  delivery() {
    if (this.lastDeliveryDateTime < this.frequencyInSeconds) {
      this.lastDeliveryDateTime =
        Math.round(new Date() / 1000) - this.lastDeliveryDateTime;
      return null;
    }
    this.lastDeliveryDateTime =
      Math.round(new Date() / 1000) - this.lastDeliveryDateTime;
    return Array(getRandomInteger(3, 6)).fill(new Neck());
  }
}
