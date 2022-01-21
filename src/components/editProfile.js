import {userNameInput, userDescInput, popupEdit, userName, userTitle} from './data.js';
import {closePopup, renderProcessing, updateEditFormValues} from './popupHandler.js';
import {updateUserInfo} from './api.js'

export function handleEditFormSubmit(evt) {
    // evt.preventDefault();
    renderProcessing(true, popupEdit);
    const userNameVal = userNameInput.value;
    const userDescVal = userDescInput.value;
    updateUserInfo(userNameVal, userDescVal)
        .then(()=> {
            updateProfileData(userNameVal, userDescVal);
            updateEditFormValues(userNameVal, userDescVal);
        }).catch((err) => {
            closePopup(popupEdit);
            console.log(err);
        })
        .finally(()=>{
            closePopup(popupEdit);
            renderProcessing(false, popupEdit);
        });

}

function updateProfileData (newName, newTitle) {
userName.textContent = newName;
userTitle.textContent = newTitle;
}