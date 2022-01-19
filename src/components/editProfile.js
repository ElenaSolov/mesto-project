import {userNameInput, userDescInput, popupEdit, userName, userTitle} from './data.js';
import {closePopup, renderProcessing, updatePlaceholders} from './popupHandler.js';
import {updateUserInfo} from './api.js'

export function editFormHandler(evt) {
    evt.preventDefault();
    renderProcessing(true, popupEdit);
    const userNameVal = userNameInput.value;
    const userDescVal = userDescInput.value;
    updateUserInfo(userNameVal, userDescVal);
    updateProfileData(userNameVal, userDescVal);
    updatePlaceholders(userNameVal, userDescVal, userNameInput, userDescInput);
    closePopup(popupEdit);
    renderProcessing(false, popupEdit);
}

function updateProfileData (newName, newTitle) {
userName.textContent = newName;
userTitle.textContent = newTitle;
}