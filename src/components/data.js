export const page = document.querySelector('.page');
export const popupEdit = page.querySelector('.pop-up_type_edit-profile');


export const profileEditForm = page.querySelector('.pop-up__form_place_edit');
export const userNameInput = page.querySelector('#heading');
export const userDescInput = page.querySelector('#subheading');
export const userName = page.querySelector('.profile__name');
export const userTitle = page.querySelector('.profile__subline');

export const profileAddForm = page.querySelector('.pop-up__form_place_add');
export const popupAdd = page.querySelector('.pop-up_type_add-card');
export const newPlaceNameInput = page.querySelector('#place');
export const newPlaceLinkInput = page.querySelector('#url');
export const newCardTemplate = page.querySelector('#card-template').content;


export const popupImgView = page.querySelector('.pop-up_type_img');
export const fullScreenImg = popupImgView.querySelector('.pop-up__img');
export const fullScreenImgCapture = popupImgView.querySelector('.pop-up__caption');

export const validationSettings = {
    formSelector: '.pop-up__form',
    inputSelector: '.pop-up__input',
    submitBtnSelector: '.pop-up__submit-btn',
    inactiveBtnClass: 'pop-up__submit-btn_inactive',
    inputErrorClass: 'pop-up__input_invalid',
    errorClass: 'pop-up__input-error_active'
}

export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];