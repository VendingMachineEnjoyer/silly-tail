// Fragmentos de cada sección
const sections = {
  1: [
    "Seis minutos fuera de mi cuerpo fueron suficientes para ver la inmensidad de lo que llaman Cielo. La luz me envolvía, pero algo en mi interior me decía que no quería quedarme allí.",
    "El tiempo parecía no existir, todo era paz y silencio… pero no podía quedarme."
  ],
  2: [
    "Caminando entre ángeles y estructuras que desafiaban la lógica, comprendí que todo lo que creíamos eterno puede cambiar en un instante.",
    "Cada ser seguía su tarea, incansable, pero mi mirada buscaba escape."
  ],
  3: [
    "Gabriel sostenía los anillos con manos firmes. Cada uno tenía un propósito, y mi presencia allí parecía un error afortunado.",
    "Entre el brillo y el silencio, decidí que prefería lo desconocido, aunque fuera el infierno."
  ],
  4: [
    "Al final, entendí que la vida y la muerte son solo capítulos de un libro que nunca termina.",
    "Preferí volver a mi cuerpo, pero con un miedo y fascinación que me acompañará siempre."
  ]
};

// Seleccionamos todos los botones
const optionButtons = document.querySelectorAll(".option-btn");

// Seleccionamos el contenedor de cards
const cardsContainer = document.querySelector(".col-12.col-lg-9 .row.g-4");

optionButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const section = btn.dataset.section;
    const texts = sections[section];

    // Limpiar contenido actual
    cardsContainer.innerHTML = "";

    // Crear nuevas cards
    texts.forEach(text => {
      const col = document.createElement("div");
      col.className = "col-12 col-md-6 col-lg-6";

      const card = document.createElement("div");
      card.className = "card h-100 shadow-sm";

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const p = document.createElement("p");
      p.className = "card-text text-justify";
      p.textContent = text;

      cardBody.appendChild(p);
      card.appendChild(cardBody);
      col.appendChild(card);

      cardsContainer.appendChild(col);
    });
  });
});
