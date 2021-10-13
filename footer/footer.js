function footerLoad(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `    <div class="custom-footer">
  <h2 class="custom-footer__title">LUCAS</h2>
  <div class="custom-footer__social-container">
    <a
      href="https://www.instagram.com/havikhavik/"
      class="custom-footer__ig-anchor"
      target="_blank"
      >Instagram
      <img src="./images/ig-icon.png" alt="" class="custom-footer__icon"
    /></a>
    <a
      href="https://www.linkedin.com/in/havikhavik/"
      class="custom-footer__linkedin-anchor"
      target="_blank"
      >Linkedin
      <img src="./images/linkedin.png" alt="" class="custom-footer__icon"
    /></a>
    <a
      href="https://github.com/havikhavik"
      class="custom-footer__github-anchor"
      target="_blank"
      >Github
      <img src="./images/github.png" alt="" class="custom-footer__icon"
    /></a>
  </div>
</div>`;

  el.insertBefore(componentEl, el.firstChild);
}
