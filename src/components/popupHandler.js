import {
    popupImgView,
    fullScreenImg,
    fullScreenImgCapture,
    userNameInput,
    userDescInput, page, profileAddBtn, profileEditBtn, popupEdit, popupAdd, avatarEl, avatarPopup
} from './data.js';
import {lockScrollY, unlockScrollY} from './scrollControl.js'

export function enablePopupListeners() {
    profileEditBtn.addEventListener('click', ()=> openPopup(popupEdit));
    profileAddBtn.addEventListener('click', ()=> openPopup(popupAdd));
    avatarEl.addEventListener('click', ()=> openPopup(avatarPopup));
    const popups = Array.from(page.querySelectorAll('.pop-up'));
    popups.forEach(popup => {
        popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('pop-up_opened')) {
                closePopup(popup)
            }
            if (evt.target.classList.contains('pop-up__close')) {
                closePopup(popup)
            }
        })
    })
}

export function openPopup(el) {
    el.classList.add('pop-up_opened');
    lockScrollY();
    document.addEventListener('keydown', keyPressHandler);
}

export function closePopup(el) {
    el.classList.remove('pop-up_opened');
    unlockScrollY();
    document.removeEventListener('keydown', keyPressHandler);
}

export function updateEditFormValues(name, title){
    userNameInput.value = name;
    userDescInput.value = title;
}

function keyPressHandler(evt) {
    if (evt.key === 'Escape') {
        const popup = page.querySelector('.pop-up_opened');
        console.log(popup)
        closePopup(popup);
    }
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
        popupBtn.textContent = 'Сохранение...';
    } else {
        popupBtn.textContent = 'Сохранить';
    }
}