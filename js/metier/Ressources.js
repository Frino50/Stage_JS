import REST_ADR, { RESSOURCE_PATH } from "../constantes.js";
export class Ressources {
  #images = [];
  #memes = [];
  #isLoaded = false;

  get images() {
    return this.#images;
  }

  get isLoaded() {
    return this.#isLoaded;
  }

  get memes() {
    return this.#memes;
  }

  loadRessources(callback) {
    const promiseImages = fetch(REST_ADR + RESSOURCE_PATH.images).then((resp) =>
      resp.json()
    );

    const promiseMemes = fetch(REST_ADR + RESSOURCE_PATH.memes).then((resp) =>
      resp.json()
    );

    Promise.all([promiseImages, promiseMemes]).then((array) => {
      this.#images.splice(0);
      this.#images.push(...array[0]);
      this.#memes.splice(0);
      this.#memes.push(...array[1]);
      this.#isLoaded = true;
      
      if (undefined !== callback && typeof callback === "function") {
        callback(this);
      }
    });
  }
}
export const ressources = new Ressources();
