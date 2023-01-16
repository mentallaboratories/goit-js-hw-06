const changeColorBtn = document.querySelector('.change-color');
const colorNameOutputEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onClick = (event)=>{
  let color = getRandomHexColor();
  colorNameOutputEl.textContent = color;
  bodyEl.style.backgroundColor = color;
  console.log(color);
}

changeColorBtn.addEventListener('click', onClick);

