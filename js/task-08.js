const form = document.querySelector('.login-form');
const userData = {
    email: '',
    password: '',
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const { elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!');
    }
    userData.email = email.value;
    userData.password = password.value;
    console.log(userData);
    event.currentTarget.reset();

});






// const formEl = document.querySelector('.login-form')
// let userData = {};

// formEl.addEventListener('submit', onSendForm)

// function onSendForm(event) {
//     event.preventDefault();
//     const { elements: { email, password }
// } = event.currentTarget
//     if (email.value.trim() === '' || password.value.trim() === '') {
//         alert('Увага! Всі поля повинні бути заповнені!')
//     }
//     else {
//         const formData = new FormData(event.currentTarget);
//         formData.forEach((value, name) => { 
//             userData[name] = value;
//         })
//         console.log(userData);
//         return formEl.reset()
//     }
// }
