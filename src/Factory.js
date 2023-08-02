import { Body } from './Body';
import { NeckSupplier } from './NeckSupplier';
import { StringsSupplier } from './StringsSupplier';
import { Storage } from './Storage';
import { Guitar } from './Guitar';

export class Factory {
  constructor() {
    this.neckSupplier = new NeckSupplier(3);
    this.stringsSupplier = new StringsSupplier(4);
    this.storage = new Storage();
    this.necksArray = [];
    this.stringsArray = [];
    this.initiateDeliveries();
  }

  produceBody() {
    return new Body();
  }

  initiateDeliveries() {
    setInterval(() => {
      this.neckSupplier.delivery()?.forEach((neck) => {
        this.necksArray.push(neck);
      });
      console.log(this.necksArray);
      this.stringsSupplier.delivery()?.forEach((strings) => {
        this.stringsArray.push(strings);
      });
      console.log(this.stringsArray);
    }, 5000);
  }

  goThroughProductionCycle() {
    if (!this.stringsArray.length || !this.necksArray.length) {
      console.log('Not enough supplies');
      return this.stopProductionLine();
    }
    const guitar = new Guitar(
      this.necksArray.pop(),
      this.stringsArray.pop(),
      this.produceBody(),
    );
    guitar.tune();
    if (guitar.isPlayable()) {
      this.storage.storeInstrument(guitar);
    }
  }

  runProductionLine() {
    this.productionIntervalId = setInterval(() => {
      this.goThroughProductionCycle();
    }, 2000);
  }

  stopProductionLine() {
    if (this.productionIntervalId) {
      clearInterval(this.productionIntervalId);
    }
  }
}
