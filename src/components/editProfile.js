import {userNameInput, userDescInput, popupEdit, userName, userTitle} from './data.js';
import {closePopup, updatePlaceholders} from './popupHandler.js';
import {updateUserInfo} from './api.js'

export function editFormHandler(evt) {
    evt.preventDefault();
    const userNameVal = userNameInput.value;
    const userDescVal = userDescInput.value;
    updateUserInfo(userNameVal, userDescVal);
    updateProfileData(userNameVal, userDescVal);
    updatePlaceholders(userNameVal, userDescVal, userNameInput, userDescInput);
    closePopup(popupEdit);
}

function updateProfileData (newName, newTitle) {
userName.textContent = newName;
userTitle.textContent = newTitle;
}