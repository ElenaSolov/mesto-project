export function enableValidation () {
    const formList = Array.from(document.querySelectorAll('.pop-up__form'))	;
    formList.forEach(formElement => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    })
}

function setEventListeners (form) {
    const inputList = Array.from(form.querySelectorAll('.pop-up__input'));
    const submitBtn = form.querySelector('.pop-up__submit-btn');
    toggleBtnState(inputList, submitBtn);
    inputList.forEach(input => {
        input.addEventListener('input', ()=> {
            checkInputValidity(form, input);
            toggleBtnState(inputList, submitBtn);
        })
    })
}
function toggleBtnState (inputList, submitBtn) {
    if(hasInvalidInput(inputList)) {
        submitBtn.classList.add('pop-up__submit-btn_inactive');
        submitBtn.setAttribute('disabled', '');
    } else {
        submitBtn.classList.remove('pop-up__submit-btn_inactive');
        submitBtn.removeAttribute('disabled');
    }
}

function checkInputValidity(form, input) {
    if (!input.validity.valid) {
        showInputError(form, input);

    } else {
        hideInputError(form, input);
    }
}

function showInputError(form, input) {
    const errorElement = form.querySelector(`.pop-up__input-error_place_${input.id}`);
    input.classList.add('pop-up__input_invalid');
    if(input.value<2||input.value>40) {
        errorElement.textContent = `Введите от 2 до ${input.pattern.slice(4, -1)} символов`;
    }
    if(input.type==='email') errorElement.textContent = 'Введите адрес сайта.';
    errorElement.classList.add('pop-up__input-error_active');
}

function hideInputError(form, input) {
    const errorElement = form.querySelector(`.pop-up__input-error_place_${input.id}`);
    input.classList.remove('pop-up__input_invalid');
    errorElement.classList.remove('pop-up__input-error_active');
}

function hasInvalidInput (inputList){
    return inputList.some(input => !input.validity.valid);
}