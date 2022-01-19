import {avatarPopup, avatarInput, avatarPicture, avatarForm} from "./data.js";
import {closePopup, renderProcessing} from "./popupHandler.js";
import {updateAvatar} from "./api.js";

export function changeAvatar(evt){
    evt.preventDefault();
    renderProcessing(true, avatarPopup);
    const newAvatarLink = avatarInput.value;
    updateAvatar(newAvatarLink);
    closePopup(avatarPopup);
    renderAvatar(newAvatarLink);
    avatarForm.reset();
    renderProcessing(false, avatarPopup);
}

function renderAvatar(link) {
    avatarPicture.src = link;
}