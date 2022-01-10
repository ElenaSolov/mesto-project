import {page, newCardTemplate} from './data.js';
import {initialCards} from './renderInitialCards.js';
import {renderPicture} from './popupHandler.js'

const cardsList = page.querySelector('.elements__list');

export function createNewCard(name, link) {
    const newCard = newCardTemplate.querySelector('.element').cloneNode(true);
    const cardImg = newCard.querySelector('.element__img');
    cardImg.src = link;
    cardImg.alt = name.toString();
    cardImg.addEventListener('click', () => renderPicture(name, link));
    newCard.querySelector('.element__text').textContent = name.toString();
    return newCard;
}

export function renderCard(cardEl) {
    cardsList.prepend(cardEl);
}

// Delete card

export function deleteCardHandler(evt) {
    const card = evt.target.closest('.element');
    card.remove();
    const cardUrl = card.querySelector('.element__img').src;
    const cardIndex = initialCards.findIndex(cardObj => cardObj.link === cardUrl);
    if (cardIndex !== -1) {
        initialCards.splice(cardIndex, 1);
    }
}