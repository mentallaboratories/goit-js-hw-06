const inputEl = document.querySelector('input');

const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event)=>{return nameEl.textContent = event.currentTarget.value;})



//nameEl.textContent = inputEl.value;

