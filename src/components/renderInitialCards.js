import {createNewCard} from './card.js';
import {renderCard} from './card.js';
import {initialCards} from "./data.js";

export function renderInitialCards(cards) {
    cards.forEach(card => {
        const newCardEl = createNewCard(card.name, card.link);
        renderCard(newCardEl);
    })
}