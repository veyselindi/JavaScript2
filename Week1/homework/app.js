'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'lord_of_the_rings',
    'life_is_good',
    'ww_1',
    'ww_2',
    'econ_101',
    'international_relations',
    'toyota_mechanics',
    'popular_mechanics',
    'arab_spring',
  ];
  console.log(bookTitles);

  const newUl = document.createElement('ul');
  bookTitles.forEach(book => {
    const listItem = document.createElement('li');
    const itemText = document.createTextNode(book);
    listItem.appendChild(itemText);
    newUl.appendChild(listItem);
  });

  console.log(newUl);

  bookTitles.title;
}
