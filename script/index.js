const page = document.querySelector('.page');
const profile = page.querySelector('.profile');
const cardsList = page.querySelector('.elements__list');

const profileEditBtn = profile.querySelector('.profile__edit-btn');
const popupEdit = page.querySelector('.pop-up_type_edit-profile');
const profileEditForm = page.querySelector('.pop-up__form_place_edit');
const popupEditCloseBtn = page.querySelector('.pop-up__close_place_edit');

const profileAddBtn = profile.querySelector('.profile__add-btn');
const profileAddForm = page.querySelector('.pop-up__form_place_add');
const popupAdd = page.querySelector('.pop-up_type_add-card');
const popupAddCloseBtn = page.querySelector('.pop-up__close_place_add');

const popupImgView = page.querySelector('.pop-up_type_img');
const popupImgViewCloseBtn = popupImgView.querySelector('.pop-up__close_place_img')

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
		const newCardEl = createNewCard();
		renderCard(newCardEl, card);
	})
}

function createNewCard() {
	const newCardTemplate = page.querySelector('#card-template').content;
	return newCardTemplate.querySelector('.element').cloneNode(true);
}

function renderCard(cardTemplate, cardObj) {
	cardTemplate.querySelector('.element__img').src = cardObj.link;
	cardTemplate.querySelector('.element__img').alt = cardObj.name.toString();
	cardTemplate.querySelector('.element__img').addEventListener('click', renderPicture);
	cardTemplate.querySelector('.element__text').textContent = cardObj.name.toString();
	cardTemplate.querySelector('.element__like').addEventListener('click', evt => evt.target.classList.toggle('element__like_active'));
	cardTemplate.querySelector('.element__delete').addEventListener('click', deleteCardHandler);
	cardsList.prepend(cardTemplate);
}


// EDIT PROFILE
profileEditBtn.addEventListener('click', () => openPopup(popupEdit));

profileEditForm.addEventListener('submit', editFormHandler)

popupEditCloseBtn.addEventListener('click', () => {
	closePopup(popupEdit);
});

function openPopup(el) {
	el.classList.add('pop-up_opened');
	pageFixedPosition();
}

function closePopup(el) {
	el.classList.remove('pop-up_opened');
	pageUnfixedPosition();
}
function editFormHandler(evt) {
	evt.preventDefault();
	const userName = page.querySelector('#heading').value;
	const subheading = page.querySelector('#subheading').value;
	editProfile(userName, subheading);
	closePopup(popupEdit);
}

function editProfile(name, title) {
	const userName = profile.querySelector('.profile__name');
	if (name) userName.textContent = name;
	const userTitle = profile.querySelector('.profile__subline');
	if (title) userTitle.textContent = title;
}

// ADD NEW PLACE
profileAddBtn.addEventListener('click', () => openPopup(popupAdd));

profileAddForm.addEventListener('submit', addFormHandler);


popupAddCloseBtn.addEventListener('click', () => {
	closePopup(popupAdd);
});

function addFormHandler(evt) {
	evt.preventDefault();
	const newPlace = {
		name: page.querySelector('#place').value,
		link: page.querySelector('#url').value
	};
	if (newPlace.name && newPlace.link) {
		initialCards.unshift(newPlace);
		const newCardEl = createNewCard();
		renderCard(newCardEl, newPlace);
		page.querySelector('#place').value = '';
		page.querySelector('#url').value = '';
	}
	closePopup(popupAdd);
}


// FIXED POSITION FOR PAGE

function pageFixedPosition() {
	scrollY = window.scrollY;
	page.classList.add('page__scroll-lock');
	page.style.top = `-${scrollY}px`;
}

function pageUnfixedPosition() {
	page.classList.remove('page__scroll-lock')
	page.style.top = '';
	window.scrollTo(0, scrollY);
}


// DELETE CARD

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
popupImgViewCloseBtn.addEventListener('click', () => {
	closePopup(popupImgView);
})

function renderPicture(evt) {
	openPopup(popupImgView);
	popupImgView.querySelector('.pop-up__img').src = evt.target.src;
	popupImgView.querySelector('.pop-up__caption').textContent = evt.target.alt;
}