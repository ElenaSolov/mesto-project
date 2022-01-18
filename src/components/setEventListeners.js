import {openPopup, closePopup} from './popupHandler.js';
import {deleteCardHandler} from './card.js';
import {popupEdit, popupAdd, popupImgView, page, deleteConfirmationPopup} from './data.js';


export function windowClickHandler (evt) {
    if (evt.target.classList.contains('profile__edit-btn')) {
        openPopup(popupEdit);
    } else if (evt.target.classList.contains('profile__add-btn')) {
        openPopup(popupAdd);
    } else if (evt.target.classList.contains('pop-up__close')) {
        closePopup(evt.target.closest('.pop-up'));
    } else if (evt.target.classList.contains('pop-up_opened')) {
        closePopup(evt.target);
    } else if (evt.target.classList.contains('element__delete')) {
        openPopup(deleteConfirmationPopup);
    } else if (evt.target.classList.contains('pop-up__submit-btn_place_confirmation')) {

    } else if (evt.target.classList.contains('element__like')) {
        evt.target.classList.toggle('element__like_active');
    }
}

export function keyPressHandler (evt) {
    if(evt.key==='Escape'){
        const popUpEl = page.querySelector('.pop-up_opened');
        if (popUpEl) closePopup(popUpEl);
    }
}