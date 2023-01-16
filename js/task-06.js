const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.dataset.length;
console.log();

inputEl.addEventListener('blur', onInputBlur);


function onInputBlur(event){
    let valueLength = event.currentTarget.value.length;
    event.currentTarget.classList.remove('valid', 'invalid');
    if (`${valueLength}` === dataLength) {
        event.currentTarget.classList.add('valid');
    } else {
        
        event.currentTarget.classList.add('invalid');
    }
    
};

