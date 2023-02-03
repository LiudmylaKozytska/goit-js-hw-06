const counter = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const decrementButtonClick = () => ((counterValue -= 1), (counter.textContent = counterValue));

const incrementButtonClick = () => ((counterValue += 1), (counter.textContent = counterValue));

decrementBtn.addEventListener('click', decrementButtonClick);
incrementBtn.addEventListener('click', incrementButtonClick);
