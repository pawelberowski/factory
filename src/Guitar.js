import {determineFaultiness} from "./determineFaultiness";

export class Guitar {
  constructor(neck, strings, body) {
    this.neck = neck;
    this.strings = strings;
    this.body = body;
    this.isTuned = false;
    this.isFaulty = determineFaultiness(70);
  }

  tune() {
    return this.isTuned = true;
  }
}
