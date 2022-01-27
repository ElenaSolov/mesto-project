import {userNameInput, userDescInput, popupEdit, userName, userTitle, errorPopup} from './data.js';
import {closePopup, openPopup, renderProcessing, updateEditFormValues} from './popupHandler.js';
import {updateUserInfo} from './api.js'

export function handleEditFormSubmit() {
  renderProcessing(true, popupEdit);
  const userNameVal = userNameInput.value;
  const userDescVal = userDescInput.value;
  updateUserInfo(userNameVal, userDescVal)
    .then(()=> {
      updateProfileData(userNameVal, userDescVal);
      updateEditFormValues(userNameVal, userDescVal);
      closePopup(popupEdit);
      renderProcessing(false, popupEdit);
    })
    .catch(err => {
        openPopup(errorPopup);
        console.log(err);
    })
 }

function updateProfileData (newName, newTitle) {
  userName.textContent = newName;
  userTitle.textContent = newTitle;
}