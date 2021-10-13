function contactLoad(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `     <div class="custom-contact">
  <h2 class="custom-contact__title">Escribime</h2>
  <form action="" class="custom-contact__form">
    <label for="name" class="custom-contact__name-label">NOMBRE</label>
    <input type="text" id="name" class="custom-contact__name-input" />
    <label for="email" class="custom-contact__email-label">EMAIL</label>
    <input type="email" id="email" class="custom-contact__email-input" />
    <label for="textarea" class="custom-contact__textarea-label"
      >MENSAJE</label
    >
    <textarea
      name=""
      id="textarea"
      cols="30"
      rows="10"
      class="custom-contat__textarea-input"
    ></textarea>
    <button class="custom-contact__btn">Enviar</button>
  </form>
</div>`;

  el.insertBefore(componentEl, el.firstChild);
}
