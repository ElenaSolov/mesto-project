import '../styles/index.css';
import {
  avatarPopup, errorPopup,
  profileAddForm,
  profileEditForm,
  userAvatar,
  userName,
  userTitle,
  validationSettings,
} from "./data.js";
import {renderInitialCards, getUserData} from './api.js';
import {enableValidation} from './validate.js';
import {handleEditFormSubmit} from "./editProfile.js";
import {changeAvatar} from "./changeAvatar.js";
import {handleAddFormSubmit} from "./addNewPlace.js";
import {updateEditFormValues, enablePopupListeners, openPopup} from "./popupHandler.js";
import {checkIsLiked, createNewCard, renderCard} from "./card";


//RENDER PROFILE AND INITIAL CARDS
export let myId = '';

Promise.all([getUserData(), renderInitialCards()])
  .then(values => {
    myId = values[0]._id;
    userName.textContent = values[0].name;
    userTitle.textContent = values[0].about;
    userAvatar.src = values[0].avatar;
    updateEditFormValues(values[0].name, values[0].about);
    
    values[1].forEach(card => {
      let newCardEl;
      let isLiked = checkIsLiked(card);
      if(card.owner._id.startsWith(myId)){
        newCardEl = createNewCard(card.name, card.link, card.likes.length, isLiked,true, card._id);
      } else {
        newCardEl = createNewCard(card.name, card.link, card.likes.length, isLiked,false, card._id);
      }
      renderCard(newCardEl, true);
    });
  })
  .catch((err) => {
    console.log(err);
    openPopup(errorPopup);
  });


 // FORM VALIDATION
enableValidation(validationSettings);

// EDIT PROFILE
profileEditForm.addEventListener('submit', handleEditFormSubmit);

//EDIT AVATAR
avatarPopup.addEventListener('submit', changeAvatar);

// ADD NEW PLACE
profileAddForm.addEventListener('submit', handleAddFormSubmit);

// EVENT-LISTENERS
enablePopupListeners();
