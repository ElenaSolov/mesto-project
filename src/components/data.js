export const page = document.querySelector('.page');
export const popupEdit = page.querySelector('.pop-up_type_edit-profile');
export const profileEditBtn = page.querySelector('.profile__edit-btn');

export const cardsList = page.querySelector('.elements__list');

export const profileEditForm = page.querySelector('.pop-up__form_place_edit');
export const userNameInput = page.querySelector('#heading');
export const userDescInput = page.querySelector('#subheading');
export const userName = page.querySelector('.profile__name');
export const userTitle = page.querySelector('.profile__subline');
export const userAvatar = page.querySelector('.profile__avatar');

export const profileAddForm = page.querySelector('.pop-up__form_place_add');
export const popupAdd = page.querySelector('.pop-up_type_add-card');
export const newPlaceNameInput = page.querySelector('#place');
export const newPlaceLinkInput = page.querySelector('#url');
export const newCardTemplate = page.querySelector('#card-template').content;
export const profileAddBtn = page.querySelector('.profile__add-btn');

export const popupImgView = page.querySelector('.pop-up_type_img');
export const fullScreenImg = popupImgView.querySelector('.pop-up__img');
export const fullScreenImgCapture = popupImgView.querySelector('.pop-up__caption');

export const deleteConfirmationPopup = page.querySelector('.pop-up_type_confirm');
export const deleteConfirmationBtn = deleteConfirmationPopup.querySelector('.pop-up__submit-btn_place_confirmation');

export const avatarPopup = page.querySelector('.pop-up_type_avatar');
export const avatarForm = avatarPopup.querySelector('.pop-up__form_place_avatar');
export const avatarInput = avatarForm.querySelector('#avatar-url');
export const avatarPicture = page.querySelector('.profile__avatar');
export const avatarEl = page.querySelector('.profile__avatar-container');

export const validationSettings = {
    formSelector: '.pop-up__form',
    inputSelector: '.pop-up__input',
    submitBtnSelector: '.pop-up__submit-btn',
    inactiveBtnClass: 'pop-up__submit-btn_inactive',
    inputErrorClass: 'pop-up__input_invalid',
    errorClass: 'pop-up__input-error_active'
}

export const config = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort-6',
    headers: {
        authorization: '791f7307-c481-4d9c-81d1-c554dbe0a5da',
        'Content-Type': 'application/json'
    }
}

export const deleteHandlers = [];


