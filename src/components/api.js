import {userName, userTitle, userAvatar, userId, config} from "./data.js";
import {createNewCard, renderCard, renderLikesNumber, checkLikesActive} from "./card.js";
import {updatePlaceholders} from "./popupHandler.js";



function sendRequest (url, method, body, cb){
    fetch(url, {
        method: method,
        headers: config.headers,
        body: body
    })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((data)=> {
            if(cb) cb(data)
        })
        .catch((err) => {
            console.log(err);
        });
}

export function getUserData () {
    const callback = data=> {
        userName.textContent = data.name;
        userTitle.textContent = data.about;
        userAvatar.src = data.avatar;
        updatePlaceholders(data.name, data.about)};
    sendRequest(`${config.baseUrl}/users/me`, 'GET', null, callback)
}

export function updateUserInfo(newName, newTitle) {
    const body = JSON.stringify({
        name: newName,
        about: newTitle
    });
    sendRequest(`${config.baseUrl}/users/me`,'PATCH',body);
 }

export function renderInitialCards() {
    const callback = (cards) =>  {
        cards.forEach(card => {
        let newCardEl;
        if(card.owner._id.startsWith(userId)){
            newCardEl = createNewCard(card.name, card.link, card.likes.length, true, card._id);
        } else {
            newCardEl = createNewCard(card.name, card.link, card.likes.length, false, card._id);
        }
        if(checkLikesActive(card.likes)) {
            newCardEl.querySelector('.element__like').classList.add('element__like_active');
        }
        renderCard(newCardEl, true);
    });
}
    sendRequest(`${config.baseUrl}/cards`, 'GET', null, callback);
}

export function updateCards(cardName, cardLink){
    const callback = card => {
        const newCardEl = createNewCard(cardName, cardLink, card.likes.length, true, card._id);
        renderCard(newCardEl, false);
    };
    const body = JSON.stringify({
        name: cardName,
        link: cardLink
    });
    sendRequest(`${config.baseUrl}/cards`, 'POST', body, callback);
}

export function deleteCardFromServer(cardId) {
    sendRequest(`${config.baseUrl}/cards/${cardId}`, 'DELETE');
}

export function addLike(likes, cardId, card){
    const callback = data => {
        renderLikesNumber(card, data.likes.length)
    };
    sendRequest(`${config.baseUrl}/cards/likes/${cardId}`, 'PUT', null, callback);
}

export function removeLike(likes, cardId, card){
    const callback = data => {
        renderLikesNumber(card, data.likes.length)
    };
    sendRequest(`${config.baseUrl}/cards/likes/${cardId}`, 'DELETE', null, callback);
}

export function updateAvatar(link){
    const body = JSON.stringify({avatar:link});
    sendRequest(`${config.baseUrl}/users/me/avatar`, 'PATCH', body);
}