import { Meme } from "../metier/Meme.js";
import { ressources } from "../metier/Ressources.js";

let currentMeme;
let currentImage;

const VIEW_EDITOR_CSS_SELECTOR = "#editor";

export const initEditor = () => {
  initFormEvent();
  if (ressources.isLoaded) {
    initSelectImages();
    setCurrentMeme(new Meme());
  } else {
    ressources.loadRessources((res) => {
      initSelectImages();
      setCurrentMeme(new Meme());
    });
  }
};

const initFormEvent = () => {
  var form = document.forms["meme-form"];
  form["titre"].addEventListener("input", function (evt) {
    currentMeme.titre = evt.target.value;
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["imageId"].addEventListener("change", function (evt) {
    currentMeme.imageId = Number(evt.target.value);
    currentImage = ressources.images.find(
      (image) => image.id === currentMeme.imageId
    );
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["text"].addEventListener("input", function (evt) {
    currentMeme.text = evt.target.value;
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["y"].addEventListener("input", function (evt) {
    currentMeme.y = Number(evt.target.value);
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["x"].addEventListener("input", function (evt) {
    currentMeme.x = Number(evt.target.value);
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["color"].addEventListener("input", function (evt) {
    currentMeme.color = evt.target.value;
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["font-size"].addEventListener("input", function (evt) {
    currentMeme.fontSize = Number(evt.target.value);
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["font-weight"].addEventListener("input", function (evt) {
    currentMeme.fontWeight = Number(evt.target.value);
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["underline"].addEventListener("change", function (evt) {
    currentMeme.underline = evt.target.checked;
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["italic"].addEventListener("change", function (evt) {
    currentMeme.italic = evt.target.checked;
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
};

const initFormValues = () => {

    
};

const setCurrentMeme = (meme) => {
  currentMeme = meme;
  initFormValues();
  const img = ressources.images.find((image) => image.id === meme.id);
  Meme.render(meme, VIEW_EDITOR_CSS_SELECTOR, img);
};

const initSelectImages = () => {
  var select = document.forms["meme-form"]["imageId"];
  select.innerHTML = "";

  var option = document.createElement("option");
  option.value = "-1";
  option.innerHTML = "Sélectionner une image";
  select.appendChild(option);

  ressources.images.forEach(function (image) {
    var opt = option.cloneNode(true);
    opt.value = image.id;
    opt.innerHTML = image.titre;
    select.appendChild(opt);
  });
};
