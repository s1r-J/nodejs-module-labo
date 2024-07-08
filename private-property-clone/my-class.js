export default class MyClass {
  #mySecret; // プライベートプロパティ
  myOpenData;

  constructor(secret, openData) {
    this.#mySecret = secret;
    this.myOpenData = openData;
  }

  get secret() {
    return this.#mySecret;
  }

  get openData() {
    return this.myOpenData;
  }

  getSecret() {
    return this.#mySecret;
  }

  getOpenData() {
    return this.myOpenData;
  }
}
