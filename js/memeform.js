var currentMeme = new Meme();

function initMemeEditor() {
  var form = document.forms["meme-form"];
  form["titre"].addEventListener("input", function (evt) {
    currentMeme.titre = evt.target.value;
    renderMeme();
  });
  form["imageId"].addEventListener("change", function (evt) {
    currentMeme.imageId = Number(evt.target.value);
    renderMeme();
  });
  form["text"].addEventListener("input", function (evt) {
    currentMeme.text = evt.target.value;
    renderMeme();
  });
  form["y"].addEventListener("input", function (evt) {
    currentMeme.y = Number(evt.target.value);
    renderMeme();
  });
  form["x"].addEventListener("input", function (evt) {
    currentMeme.x = Number(evt.target.value);
    renderMeme();
  });
  form["color"].addEventListener("input", function (evt) {
    currentMeme.color = evt.target.value;
    renderMeme();
  });
  form["font-size"].addEventListener("input", function (evt) {
    currentMeme.fontSize = Number(evt.target.value);
    renderMeme();
  });
  form["font-weight"].addEventListener("input", function (evt) {
    currentMeme.fontWeight = Number(evt.target.value);
    renderMeme();
  });
  form["underline"].addEventListener("change", function (evt) {
    currentMeme.underline = evt.target.checked;
    renderMeme();
  });
  form["italic"].addEventListener("change", function (evt) {
    currentMeme.italic = evt.target.checked;
    renderMeme();
  });
  loadSelectImage(images);
}

function renderMeme() {
  var svg = document.querySelector("#editor-viewer svg");
  var textElement = svg.querySelector("text");
  var imgElement = svg.querySelector("image");
  var imgHref = images.find(function (image) {
    return image.id === currentMeme.imageId;
  });
  svg.setAttribute(
    "viewBox",
    `0 0 ${undefined !== imgHref ? imgHref.w : 500} ${
      undefined !== imgHref ? imgHref.h : 500
    }`
  );
  imgElement.setAttribute(
    "xlink:href",
    undefined !== imgHref ? imgHref.url : ""
  );
  textElement.innerHTML = currentMeme.text;
  textElement.style.fill = currentMeme.color;
  textElement.style.textDecoration = currentMeme.underline
    ? "underline"
    : "none";
  textElement.setAttribute("font-weight", currentMeme.fontWeight);
  textElement.setAttribute("font-size", currentMeme.fontSize);
  textElement.setAttribute(
    "font-style",
    currentMeme.italic ? "italic" : "normal"
  );
  textElement.setAttribute("x", currentMeme.x);
  textElement.setAttribute("y", currentMeme.y);
}

function loadSelectImage(images) {
  var select = document.forms["meme-form"]["imageId"];
  select.innerHTML = "";
  var option = document.createElement("option");
  option.value = "Sélectionner une image";
  option.innerHTML = "Sélectionner une image";
  select.appendChild(option);

  images.forEach(function (image) {
    var opt = option.cloneNode(true);
    opt.value = image.id;
    opt.innerHTML = image.titre;
    select.appendChild(opt);
  });
}
