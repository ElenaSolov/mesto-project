import {newPlaceNameInput, newPlaceLinkInput, profileAddForm, popupAdd} from './data.js';
import {closePopup, renderProcessing} from './popupHandler.js';
import {updateCards} from "./api.js";

export function addFormHandler(evt) {
    evt.preventDefault();
    renderProcessing(true, profileAddForm);
    const newCardName = newPlaceNameInput.value;
    const newCardLink= newPlaceLinkInput.value;
    updateCards(newCardName, newCardLink);
    profileAddForm.reset();
    closePopup(popupAdd);
    renderProcessing(false, profileAddForm);
}
