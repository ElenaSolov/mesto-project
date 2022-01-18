import {avatarPopup, avatarInput, avatarPicture, avatarForm} from "./data.js";
import {closePopup} from "./popupHandler.js";
import {updateAvatar} from "./api.js";

export function changeAvatar(evt){
    evt.preventDefault();
    const newAvatarLink = avatarInput.value;
    updateAvatar(newAvatarLink);
    closePopup(avatarPopup);
    renderAvatar(newAvatarLink);
    avatarForm.reset();
}

function renderAvatar(link) {
    avatarPicture.src = link;
}