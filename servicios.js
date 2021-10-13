(function () {
  headerLoad(document.querySelector(".hero-section"));
  footerLoad(document.querySelector(".footer"));

  function showImages(dataImages, i) {
    const templateEl = document.querySelector(".template");
    const imageEl = templateEl.content.querySelector(".services-section__img");
    const urlImage = "http:" + dataImages[i].fields.file.url;
    imageEl.src = urlImage;
  }

  function showTitle(dataItems, i) {
    const length = dataItems.length - i;
    const templateEl = document.querySelector(".template");
    const titleEl = templateEl.content.querySelector(
      ".services-section__title"
    );
    titleEl.textContent = dataItems[length - 1].fields.tituloServicio;
  }
  function showDescription(dataItems, i) {
    const length = dataItems.length - i;
    const templateEl = document.querySelector(".template");
    const descriptionEl = templateEl.content.querySelector(
      ".services-section__description"
    );
    descriptionEl.textContent = dataItems[length - 1].fields.descripcion;
  }

  // function redirectToPage(dataItems, i) {
  //   const length = dataItems.length - i;
  //   const URL = dataItems[length - 1].fields.url;
  //   const viewMoreEl = document.querySelectorAll(".services-section__anchor");

  //   viewMoreEl[i].addEventListener("click", (e) => {
  //     window.open(URL);
  //   });
  // }

  function clone(container, template) {
    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
  }

  function showResults(data) {
    const containerEl = document.querySelector(".container");
    const templateEl = document.querySelector(".template");
    const dataImages = data.includes.Asset;
    const dataItems = data.items;

    console.log(dataItems);

    data.items.forEach((el, i) => {
      showImages(dataImages, i);
      showTitle(dataItems, i);
      showDescription(dataItems, i);
      clone(containerEl, templateEl);
      // redirectToPage(dataItems, i);
    });
  }

  function main() {
    function connectToApi() {
      const URL =
        "https://cdn.contentful.com/spaces/7ass8d0affw7/environments/master/entries?access_token=Y4SStXGRLNJ_ox3XH9YLD_VDG99ACMJFGELjyLkKriA&&content_type=servicios";

      fetch(URL)
        .then((response) => response.json())
        .then((data) => showResults(data));
    }

    connectToApi();
  }

  main();
})();
