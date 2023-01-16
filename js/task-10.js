const inputNumberOfBoxesEl = document.querySelector("#controls input");
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const containerEl = document.querySelector('#boxes');

console.log(containerEl);

console.log(createBtnEl);
console.log(destroyBtnEl);


inputNumberOfBoxesEl.addEventListener('input',getAmount) 
createBtnEl.addEventListener('click',createBoxes);
destroyBtnEl.addEventListener('click', (event)=>{containerEl.innerHTML = ''; boxesElArray = []})


let amount = 0;

function getAmount(event){
  
  amount = event.currentTarget.value; 
  console.log(amount); 
  return amount};

let boxesElArray = [];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};



function createBoxes(event){

  let w = 30;
  let h = 30;

  if (amount !== 0){
    const div = document.createElement("div");
    div.style.width = `${w}px`;
    div.style.height = `${h}px`;
    div.style.backgroundColor = getRandomHexColor();
    console.log(div);
    boxesElArray.push(div);

  for (let i = 1; i<amount; i++){
    w += 10;
    h += 10;

    const div = document.createElement("div");
    div.style.width = `${w}px`;
    div.style.height = `${h}px`;
    div.style.backgroundColor = getRandomHexColor();
    console.log(div);
    boxesElArray.push(div);
 }
};

 containerEl.append(...boxesElArray);
 console.log(boxesElArray);
};








