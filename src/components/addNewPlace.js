import {newPlaceNameInput, newPlaceLinkInput, profileAddForm, popupAdd} from './data.js';
import {closePopup, renderProcessing} from './popupHandler.js';
import {updateCards} from "./api.js";
import {disableSubmitBtn} from "./validate.js";
import {createNewCard, renderCard} from "./card";

export function handleAddFormSubmit() {
    renderProcessing(true, profileAddForm);
    const newCardName = newPlaceNameInput.value;
    const newCardLink= newPlaceLinkInput.value;
    updateCards(newCardName, newCardLink)
        .then(card=> {
        const newCardEl = createNewCard(card.name, card.link, card.likes.length, false, true, card._id);
        renderCard(newCardEl, false);
        profileAddForm.reset();
        disableSubmitBtn(profileAddForm.querySelector('.pop-up__submit-btn'), 'pop-up__submit-btn_inactive');
    })
        .catch((err) => console.log(err))
        .finally(()=> {closePopup(popupAdd);
            renderProcessing(false, profileAddForm);})

}
