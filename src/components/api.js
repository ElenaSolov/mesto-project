import {userName, userTitle, userAvatar} from "./data.js";
import {createNewCard, renderCard} from "./card.js";
import {updatePlaceholders} from "./popupHandler.js";

const userId = "858504df48f716761af4b7e4"

const config = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort-6',
    headers: {
        authorization: '791f7307-c481-4d9c-81d1-c554dbe0a5da',
        'Content-Type': 'application/json'
    }
}

export function getUserData () {
    fetch(`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: config.headers
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            userName.textContent = data.name;
            userTitle.textContent = data.about;
            userAvatar.src = data.avatar;
            updatePlaceholders(data.name, data.about);
        })
}

export function updateUserInfo(newName, newTitle) {
    const body = {
        name: newName,
        about: newTitle
    };
    fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify(body)
    })
 }

export function renderInitialCards() {
    fetch(`${config.baseUrl}/cards`, {
        method: 'GET',
        headers: config.headers
    })
        .then (res => res.json())
        .then (cards => {
            console.log(cards);
            cards.forEach(card => {
                console.log(card)
                let likes = card.likes.length-1;
                if(likes < 0) likes = 0;
                if(card.owner._id.startsWith(userId)){
                    const newCardEl = createNewCard(card.name, card.link, likes, true, card._id);
                    renderCard(newCardEl, true);
                } else {
                        const newCardEl = createNewCard(card.name, card.link, likes);
                    renderCard(newCardEl, true);
                }

    });
        });
}

export function updateCards(cardName, cardLink){
    console.log(cardName)
    fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: cardName,
            link: cardLink
        })
    })
}

export function deleteCardFromServer(cardId) {
    fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
}