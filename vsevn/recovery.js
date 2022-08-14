let sendBtn = document.querySelector('.recovery__form button');
let input = document.querySelector('.recovery__form input');

let err = document.querySelector('.recovery__error');

sendBtn.addEventListener('click', e => {
    e.preventDefault();
    console.log(validateEmail(input.value));
    if (validateEmail(input.value)) {
        err.innerText = 'Неправильный адрес электронной почты';
    } else {
        err.innerText = 'Пользователь с указанным E-mail не найден';
    }
});

let regexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const validateEmail = (email) => {
    return regexp.test(email.toString());
  };