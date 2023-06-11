const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const liEl = document.createElement("li");

liEl.classList.add("ingredients-item");

const markup = ingredients
  .map((ingredient) => `<li class="ingredients-item">${ingredient}<li>`)
  .join("");

console.log(markup);
ingredients.innerHTML = markup;