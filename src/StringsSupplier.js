import { getRandomInteger } from './getRandomInteger';
import { Strings } from './Strings';

export class StringsSupplier {
  constructor(frequencyInSeconds) {
    this.frequencyInSeconds = frequencyInSeconds;
    this.lastDeliveryDateTime = 0;
  }

  delivery() {
    if (this.lastDeliveryDateTime < this.frequencyInSeconds) {
      return null;
    }
    return Array(getRandomInteger(3, 6)).fill(new Strings());
  }
}
