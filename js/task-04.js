////////make buttons
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');


////////set value
let counterValue = 0;
const valueEl = document.querySelector('#value');
//valueEl.textContent = counterValue;
valueEl.textContent = counterValue;

//////set event functions
const onDecrBtnClick = () => {counterValue -= 1;  return valueEl.textContent = counterValue};
const onIncrBtnClick = () => { counterValue += 1; return valueEl.textContent = counterValue};

///////add listeners

decrBtn.addEventListener('click', onDecrBtnClick);
incrBtn.addEventListener('click', onIncrBtnClick);
 
