import {openPopup, closePopup} from './popupHandler.js';
import {deleteCardHandler} from './card.js';
import {popupEdit, popupAdd, popupImgView, page} from './data.js';


export function windowClickHandler (evt) {
    if (evt.target.classList.contains('profile__edit-btn')) {
        openPopup(popupEdit);
    } else if (evt.target.classList.contains('profile__add-btn')) {
        openPopup(popupAdd);
    } else if (evt.target.classList.contains('pop-up__close_place_edit')) {
        closePopup(popupEdit);
    } else if (evt.target.classList.contains('pop-up__close_place_add')){
        closePopup(popupAdd);
    } else if (evt.target.classList.contains('pop-up__close_place_img')){
        closePopup(popupImgView);
    } else if (evt.target.classList.contains('pop-up_opened')) {
        closePopup(evt.target);
    } else if (evt.target.classList.contains('element__delete')) {
        deleteCardHandler(evt);
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