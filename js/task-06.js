const inputTextValidation = document.querySelector('#validation-input');

inputTextValidation.addEventListener('blur', event => {
    if (inputTextValidation.value.trim().length === Number(inputTextValidation.dataset.length)) {
        inputTextValidation.classList.remove('invalid');
        return inputTextValidation.classList.add('valid');
    }
    inputTextValidation.classList.remove('valid');
    return inputTextValidation.classList.add('invalid');
})

console.log(inputTextValidation);

