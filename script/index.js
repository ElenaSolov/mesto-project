const page = document.querySelector('.page');
const profile = page.querySelector('.profile');
const cardsList = page.querySelector('.elements__list');

const popupEdit = page.querySelector('.pop-up_type_edit-profile');
const profileEditForm = page.querySelector('.pop-up__form_place_edit');
const userNameInput = page.querySelector('#heading');
const userDescInput = page.querySelector('#subheading');
const userName = profile.querySelector('.profile__name');
const userTitle = profile.querySelector('.profile__subline');

const profileAddForm = page.querySelector('.pop-up__form_place_add');
const popupAdd = page.querySelector('.pop-up_type_add-card');
const newPlaceNameInput = page.querySelector('#place');
const newPlaceLinkInput = page.querySelector('#url');
const newCardTemplate = page.querySelector('#card-template').content;


const popupImgView = page.querySelector('.pop-up_type_img');
const fullScreenImg = popupImgView.querySelector('.pop-up__img');
const fullScreenImgCapture = popupImgView.querySelector('.pop-up__caption');

let scrollY;

const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];

// RENDER INITIAL CARDS
renderInitialCards(initialCards);

function renderInitialCards(cards) {
	cards.forEach(card => {
		const newCardEl = createNewCard(card.name, card.link);
		renderCard(newCardEl);
	})
}

function createNewCard(name, link) {
	const newCard = newCardTemplate.querySelector('.element').cloneNode(true);
	const cardImg = newCard.querySelector('.element__img');
	cardImg.src = link;
	cardImg.alt = name.toString();
	cardImg.addEventListener('click', () => renderPicture(name, link));
	newCard.querySelector('.element__text').textContent = name.toString();
	return newCard;
}

function renderCard(cardEl) {
	cardsList.prepend(cardEl);
}


// EDIT PROFILE

profileEditForm.addEventListener('submit', editFormHandler)

function openPopup(el) {
	el.classList.add('pop-up_opened');
	lockScrollY();
}

function closePopup(el) {
	el.classList.remove('pop-up_opened');
	unlockScrollY();
}
function editFormHandler(evt) {
	evt.preventDefault();
	const userNameVal = userNameInput.value;
	const userDescVal = userDescInput.value;
	editProfile(userNameVal, userDescVal);
	closePopup(popupEdit);
}

function editProfile(name, title) {
	if (name) userName.textContent = name;
	if (title) userTitle.textContent = title;
}

// ADD NEW PLACE

profileAddForm.addEventListener('submit', addFormHandler);

function addFormHandler(evt) {
	evt.preventDefault();
	const newPlace = {
		name: newPlaceNameInput.value,
		link: newPlaceLinkInput.value
	};
	if (newPlace.name && newPlace.link) {
		initialCards.unshift(newPlace);
		const newCardEl = createNewCard(newPlace.name, newPlace.link);
		renderCard(newCardEl);
		newPlaceNameInput.value = '';
		newPlaceLinkInput.value = '';
	}
	closePopup(popupAdd);
}


// FIXED POSITION FOR PAGE

function lockScrollY() {
	scrollY = window.scrollY;
	page.classList.add('page__scroll-lock');
	page.style.top = `-${scrollY}px`;
}

function unlockScrollY() {
	page.classList.remove('page__scroll-lock')
	page.style.top = '';
	window.scrollTo(0, scrollY);
}


// Delete card

function deleteCardHandler(evt) {
	const card = evt.target.closest('.element');
	card.remove();
	const cardUrl = card.querySelector('.element__img').src;
	const cardIndex = initialCards.findIndex(cardObj => cardObj.link === cardUrl);
	if (cardIndex !== -1) {
		initialCards.splice(cardIndex, 1);
	}
}

// Image view

function renderPicture(name, link) {
	openPopup(popupImgView);
	fullScreenImg.src = link;
	fullScreenImg.alt = name;
	fullScreenImgCapture.textContent = name;
}

// Eventlistener

window.addEventListener('click', windowClickHandler);

function windowClickHandler (evt) {
	if (evt.target.classList.contains('profile__edit-btn')) {
		openPopup(popupEdit);
	} else if (evt.target.classList.contains('profile__add-btn')) {
		openPopup(popupAdd);
	} else if (evt.target.classList.contains('pop-up__close_place_edit')) {
		closePopup(popupEdit);
	} else if (evt.target.classList.contains('pop-up__close_place_add')){
		closePopup(popupAdd);
	} else if (evt.target.classList.contains('pop-up__close_place_img')){
		closePopup(popupImgView);
	} else if (evt.target.classList.contains('pop-up_opened')) {
		closePopup(evt.target);
	} else if (evt.target.classList.contains('element__delete')) {
		deleteCardHandler(evt);
	} else if (evt.target.classList.contains('element__like')) {
		evt.target.classList.toggle('element__like_active');
	} 
}