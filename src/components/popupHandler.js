import {popupImgView, fullScreenImg, fullScreenImgCapture} from './data.js';
import {lockScrollY, unlockScrollY} from './scrollControl.js'

export function openPopup(el) {
    el.classList.add('pop-up_opened');
    lockScrollY();
}

export function closePopup(el) {
    el.classList.remove('pop-up_opened');
    unlockScrollY();

}

// Image view

export function renderPicture(name, link) {
    openPopup(popupImgView);
    fullScreenImg.src = link;
    fullScreenImg.alt = name;
    fullScreenImgCapture.textContent = name;
}