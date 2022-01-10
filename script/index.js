import {initialCards, renderInitialCards} from '../script/renderInitialCards.js';
import {profileEditForm, profileAddForm} from './data.js';
import {editFormHandler} from './editProfile.js';
import {addFormHandler} from './addNewPlace.js';
import {windowClickHandler, keyPressHandler} from './setEventListeners.js';
import {enableValidation} from './validate.js'

// RENDER INITIAL CARDS
renderInitialCards(initialCards);

// EDIT PROFILE
profileEditForm.addEventListener('submit', editFormHandler)

// ADD NEW PLACE
profileAddForm.addEventListener('submit', addFormHandler);

// Eventlistener

window.addEventListener('click', windowClickHandler);
window.addEventListener('keyup', keyPressHandler);

 // Form validation
enableValidation();
