const listItem = document.querySelectorAll(".item");
console.log("Number of categories",listItem.length);

for (const item of listItem) {
    let category = item.querySelector('h2');
    console.log("\n Category: ",category.textContent);

    let elements = item.querySelector('ul');
    console.log("Elements: ", elements.children.length);
  }


  /*Напиши скрипт который:

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка 
элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).*/