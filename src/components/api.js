import {config} from "./data.js";

function sendRequest (url, method, body){
   return fetch(url, {
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
}

export function getUserData () {
  return sendRequest(`${config.baseUrl}/users/me`, 'GET', null);

}

export function updateUserInfo(newName, newTitle) {
  const body = JSON.stringify({
    name: newName,
    about: newTitle
  });
  return sendRequest(`${config.baseUrl}/users/me`,'PATCH',body);
}

export function renderInitialCards() {
  return sendRequest(`${config.baseUrl}/cards`, 'GET', null);
}

export function updateCards(cardName, cardLink){
  const body = JSON.stringify({
    name: cardName,
    link: cardLink
  });
  return sendRequest(`${config.baseUrl}/cards`, 'POST', body);
}

export function deleteCardFromServer(cardId) {
  return sendRequest(`${config.baseUrl}/cards/${cardId}`, 'DELETE');
}

export function addLike(cardId){
  return sendRequest(`${config.baseUrl}/cards/likes/${cardId}`, 'PUT', null);
}

export function removeLike(cardId){
  return sendRequest(`${config.baseUrl}/cards/likes/${cardId}`, 'DELETE', null);
}

export function updateAvatar(link){
  const body = JSON.stringify({avatar:link});
  return sendRequest(`${config.baseUrl}/users/me/avatar`, 'PATCH', body);
}

