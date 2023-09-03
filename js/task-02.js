const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const elements = [];

ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add("item");
  elements.push(li);
});

list.append(...elements);

console.dir(list);






// const list = document.querySelector("#ingredients");
// const markup = ingredients.map(ingredient => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   list.appendChild(li)
// });

// console.log(list)



// const list = document.querySelector("#ingredients");

// ingredients.forEach(ingredient => {
//   const li = document.createElement('li');
//   li.textContent = ingredient;
//   li.classList.add("item");
//   list.appendChild(li);
// });

// console.dir(list);