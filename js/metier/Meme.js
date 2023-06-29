export class Meme {
  titre = "";
  text = "";
  x = 0;
  y = 20;
  imageId = -1;
  fontSize = 20;
  fontWeight = "500";
  underline = false;
  talic = false;
  color = "#000000";
  static render(currentMeme, selecteurCss, imgHref) {
    const svg = document.querySelector(selecteurCss + " svg");

    svg.setAttribute(
      "viewBox",
      `0 0 ${undefined !== imgHref ? imgHref.w : 500} ${
        undefined !== imgHref ? imgHref.h : 500
      }`
    );

    const textElement = svg.querySelector("text");
    const imgElement = svg.querySelector("image");

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
}
