import {newCardTemplate, deleteConfirmationPopup, deleteConfirmationBtn, cardsList, deleteHandlers, userId} from './data.js';
import {closePopup, openPopup, renderPicture} from './popupHandler.js'
import {addLike, deleteCardFromServer, removeLike} from "./api.js";

export function createNewCard(name, link, likes, deletable = false, cardId) {
    const newCard = newCardTemplate.querySelector('.element').cloneNode(true);
    const cardImg = newCard.querySelector('.element__img');
    cardImg.src = link;
    cardImg.alt = name.toString();
    cardImg.addEventListener('click', () => renderPicture(name, link));
    newCard.querySelector('.element__text').textContent = name.toString();
    renderLikesNumber(newCard, likes);
    if(deletable) {
        const deleteBtn = newCard.querySelector('.element__delete');
        deleteBtn.classList.add('element__delete_active');
        deleteBtn.addEventListener('click', ()=>{
            openPopup(deleteConfirmationPopup, newCard, cardId);
        })
    }
    const likeBtn = newCard.querySelector('.element__like');
    likeBtn.addEventListener('click', ()=> likesHandler(likeBtn, likes, newCard, cardId));
    return newCard;
}

export function renderCard(cardEl, append) {
    if(append) {
        cardsList.append(cardEl);
    } else {
        cardsList.prepend(cardEl);
    }
}

// Delete card
export function enableDeleteBtn(targetCard, cardId){
    clearEventListeners();
    deleteConfirmationBtn.addEventListener('click', deleteCardHandler);
    function deleteCardHandler(){
        targetCard.remove();
        deleteCardFromServer(cardId);
        closePopup(deleteConfirmationPopup, deleteCardHandler);
    }
    deleteHandlers.push(deleteCardHandler);
}

function clearEventListeners() {
    for (let handler of deleteHandlers) {
        deleteConfirmationBtn.removeEventListener('click', handler);
        const index = deleteHandlers.indexOf(handler);
        if (index > -1) {
            deleteHandlers.splice(index, 1);
        }
    }
}

//Likes handler

function likesHandler(likeBtn, likes, card, cardId){
    if(!likeBtn.classList.contains('element__like_active')) {
        likeBtn.classList.add('element__like_active');
        likes++;
        addLike(likes, cardId, card);
    } else {
        likeBtn.classList.remove('element__like_active');
        likes--;
        removeLike(likes, cardId, card);
    }
}

export function checkLikesActive(likes) {
    for (let like of likes){
        if (like._id === userId){
            return true;
        }
    }
    return false;
}
export function renderLikesNumber(card, likes) {
    card.querySelector('.element__likes-number').textContent = likes;
}