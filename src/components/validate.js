import {validationSettings} from "./data.js";

export function enableValidation (validationSettings) {
    const formList = Array.from(document.querySelectorAll(validationSettings.formSelector))	;
    formList.forEach(formElement => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    })
}

function setEventListeners (form) {
    const inputList = Array.from(form.querySelectorAll(validationSettings.inputSelector));
    const submitBtn = form.querySelector(validationSettings.submitBtnSelector);
    inputList.forEach(input => {
        input.addEventListener('input', ()=> {
            checkInputValidity(form, input);
            toggleBtnState(inputList, submitBtn);
        })
    })
}
function toggleBtnState (inputList, submitBtn) {
    if(hasInvalidInput(inputList)) {
        submitBtn.classList.add(validationSettings.inactiveBtnClass);
        submitBtn.setAttribute('disabled', '');
    } else {
        submitBtn.classList.remove(validationSettings.inactiveBtnClass);
        submitBtn.removeAttribute('disabled');
    }
}

function checkInputValidity(form, input) {
    if (!input.validity.valid) {
        showInputError(form, input, input.validationMessage);

    } else {
        hideInputError(form, input);
    }
}

function showInputError(form, input, errorMessage) {
    const errorElement = form.querySelector(`.pop-up__input-error_place_${input.id}`);
    input.classList.add(validationSettings.inputErrorClass);
   errorElement.textContent = errorMessage;
    errorElement.classList.add(validationSettings.errorClass);
}

function hideInputError(form, input) {
    const errorElement = form.querySelector(`.pop-up__input-error_place_${input.id}`);
    input.classList.remove(validationSettings.inputErrorClass);
    errorElement.classList.remove(validationSettings.errorClass);
}

function hasInvalidInput (inputList){
    return inputList.some(input => !input.validity.valid);
}