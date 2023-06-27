function init() {
  var date = new Date().toISOString();
  var footer = document.getElementsByTagName("footer")[0];

  footer.innerHTML = date;

  css(footer);
  setTimeout(init, 1000);
}

function css(css) {
  css.style.backgroundColor = "rgb(128,12,8,0.2)";
  css.style.color = "white";
  css.style.textDecoration = "underline";
  css.style.fontSize = "50px";
  css.style.fontStyle = "italic";
}

document.addEventListener("DOMContentLoaded", function (event) {
  init();
});
