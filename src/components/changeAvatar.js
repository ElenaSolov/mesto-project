import {avatarPopup, avatarInput, avatarPicture, avatarForm} from "./data.js";
import {closePopup, renderProcessing} from "./popupHandler.js";
import {updateAvatar} from "./api.js";
import {disableSubmitBtn} from "./validate.js";

export function changeAvatar(){
    renderProcessing(true, avatarPopup);
    const newAvatarLink = avatarInput.value;
    updateAvatar(newAvatarLink).then(data=>{
        renderAvatar(data.avatar);
        })
        .catch(err => console.log(err))
        .finally(()=> {
            closePopup(avatarPopup);
            avatarForm.reset();
            disableSubmitBtn(avatarPopup.querySelector('.pop-up__submit-btn'), 'pop-up__submit-btn_inactive');
            renderProcessing(false, avatarPopup)
        })
}

function renderAvatar(link) {
    avatarPicture.src = link;
}