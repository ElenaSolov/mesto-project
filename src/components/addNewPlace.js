import {newPlaceNameInput, newPlaceLinkInput, profileAddForm, popupAdd} from './data.js';
import {closePopup} from './popupHandler.js';
import {updateCards} from "./api.js";

export function addFormHandler(evt) {
    evt.preventDefault();
    const newCardName = newPlaceNameInput.value;
    const newCardLink= newPlaceLinkInput.value;
    updateCards(newCardName, newCardLink);
    profileAddForm.reset();
    closePopup(popupAdd);
}
