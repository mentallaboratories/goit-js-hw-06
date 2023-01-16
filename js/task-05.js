const inputEl = document.querySelector('input');
const nameEl = document.querySelector('#name-output');
const nameDefault = nameEl.textContent;

inputEl.addEventListener('input', setName);


function setName(event)
{
    if (event.currentTarget.value === ''){
         nameEl.textContent = nameDefault;
    } else {
     nameEl.textContent = event.currentTarget.value;
    }
}

