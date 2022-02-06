const validationInputEl = document.querySelector('#validation-input');

function testValidationInput(ev) { 

 console.log(validationInputEl.getAttribute('data-length'));

    if (ev.target.value.length === Number(validationInputEl.getAttribute('data-length')))
    {
       
        ev.target.classList.add('valid');
        ev.target.classList.remove('invalid');
    }
    else {
        ev.target.classList.add('invalid');
        ev.target.classList.remove('valid');
    }
}

validationInputEl.addEventListener('blur', testValidationInput);


/*Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.*/