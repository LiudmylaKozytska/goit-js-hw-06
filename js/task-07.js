const textSize = document.querySelector('#text');

const inputSize = document.querySelector('#font-size-control');

textSize.style.fontSize = inputSize.value + 'px';

inputSize.addEventListener('input', event => {
    textSize.style.fontSize = `${event.currentTarget.value}px`;
});