//Напиши скрипт, який для кожного елемента масиву ingredients:

//Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.getElementById('ingredients');

for (const ingredient of ingredients){

const liEl = document.createElement('li');
 liEl.textContent = ingredient;
  liEl.classList.add("item");
 ulEl.appendChild(liEl);

}



// const listContent = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");
// ulEl.insertAdjacentHTML("beforeend" ,listContent);
