const textSize = document.querySelector('#text');

const inputSize = document.querySelector('#font-size-control');

inputSize.addEventListener('input', event => {
    textSize.style.fontSize = `${event.currentTarget.value}px`;
});