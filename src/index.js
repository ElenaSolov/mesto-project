import './styles/index.css';

import {avatarPopup, profileAddForm, profileEditForm, validationSettings, } from "./components/data.js";
import {renderInitialCards, getUserData} from './components/api.js';
import {enableValidation} from './components/validate.js';
import {editFormHandler} from "./components/editProfile.js";
import {changeAvatar} from "./components/changeAvatar.js";
import {addFormHandler} from "./components/addNewPlace.js";
import {keyPressHandler, windowClickHandler} from "./components/setEventListeners.js";


//RENDER PROFILE
getUserData();

// RENDER INITIAL CARDS
renderInitialCards();


 // FORM VALIDATION
enableValidation(validationSettings);

// EDIT PROFILE
profileEditForm.addEventListener('submit', editFormHandler);

//EDIT AVATAR
avatarPopup.addEventListener('submit', changeAvatar);

// ADD NEW PLACE
profileAddForm.addEventListener('submit', addFormHandler);

// EVENTLISTENERS

window.addEventListener('click', windowClickHandler);
window.addEventListener('keyup', keyPressHandler);