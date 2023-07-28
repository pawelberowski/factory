class Guitar {
  constructor(neck, strings, body) {
    this.neck = neck;
    this.strings = strings;
    this.body = body;
    this.isTuned = false;
    this.isFaulty = false;
  }

  tune() {
    return this.isTuned = true;
  }
}
