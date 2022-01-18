import {
    popupImgView,
    fullScreenImg,
    fullScreenImgCapture,
    userNameInput,
    userDescInput
} from './data.js';
import {lockScrollY, unlockScrollY} from './scrollControl.js'
import {deleteCardHandler} from "./card";

export function openPopup(el) {
    el.classList.add('pop-up_opened');
    lockScrollY();
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