import {newPlaceNameInput, newPlaceLinkInput, profileAddForm, popupAdd} from './data.js';
import {createNewCard} from './cardHandler.js';
import {initialCards} from "./renderInitialCards.js";
import {renderCard} from "./cardHandler.js";
import {closePopup} from './popupHandler.js';

export function addFormHandler(evt) {
    evt.preventDefault();
    const newPlace = {
        name: newPlaceNameInput.value,
        link: newPlaceLinkInput.value
    };
    if (newPlace.name && newPlace.link) {
        initialCards.unshift(newPlace);
        const newCardEl = createNewCard(newPlace.name, newPlace.link);
        renderCard(newCardEl);
        profileAddForm.reset();
    }
    closePopup(popupAdd);
}
