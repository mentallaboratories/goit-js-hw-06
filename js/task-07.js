const inputEl = document.querySelector('#font-size-control');
const outputEl = document.querySelector('#text');


console.log(outputEl.textContent);

inputEl.addEventListener('input', onInput);

function onInput(event){
  
    outputEl.style.fontSize = event.currentTarget.value+"px";
   
}