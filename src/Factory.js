import { Body } from './Body';
import { NeckSupplier } from './NeckSupplier';
import { StringsSupplier } from './StringsSupplier';
import { Storage } from './Storage';

export class Factory {
  constructor() {
    this.neckSupplier = new NeckSupplier(3);
    this.stringsSupplier = new StringsSupplier(4);
    this.storage = new Storage();
    this.necksArray = [];
    this.stringsArray = [];
  }

  produceBody() {
    return new Body();
  }

  runProductionLine() {}
}
