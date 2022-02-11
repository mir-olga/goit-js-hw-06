const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const allItemsEl = ingredients.map((ingredient)=>{
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  return itemEl;
});


listEl.append(...allItemsEl);
console.log("list",listEl);





/*Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients.*/