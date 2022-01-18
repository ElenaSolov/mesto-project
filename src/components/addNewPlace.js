import {newPlaceNameInput, newPlaceLinkInput, profileAddForm, popupAdd} from './data.js';
import {createNewCard} from './card.js';
import {renderCard} from "./card.js";
import {closePopup} from './popupHandler.js';
import {updateCards} from "./api.js";

export function addFormHandler(evt) {
    evt.preventDefault();
    const newCardName = newPlaceNameInput.value;
    const newCardLink= newPlaceLinkInput.value;
        updateCards(newCardName, newCardLink);
        const newCardEl = createNewCard(newCardName, newCardLink, 0, true);
        renderCard(newCardEl, false);
        profileAddForm.reset();
        closePopup(popupAdd);
}
