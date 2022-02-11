const listItem = document.querySelectorAll(".item");
console.log("Number of categories",listItem.length);

  listItem.forEach(function (item) {
    console.log("\n Category: ", item.firstElementChild.textContent);
    console.log("Elements: ", item.querySelector('ul').children.length);
  })

  /*Напиши скрипт который:

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка 
элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).*/