import {avatarPopup, avatarInput, avatarPicture, avatarForm, errorPopup} from "./data.js";
import {closePopup, openPopup, renderProcessing} from "./popupHandler.js";
import {updateAvatar} from "./api.js";
import {disableSubmitBtn} from "./validate.js";

export function changeAvatar(){
  renderProcessing(true, avatarPopup);
  const newAvatarLink = avatarInput.value;
  updateAvatar(newAvatarLink)
    .then(data=>{
      renderAvatar(data.avatar);
      closePopup(avatarPopup);
      avatarForm.reset();
      renderProcessing(false, avatarPopup);
      disableSubmitBtn(avatarPopup.querySelector('.pop-up__submit-btn'), 'pop-up__submit-btn_inactive');
    })
    .catch(err => {
      console.log(err);
      openPopup(errorPopup);
    })
    }

function renderAvatar(link) {
  avatarPicture.src = link;
}