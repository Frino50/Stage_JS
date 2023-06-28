import { initMemeEditor } from "./memeform.js";


function init() {
  document
    .querySelector("#flexSwitchCheckDefault")
    .addEventListener("change", function (evt) {
      changeTheme(evt.target.checked);
    });
  var date = new Date().toISOString();
  var footer = document.getElementsByTagName("footer")[0];

  footer.innerHTML = date;

  css(footer);
  initMemeEditor();
}

function css(css) {
  css.style.backgroundColor = "rgb(128,12,8,0.2)";
  css.style.color = "white";
  css.style.textDecoration = "underline";
  css.style.fontSize = "50px";
  css.style.fontStyle = "italic";
}

function changeTheme(isDark) {
  var nav = document.getElementsByTagName("nav")[0];
  var kiwi = document.getElementsByName("kiwi")[0];
  var slider = document.getElementById("flexSwitchCheckDefault");
  var lbl = document.querySelector("#rrr");
  if (isDark) {
    document.body.className = "dark";
    nav.classList.replace("navbar-light", "navbar-dark");
    nav.classList.replace("bg-light", "bg-dark");
    slider.checked = true;
    lbl.innerHTML = "Dark";
    kiwi.xlink = "/kiwi_ven.svg";
  } else {
    document.body.className = "";
    nav.classList.replace("navbar-dark", "navbar-light");
    nav.classList.replace("bg-dark", "bg-light");
    slider.checked = false;
    lbl.innerHTML = "Clear";
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  init();
});
