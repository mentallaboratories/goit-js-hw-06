const categoriesEl = document.querySelector('#categories');
console.log('Number of categories:', categoriesEl.children.length);

const itemsNodes = categoriesEl.querySelectorAll('.item');

for (let i=0; i < categoriesEl.children.length; i++){
    const itemEl = itemsNodes[i];
    const categoryEl =itemEl.firstElementChild;
    const sublistEl =itemEl.lastElementChild;
    console.log('Category: ', categoryEl.textContent);
    console.log('Elements:', sublistEl.children.length);
};




