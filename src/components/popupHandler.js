import {
    popupImgView,
    fullScreenImg,
    fullScreenImgCapture,
    userNameInput,
    userDescInput
} from './data.js';
import {lockScrollY, unlockScrollY} from './scrollControl.js'
import {enableDeleteBtn} from "./card";

export function openPopup(el, card, id) {
    el.classList.add('pop-up_opened');
    lockScrollY();
    if(card){
        enableDeleteBtn(card, id);
    }
}

export function closePopup(el) {
    el.classList.remove('pop-up_opened');
    unlockScrollY();
}

export function updatePlaceholders(name, title){
    userNameInput.placeholder = name;
    userDescInput.placeholder = title;
}

// Image view

export function renderPicture(name, link) {
    openPopup(popupImgView);
    fullScreenImg.src = link;
    fullScreenImg.alt = name;
    fullScreenImgCapture.textContent = name;
}

//UX Show Form Processing

export function renderProcessing(isProcessing, popup){
    const popupBtn = popup.querySelector('.pop-up__submit-btn');
    if(isProcessing){
        popupBtn.textContent = 'Сохранение';
    } else {
        popupBtn.textContent = 'Сохранить';
    }
}