function contactLoad(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `     <div class="custom-contact">
  <h2 class="custom-contact__title">Escribime</h2>
  <form action="submit" class="custom-contact__form">
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

  const formEl = componentEl.querySelector(".custom-contact__form");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const $name = componentEl.querySelector("#name").value;
    const $email = componentEl.querySelector("#email").value;
    const $message = componentEl.querySelector("#textarea").value;

    const url = "https://apx-api.vercel.app/api/utils/dwf";

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: $name,
        to: $email,
        message: $message,
      }),
    })
      .then(() => {
        alert("Gracias por enviar tu mensaje!");
      })
      .catch(() => {
        alert("error al enviar el mensaje");
      });
  });

  el.insertBefore(componentEl, el.firstChild);
}
