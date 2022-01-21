
export function enableValidation (validationSettings) {
    const formList = Array.from(document.querySelectorAll(validationSettings.formSelector))	;
    formList.forEach(formElement => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, validationSettings);
    })
}

function setEventListeners (form, validationSettings) {
    const inputList = Array.from(form.querySelectorAll(validationSettings.inputSelector));
    const submitBtn = form.querySelector(validationSettings.submitBtnSelector);
    toggleBtnState(inputList, submitBtn, validationSettings);
    inputList.forEach(input => {
        input.addEventListener('input', ()=> {
            checkInputValidity(form, input, validationSettings);
            toggleBtnState(inputList, submitBtn, validationSettings);
        })
    })
}
function toggleBtnState (inputList, submitBtn, validationSettings) {
    if(hasInvalidInput(inputList)) {
        disableSubmitBtn(submitBtn, validationSettings.inactiveBtnClass);
    } else {
        submitBtn.classList.remove(validationSettings.inactiveBtnClass);
        submitBtn.removeAttribute('disabled');
    }
}

function checkInputValidity(form, input, validationSettings) {
    if (!input.validity.valid) {
        showInputError(form, input, input.validationMessage, validationSettings);

    } else {
        hideInputError(form, input, validationSettings);
    }
}

function showInputError(form, input, errorMessage, validationSettings) {
    const errorElement = form.querySelector(`.pop-up__input-error_place_${input.id}`);
    input.classList.add(validationSettings.inputErrorClass);
   errorElement.textContent = errorMessage;
    errorElement.classList.add(validationSettings.errorClass);
}

function hideInputError(form, input, validationSettings) {
    const errorElement = form.querySelector(`.pop-up__input-error_place_${input.id}`);
    input.classList.remove(validationSettings.inputErrorClass);
    errorElement.classList.remove(validationSettings.errorClass);
}

function hasInvalidInput (inputList){
    return inputList.some(input => !input.validity.valid);
}

export function disableSubmitBtn(submitBtn, inactiveBtnClass){
    submitBtn.classList.add(inactiveBtnClass);
    submitBtn.setAttribute('disabled', '');
}