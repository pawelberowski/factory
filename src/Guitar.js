import { determineFaultiness } from './determineFaultiness';

export class Guitar {
  constructor(neck, strings, body) {
    this.neck = neck;
    this.strings = strings;
    this.body = body;
    this.isTuned = false;
    this.isFaulty = determineFaultiness(70);
  }

  tune() {
    return (this.isTuned = true);
  }

  isPlayable() {
    if (this.isTuned && !this.isFaulty) {
      console.log('guitar is playing just fine!');
      return true;
    }
    console.log('The guitar is not playable!');
    return false;
  }
}
