function headerLoad(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `      <header class="custom-header">
    <a href="index.html" class="custom-header__home-btn">
      <p class="custom-header__title">LUCAS</p>
    </a>
    <div class="custom-header__wrapper-menu">
      <div class="custom-header__menu"></div>
      <div class="custom-header__menu"></div>
      <div class="custom-header__menu"></div>
    </div>
    <nav class="custom-header__nav-bar">
      <a href="portfolio.html" class="custom-header__nav-item">Portfolio</a>
      <a href="servicios.html" class="custom-header__nav-item">Servicios</a>
      <a href="contacto.html" class="custom-header__nav-item">Contacto</a>
    </nav>
    <div class="custom-header__window">
      <div class="custom-header__window-close">
        <img
          src="./images/vector.png"
          alt=""
          class="custom-header__window-close-btn"
        />
      </div>
      <nav class="custom-header__window-menu">
        <a href="portfolio.html" class="custom-header__window-item"
          >Portfolio</a
        >
        <a href="servicios.html" class="custom-header__window-item"
          >Servicios</a
        >
        <a href="contacto.html" class="custom-header__window-item"
          >Contacto</a
        >
      </nav>
    </div>
  </header>`;

  const navButtonEl = componentEl.querySelector(".custom-header__wrapper-menu");
  const windowEl = componentEl.querySelector(".custom-header__window");
  const windowCloseEl = componentEl.querySelector(
    ".custom-header__window-close-btn"
  );
  navButtonEl.addEventListener("click", function () {
    windowEl.style.display = "initial";
  });
  windowCloseEl.addEventListener("click", function () {
    windowEl.style.display = "none";
  });

  el.insertBefore(componentEl, el.firstChild);
}
