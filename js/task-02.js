const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsAll = [];

ingredients.forEach((ingredient) => {
  const elemLi = document.createElement("li");
  elemLi.textContent = ingredient;
  elemLi.classList.add("item");
  ingredientsAll.push(elemLi);
});

const ingredientsAllItem = document.querySelector("#ingredients");
ingredientsAllItem.append(...ingredientsAll);

console.log(ingredientsAllItem);
