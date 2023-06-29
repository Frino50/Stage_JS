import { initEditor } from "./js-views.js/editor.js";
import { initHome } from "./js-views.js/home.js";

const routeConfig = {
  routes: [
    {
      pathName: "/thumbnail",
      initialisation: undefined,
      templateUrl: "/view/thumbnail.html",
    },
    {
      pathName: "/",
      initialisation: initHome,
      templateUrl: "/view/home.html",
    },
    {
      pathName: "/break",
      initialisation: undefined,
      templateUrl: "/view/ok.html",
    },
    {
      pathName: "/editor",
      initialisation: initEditor,
      templateUrl: "/view/editor.html",
    },
  ],
};

class Router {
  #currentRoute;
  constructor() {
    document.addEventListener("DOMContentLoaded", (evt) => {
      this.#initRouterLinks();
    });
  }

  get currentRoute() {
    return this.#currentRoute;
  }

  handleRoute() {
    const pathName = location.pathname;
    this.#currentRoute = routeConfig.routes.find(
      (route) => route.pathName === pathName
    );
    this.#instanciateCurrentRouteTemplate();
  }

  changeRoute(pathName) {
    history.pushState(undefined, undefined, pathName);
    this.handleRoute();
  }

  #instanciateCurrentRouteTemplate() {
    if (this.#currentRoute.templateText !== undefined) {
      this.#loadCurrentDOMContent();
    } else {
      fetch(this.#currentRoute.templateUrl)
        .then((response) => response.text())
        .then((t) => {
          this.#currentRoute.templateText = t;
          this.#loadCurrentDOMContent();
        });
    }
  }

  #loadCurrentDOMContent(domContainerSelector = "article") {
    document.querySelector(domContainerSelector).innerHTML =
      this.#currentRoute.templateText;
    this.#initRouterLinks(domContainerSelector);
    if (undefined !== this.#currentRoute.initialisation) {
      this.#currentRoute.initialisation();
    }
  }

  #initRouterLinks(baseSelector = "body") {
    const links = document.querySelectorAll(baseSelector + " a");
    links.forEach((link) => {
      link.removeEventListener("click", this.#handleLinkEvent);
      link.addEventListener("click", this.#handleLinkEvent);
    });
  }

  #handleLinkEvent = (evt) => {
    evt.preventDefault();
    this.changeRoute(evt.target.href);
  };
}

export const router = new Router();
