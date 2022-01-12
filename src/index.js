import './styles/index.css';

import {initialCards, renderInitialCards} from '../components/renderInitialCards.js';
import {profileEditForm, profileAddForm} from '../components/data.js';
import {editFormHandler} from '../components/editProfile.js';
import {addFormHandler} from '../components/addNewPlace.js';
import {windowClickHandler, keyPressHandler} from '../components/setEventListeners.js';
import {enableValidation} from '../components/validate.js';

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
