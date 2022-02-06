const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const presentValue = () => { 
    if (inputEl.value === '') {
        return outputEl.textContent = 'Anonymous';
    }
    return outputEl.textContent = inputEl.value;
};

inputEl.addEventListener('input', presentValue);



/*Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>*/