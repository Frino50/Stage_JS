import { ressource } from "../metier/Ressources.js";

let currentMeme;

const VIEW_EDITOR_CSS_SELECTOR = "#editor";

export const initEditor = () => {};

const initFormEvent = () => {};

const initFormValues = () => {};

const setCurrentMeme = () => {};

const initSelectImages = () => {
  var select = document.forms["meme-form"]["imageId"];
  select.innerHTML = "";

  var option = document.createElement("option");
  option.value = "-1";
  option.innerHTML = "Sélectionner une image";
  select.appendChild(option);

  ressource.images.forEach(function (image) {
    var opt = option.cloneNode(true);
    opt.value = image.id;
    opt.innerHTML = image.titre;
    select.appendChild(opt);
  });
};
