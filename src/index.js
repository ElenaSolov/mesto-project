import './styles/index.css';

import {validationSettings} from "./components/data.js";
import {renderInitialCards, getUserData} from './components/api.js';
import {profileEditForm, profileAddForm} from './components/data.js';
import {editFormHandler} from './components/editProfile.js';
import {addFormHandler} from './components/addNewPlace.js';
import {windowClickHandler, keyPressHandler} from './components/setEventListeners.js';
import {enableValidation} from './components/validate.js';


//RENDER PROFILE
getUserData();
// RENDER INITIAL CARDS
renderInitialCards();

// EDIT PROFILE
profileEditForm.addEventListener('submit', editFormHandler)

// ADD NEW PLACE
profileAddForm.addEventListener('submit', addFormHandler);

// Eventlistener

window.addEventListener('click', windowClickHandler);
window.addEventListener('keyup', keyPressHandler);

 // Form validation
enableValidation(validationSettings);
