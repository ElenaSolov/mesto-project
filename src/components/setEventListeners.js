import {openPopup, closePopup} from './popupHandler.js';
import {likesHandler} from './card.js';
import {
    popupEdit,
    popupAdd,
    page,
    avatarPopup} from './data.js';

export function windowClickHandler (evt) {
    if (evt.target.classList.contains('profile__edit-btn')) {
        openPopup(popupEdit);
    } else if (evt.target.classList.contains('profile__add-btn')) {
        openPopup(popupAdd);
    } else if (evt.target.classList.contains('pop-up__close')) {
        closePopup(evt.target.closest('.pop-up'));
    } else if (evt.target.classList.contains('pop-up_opened')) {
        closePopup(evt.target);
    } else if(evt.target.classList.contains('profile__avatar-container')){
        openPopup(avatarPopup);
    }
}

export function keyPressHandler (evt) {
    if(evt.key==='Escape'){
        const popUpEl = page.querySelector('.pop-up_opened');
        if (popUpEl) closePopup(popUpEl);
    }
}

