import { router } from "./router.js";
import { ressource } from "./metier/Ressources.js";
document.addEventListener("DOMContentLoaded", (evt) => {
  router.handleRoute();
});
ressource.loadRessources();
