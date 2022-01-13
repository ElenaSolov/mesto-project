import {newPlaceNameInput, newPlaceLinkInput, profileAddForm, popupAdd} from './data.js';
import {createNewCard} from './card.js';
import {renderCard} from "./card.js";
import {closePopup} from './popupHandler.js';
import {initialCards} from "./data.js";

export function addFormHandler(evt) {
    evt.preventDefault();
    const newPlace = {
        name: newPlaceNameInput.value,
        link: newPlaceLinkInput.value
    };
        initialCards.unshift(newPlace);
        const newCardEl = createNewCard(newPlace.name, newPlace.link);
        renderCard(newCardEl);
        profileAddForm.reset();
        closePopup(popupAdd);
}
