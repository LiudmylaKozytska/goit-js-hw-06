function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxCollection = document.querySelector('#boxes');

function createBoxes(amount) {
  amount = Number(input.value);
  const boxArr = [];
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = 20 + i * 10 + 'px';
    box.style.height = 20 + i * 10 + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxArr.push(box);
  }
  boxCollection.append(...boxArr);
}

function clearBoxes() {
  boxCollection.innerHTML = '';
  input.value = '';
} 

createBtn.addEventListener('click', createBoxes);

destroyBtn.addEventListener('click', clearBoxes);
