import {page, newCardTemplate, deleteConfirmationPopup, deleteConfirmationBtn} from './data.js';
import {closePopup, renderPicture} from './popupHandler.js'
import {deleteCardFromServer} from "./api";

const cardsList = page.querySelector('.elements__list');

export function createNewCard(name, link, likes, deletable = false, cardId) {
    console.log(cardId)
    const newCard = newCardTemplate.querySelector('.element').cloneNode(true);
    const cardImg = newCard.querySelector('.element__img');
    cardImg.src = link;
    cardImg.alt = name.toString();
    cardImg.addEventListener('click', () => renderPicture(name, link));
    newCard.querySelector('.element__text').textContent = name.toString();
    newCard.querySelector('.element__likes-number').textContent = likes;
    if(deletable) {
        const deleteBtn = newCard.querySelector('.element__delete');
        deleteBtn.classList.add('element__delete_active');
        deleteConfirmationBtn.addEventListener('click', ()=> deleteCardHandler(newCard, cardId));
    }
    return newCard;
}

export function renderCard(cardEl, append) {
    if(append) {
        cardsList.append(cardEl);
    } else {
        cardsList.prepend(cardEl);
    }
}

// Delete card

export function deleteCardHandler(targetCard, cardId) {
    targetCard.remove();
    deleteCardFromServer(cardId);
    closePopup(deleteConfirmationPopup);
}