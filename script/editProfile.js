import {userNameInput, userDescInput, userName, userTitle, popupEdit} from './data.js';
import {closePopup} from "./popupHandler.js";


export function editFormHandler(evt) {
    evt.preventDefault();
    const userNameVal = userNameInput.value;
    const userDescVal = userDescInput.value;
    editProfile(userNameVal, userDescVal);
    closePopup(popupEdit);
}

export function editProfile(name, title) {
    if (name) userName.textContent = name;
    if (title) userTitle.textContent = title;
}