import {
  newCardTemplate,
  deleteConfirmationPopup,
  deleteConfirmationBtn,
  cardsList,
  deleteHandlers,
  errorPopup
} from './data.js';
import {closePopup, openPopup, renderPicture} from './popupHandler.js'
import {addLike, deleteCardFromServer, removeLike, renderInitialCards} from "./api.js";
import {myId} from "./index.js"

export function createNewCard(name, link, likes, isLiked, deletable = false, cardId) {
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
      openPopup(deleteConfirmationPopup);
      enableDeleteBtn(newCard, cardId)
    })
  }
  const likeBtn = newCard.querySelector('.element__like');

  if(isLiked){
    likeBtn.classList.add('element__like_active');
  }
  likeBtn.addEventListener('click', ()=> handleLikes(likeBtn, newCard, cardId));
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
  deleteHandlers.push(deleteCardHandler);
  function deleteCardHandler(){
    
    deleteCardFromServer(cardId)
      .then(()=>{
        targetCard.remove();
        closePopup(deleteConfirmationPopup);
      })
      .catch(err => {
        console.log(err);
        openPopup(errorPopup);
      })
  }
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

function handleLikes(likeBtn, card, cardId){
  if (!likeBtn.classList.contains('element__like_active')) {
    addLike(cardId)
      .then(data => {
        likeBtn.classList.add('element__like_active');
        renderLikesNumber(card, data.likes.length);
      })
  } else {
    removeLike(cardId)
      .then(data => {
         likeBtn.classList.remove('element__like_active');
         renderLikesNumber(card, data.likes.length);
      })
  }
}


export function renderLikesNumber(card, likes) {
  card.querySelector('.element__likes-number').textContent = likes;
}

export function checkIsLiked(card) {
  if (card.likes.length > 0) {
    for (let like of card.likes) {
      if (like._id === myId) {
        return true;
      }
    }
  }
  return false;
}