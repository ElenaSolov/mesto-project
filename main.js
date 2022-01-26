/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/addNewPlace.js":
/*!***************************************!*\
  !*** ./src/components/addNewPlace.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleAddFormSubmit\": () => (/* binding */ handleAddFormSubmit)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/components/data.js\");\n/* harmony import */ var _popupHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popupHandler.js */ \"./src/components/popupHandler.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./src/components/api.js\");\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validate.js */ \"./src/components/validate.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card */ \"./src/components/card.js\");\n\n\n\n\n\nfunction handleAddFormSubmit() {\n  (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_1__.renderProcessing)(true, _data_js__WEBPACK_IMPORTED_MODULE_0__.profileAddForm);\n  var newCardName = _data_js__WEBPACK_IMPORTED_MODULE_0__.newPlaceNameInput.value;\n  var newCardLink = _data_js__WEBPACK_IMPORTED_MODULE_0__.newPlaceLinkInput.value;\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.updateCards)(newCardName, newCardLink).then(function (card) {\n    var newCardEl = (0,_card__WEBPACK_IMPORTED_MODULE_4__.createNewCard)(card.name, card.link, card.likes.length, false, true, card._id);\n    (0,_card__WEBPACK_IMPORTED_MODULE_4__.renderCard)(newCardEl, false);\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.profileAddForm.reset();\n    (0,_validate_js__WEBPACK_IMPORTED_MODULE_3__.disableSubmitBtn)(_data_js__WEBPACK_IMPORTED_MODULE_0__.profileAddForm.querySelector('.pop-up__submit-btn'), 'pop-up__submit-btn_inactive');\n  }).catch(function (err) {\n    console.log(err);\n    (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_1__.openPopup)(_data_js__WEBPACK_IMPORTED_MODULE_0__.errorPopup);\n  }).finally(function () {\n    (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_1__.closePopup)(_data_js__WEBPACK_IMPORTED_MODULE_0__.popupAdd);\n    (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_1__.renderProcessing)(false, _data_js__WEBPACK_IMPORTED_MODULE_0__.profileAddForm);\n  });\n}\n\n//# sourceURL=webpack://mesto-project/./src/components/addNewPlace.js?");

/***/ }),

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserData\": () => (/* binding */ getUserData),\n/* harmony export */   \"updateUserInfo\": () => (/* binding */ updateUserInfo),\n/* harmony export */   \"renderInitialCards\": () => (/* binding */ renderInitialCards),\n/* harmony export */   \"updateCards\": () => (/* binding */ updateCards),\n/* harmony export */   \"deleteCardFromServer\": () => (/* binding */ deleteCardFromServer),\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"removeLike\": () => (/* binding */ removeLike),\n/* harmony export */   \"updateAvatar\": () => (/* binding */ updateAvatar)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/components/data.js\");\n\n\nfunction sendRequest(url, method, body) {\n  return fetch(url, {\n    method: method,\n    headers: _data_js__WEBPACK_IMPORTED_MODULE_0__.config.headers,\n    body: body\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n\n    Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  });\n}\n\nfunction getUserData() {\n  return sendRequest(\"\".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/users/me\"), 'GET', null);\n}\nfunction updateUserInfo(newName, newTitle) {\n  var body = JSON.stringify({\n    name: newName,\n    about: newTitle\n  });\n  return sendRequest(\"\".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/users/me\"), 'PATCH', body);\n}\nfunction renderInitialCards() {\n  return sendRequest(\"\".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/cards\"), 'GET', null);\n}\nfunction updateCards(cardName, cardLink) {\n  var body = JSON.stringify({\n    name: cardName,\n    link: cardLink\n  });\n  return sendRequest(\"\".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/cards\"), 'POST', body);\n}\nfunction deleteCardFromServer(cardId) {\n  return sendRequest(\"\".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/cards/\").concat(cardId), 'DELETE');\n}\nfunction addLike(cardId) {\n  return sendRequest(\"\".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/cards/likes/\").concat(cardId), 'PUT', null);\n}\nfunction removeLike(cardId) {\n  return sendRequest(\"\".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/cards/likes/\").concat(cardId), 'DELETE', null);\n}\nfunction updateAvatar(link) {\n  var body = JSON.stringify({\n    avatar: link\n  });\n  return sendRequest(\"\".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/users/me/avatar\"), 'PATCH', body);\n}\n\n//# sourceURL=webpack://mesto-project/./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewCard\": () => (/* binding */ createNewCard),\n/* harmony export */   \"renderCard\": () => (/* binding */ renderCard),\n/* harmony export */   \"enableDeleteBtn\": () => (/* binding */ enableDeleteBtn),\n/* harmony export */   \"renderLikesNumber\": () => (/* binding */ renderLikesNumber),\n/* harmony export */   \"checkIsLiked\": () => (/* binding */ checkIsLiked)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/components/data.js\");\n/* harmony import */ var _popupHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popupHandler.js */ \"./src/components/popupHandler.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./src/components/api.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ \"./src/components/index.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\nfunction createNewCard(name, link, likes, isLiked) {\n  var deletable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;\n  var cardId = arguments.length > 5 ? arguments[5] : undefined;\n  var newCard = _data_js__WEBPACK_IMPORTED_MODULE_0__.newCardTemplate.querySelector('.element').cloneNode(true);\n  var cardImg = newCard.querySelector('.element__img');\n  cardImg.src = link;\n  cardImg.alt = name.toString();\n  cardImg.addEventListener('click', function () {\n    return (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_1__.renderPicture)(name, link);\n  });\n  newCard.querySelector('.element__text').textContent = name.toString();\n  renderLikesNumber(newCard, likes);\n\n  if (deletable) {\n    var deleteBtn = newCard.querySelector('.element__delete');\n    deleteBtn.classList.add('element__delete_active');\n    deleteBtn.addEventListener('click', function () {\n      (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_1__.openPopup)(_data_js__WEBPACK_IMPORTED_MODULE_0__.deleteConfirmationPopup);\n      enableDeleteBtn(newCard, cardId);\n    });\n  }\n\n  var likeBtn = newCard.querySelector('.element__like');\n\n  if (isLiked) {\n    likeBtn.classList.add('element__like_active');\n  }\n\n  likeBtn.addEventListener('click', function () {\n    return handleLikes(likeBtn, newCard, cardId);\n  });\n  return newCard;\n}\nfunction renderCard(cardEl, append) {\n  if (append) {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.cardsList.append(cardEl);\n  } else {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.cardsList.prepend(cardEl);\n  }\n} // Delete card\n\nfunction enableDeleteBtn(targetCard, cardId) {\n  clearEventListeners();\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.deleteConfirmationBtn.addEventListener('click', deleteCardHandler);\n\n  function deleteCardHandler() {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.deleteHandlers.push(deleteCardHandler);\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.deleteCardFromServer)(cardId).then(function () {\n      targetCard.remove();\n    }).catch(function (err) {\n      console.log(err);\n      (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_1__.openPopup)(_data_js__WEBPACK_IMPORTED_MODULE_0__.errorPopup);\n    }).finally(function () {\n      return (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_1__.closePopup)(_data_js__WEBPACK_IMPORTED_MODULE_0__.deleteConfirmationPopup, deleteCardHandler);\n    });\n  }\n}\n\nfunction clearEventListeners() {\n  var _iterator = _createForOfIteratorHelper(_data_js__WEBPACK_IMPORTED_MODULE_0__.deleteHandlers),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var handler = _step.value;\n      _data_js__WEBPACK_IMPORTED_MODULE_0__.deleteConfirmationBtn.removeEventListener('click', handler);\n      var index = _data_js__WEBPACK_IMPORTED_MODULE_0__.deleteHandlers.indexOf(handler);\n\n      if (index > -1) {\n        _data_js__WEBPACK_IMPORTED_MODULE_0__.deleteHandlers.splice(index, 1);\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n} //Likes handler\n\n\nfunction handleLikes(likeBtn, card, cardId) {\n  if (!likeBtn.classList.contains('element__like_active')) {\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.addLike)(cardId).then(function (data) {\n      console.log(data);\n      likeBtn.classList.add('element__like_active');\n      renderLikesNumber(card, data.likes.length);\n    });\n  } else {\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.removeLike)(cardId).then(function (data) {\n      likeBtn.classList.remove('element__like_active');\n      renderLikesNumber(card, data.likes.length);\n    });\n  }\n}\n\nfunction renderLikesNumber(card, likes) {\n  card.querySelector('.element__likes-number').textContent = likes;\n}\nfunction checkIsLiked(card) {\n  if (card.likes.length > 0) {\n    var _iterator2 = _createForOfIteratorHelper(card.likes),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var like = _step2.value;\n\n        if (like._id === _index_js__WEBPACK_IMPORTED_MODULE_3__.myId) {\n          return true;\n        }\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  }\n\n  return false;\n}\n\n//# sourceURL=webpack://mesto-project/./src/components/card.js?");

/***/ }),

/***/ "./src/components/changeAvatar.js":
/*!****************************************!*\
  !*** ./src/components/changeAvatar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeAvatar\": () => (/* binding */ changeAvatar)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/components/data.js\");\n/* harmony import */ var _popupHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popupHandler.js */ \"./src/components/popupHandler.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./src/components/api.js\");\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validate.js */ \"./src/components/validate.js\");\n\n\n\n\nfunction changeAvatar() {\n  (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_1__.renderProcessing)(true, _data_js__WEBPACK_IMPORTED_MODULE_0__.avatarPopup);\n  var newAvatarLink = _data_js__WEBPACK_IMPORTED_MODULE_0__.avatarInput.value;\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.updateAvatar)(newAvatarLink).then(function (data) {\n    renderAvatar(data.avatar);\n  }).catch(function (err) {\n    console.log(err);\n    (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_1__.openPopup)(_data_js__WEBPACK_IMPORTED_MODULE_0__.errorPopup);\n  }).finally(function () {\n    (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_1__.closePopup)(_data_js__WEBPACK_IMPORTED_MODULE_0__.avatarPopup);\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.avatarForm.reset();\n    (0,_validate_js__WEBPACK_IMPORTED_MODULE_3__.disableSubmitBtn)(_data_js__WEBPACK_IMPORTED_MODULE_0__.avatarPopup.querySelector('.pop-up__submit-btn'), 'pop-up__submit-btn_inactive');\n    (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_1__.renderProcessing)(false, _data_js__WEBPACK_IMPORTED_MODULE_0__.avatarPopup);\n  });\n}\n\nfunction renderAvatar(link) {\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.avatarPicture.src = link;\n}\n\n//# sourceURL=webpack://mesto-project/./src/components/changeAvatar.js?");

/***/ }),

/***/ "./src/components/data.js":
/*!********************************!*\
  !*** ./src/components/data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"page\": () => (/* binding */ page),\n/* harmony export */   \"popupEdit\": () => (/* binding */ popupEdit),\n/* harmony export */   \"profileEditBtn\": () => (/* binding */ profileEditBtn),\n/* harmony export */   \"cardsList\": () => (/* binding */ cardsList),\n/* harmony export */   \"profileEditForm\": () => (/* binding */ profileEditForm),\n/* harmony export */   \"userNameInput\": () => (/* binding */ userNameInput),\n/* harmony export */   \"userDescInput\": () => (/* binding */ userDescInput),\n/* harmony export */   \"userName\": () => (/* binding */ userName),\n/* harmony export */   \"userTitle\": () => (/* binding */ userTitle),\n/* harmony export */   \"userAvatar\": () => (/* binding */ userAvatar),\n/* harmony export */   \"profileAddForm\": () => (/* binding */ profileAddForm),\n/* harmony export */   \"popupAdd\": () => (/* binding */ popupAdd),\n/* harmony export */   \"newPlaceNameInput\": () => (/* binding */ newPlaceNameInput),\n/* harmony export */   \"newPlaceLinkInput\": () => (/* binding */ newPlaceLinkInput),\n/* harmony export */   \"newCardTemplate\": () => (/* binding */ newCardTemplate),\n/* harmony export */   \"profileAddBtn\": () => (/* binding */ profileAddBtn),\n/* harmony export */   \"popupImgView\": () => (/* binding */ popupImgView),\n/* harmony export */   \"fullScreenImg\": () => (/* binding */ fullScreenImg),\n/* harmony export */   \"fullScreenImgCapture\": () => (/* binding */ fullScreenImgCapture),\n/* harmony export */   \"deleteConfirmationPopup\": () => (/* binding */ deleteConfirmationPopup),\n/* harmony export */   \"deleteConfirmationBtn\": () => (/* binding */ deleteConfirmationBtn),\n/* harmony export */   \"avatarPopup\": () => (/* binding */ avatarPopup),\n/* harmony export */   \"avatarForm\": () => (/* binding */ avatarForm),\n/* harmony export */   \"avatarInput\": () => (/* binding */ avatarInput),\n/* harmony export */   \"avatarPicture\": () => (/* binding */ avatarPicture),\n/* harmony export */   \"avatarEl\": () => (/* binding */ avatarEl),\n/* harmony export */   \"errorPopup\": () => (/* binding */ errorPopup),\n/* harmony export */   \"errorPopupBtn\": () => (/* binding */ errorPopupBtn),\n/* harmony export */   \"validationSettings\": () => (/* binding */ validationSettings),\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"deleteHandlers\": () => (/* binding */ deleteHandlers)\n/* harmony export */ });\nvar page = document.querySelector('.page');\nvar popupEdit = page.querySelector('.pop-up_type_edit-profile');\nvar profileEditBtn = page.querySelector('.profile__edit-btn');\nvar cardsList = page.querySelector('.elements__list');\nvar profileEditForm = page.querySelector('.pop-up__form_place_edit');\nvar userNameInput = page.querySelector('#heading');\nvar userDescInput = page.querySelector('#subheading');\nvar userName = page.querySelector('.profile__name');\nvar userTitle = page.querySelector('.profile__subline');\nvar userAvatar = page.querySelector('.profile__avatar');\nvar profileAddForm = page.querySelector('.pop-up__form_place_add');\nvar popupAdd = page.querySelector('.pop-up_type_add-card');\nvar newPlaceNameInput = page.querySelector('#place');\nvar newPlaceLinkInput = page.querySelector('#url');\nvar newCardTemplate = page.querySelector('#card-template').content;\nvar profileAddBtn = page.querySelector('.profile__add-btn');\nvar popupImgView = page.querySelector('.pop-up_type_img');\nvar fullScreenImg = popupImgView.querySelector('.pop-up__img');\nvar fullScreenImgCapture = popupImgView.querySelector('.pop-up__caption');\nvar deleteConfirmationPopup = page.querySelector('.pop-up_type_confirm');\nvar deleteConfirmationBtn = deleteConfirmationPopup.querySelector('.pop-up__submit-btn_place_confirmation');\nvar avatarPopup = page.querySelector('.pop-up_type_avatar');\nvar avatarForm = avatarPopup.querySelector('.pop-up__form_place_avatar');\nvar avatarInput = avatarForm.querySelector('#avatar-url');\nvar avatarPicture = page.querySelector('.profile__avatar');\nvar avatarEl = page.querySelector('.profile__avatar-container');\nvar errorPopup = page.querySelector('.pop-up_type_error');\nvar errorPopupBtn = errorPopup.querySelector('.pop-up__submit-btn');\nvar validationSettings = {\n  formSelector: '.pop-up__form',\n  inputSelector: '.pop-up__input',\n  submitBtnSelector: '.pop-up__submit-btn',\n  inactiveBtnClass: 'pop-up__submit-btn_inactive',\n  inputErrorClass: 'pop-up__input_invalid',\n  errorClass: 'pop-up__input-error_active'\n};\nvar config = {\n  baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort-6',\n  headers: {\n    authorization: '791f7307-c481-4d9c-81d1-c554dbe0a5da',\n    'Content-Type': 'application/json'\n  }\n};\nvar deleteHandlers = [];\n\n//# sourceURL=webpack://mesto-project/./src/components/data.js?");

/***/ }),

/***/ "./src/components/editProfile.js":
/*!***************************************!*\
  !*** ./src/components/editProfile.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleEditFormSubmit\": () => (/* binding */ handleEditFormSubmit)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/components/data.js\");\n/* harmony import */ var _popupHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popupHandler.js */ \"./src/components/popupHandler.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./src/components/api.js\");\n\n\n\nfunction handleEditFormSubmit() {\n  (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_1__.renderProcessing)(true, _data_js__WEBPACK_IMPORTED_MODULE_0__.popupEdit);\n  var userNameVal = _data_js__WEBPACK_IMPORTED_MODULE_0__.userNameInput.value;\n  var userDescVal = _data_js__WEBPACK_IMPORTED_MODULE_0__.userDescInput.value;\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.updateUserInfo)(userNameVal, userDescVal).then(function () {\n    updateProfileData(userNameVal, userDescVal);\n    (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_1__.updateEditFormValues)(userNameVal, userDescVal);\n  }).catch(function (err) {\n    (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_1__.closePopup)(_data_js__WEBPACK_IMPORTED_MODULE_0__.popupEdit);\n    console.log(err);\n  }).finally(function () {\n    (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_1__.closePopup)(_data_js__WEBPACK_IMPORTED_MODULE_0__.popupEdit);\n    (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_1__.renderProcessing)(false, _data_js__WEBPACK_IMPORTED_MODULE_0__.popupEdit);\n  });\n}\n\nfunction updateProfileData(newName, newTitle) {\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.userName.textContent = newName;\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.userTitle.textContent = newTitle;\n}\n\n//# sourceURL=webpack://mesto-project/./src/components/editProfile.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myId\": () => (/* binding */ myId)\n/* harmony export */ });\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/components/data.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./src/components/api.js\");\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validate.js */ \"./src/components/validate.js\");\n/* harmony import */ var _editProfile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editProfile.js */ \"./src/components/editProfile.js\");\n/* harmony import */ var _changeAvatar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changeAvatar.js */ \"./src/components/changeAvatar.js\");\n/* harmony import */ var _addNewPlace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addNewPlace.js */ \"./src/components/addNewPlace.js\");\n/* harmony import */ var _popupHandler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popupHandler.js */ \"./src/components/popupHandler.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card */ \"./src/components/card.js\");\n\n\n\n\n\n\n\n\n //RENDER PROFILE AND INITIAL CARDS\n\nvar myId = '';\nPromise.all([(0,_api_js__WEBPACK_IMPORTED_MODULE_2__.getUserData)(), (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.renderInitialCards)()]).then(function (values) {\n  myId = values[0]._id;\n  _data_js__WEBPACK_IMPORTED_MODULE_1__.userName.textContent = values[0].name;\n  _data_js__WEBPACK_IMPORTED_MODULE_1__.userTitle.textContent = values[0].about;\n  _data_js__WEBPACK_IMPORTED_MODULE_1__.userAvatar.src = values[0].avatar;\n  (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_7__.updateEditFormValues)(values[0].name, values[0].about);\n  values[1].forEach(function (card) {\n    var newCardEl;\n    var isLiked = (0,_card__WEBPACK_IMPORTED_MODULE_8__.checkIsLiked)(card);\n\n    if (card.owner._id.startsWith(myId)) {\n      newCardEl = (0,_card__WEBPACK_IMPORTED_MODULE_8__.createNewCard)(card.name, card.link, card.likes.length, isLiked, true, card._id);\n    } else {\n      newCardEl = (0,_card__WEBPACK_IMPORTED_MODULE_8__.createNewCard)(card.name, card.link, card.likes.length, isLiked, false, card._id);\n    }\n\n    (0,_card__WEBPACK_IMPORTED_MODULE_8__.renderCard)(newCardEl, true);\n  });\n}).catch(function (err) {\n  console.log(err);\n  (0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_7__.openPopup)(_data_js__WEBPACK_IMPORTED_MODULE_1__.errorPopup);\n}); // FORM VALIDATION\n\n(0,_validate_js__WEBPACK_IMPORTED_MODULE_3__.enableValidation)(_data_js__WEBPACK_IMPORTED_MODULE_1__.validationSettings); // EDIT PROFILE\n\n_data_js__WEBPACK_IMPORTED_MODULE_1__.profileEditForm.addEventListener('submit', _editProfile_js__WEBPACK_IMPORTED_MODULE_4__.handleEditFormSubmit); //EDIT AVATAR\n\n_data_js__WEBPACK_IMPORTED_MODULE_1__.avatarPopup.addEventListener('submit', _changeAvatar_js__WEBPACK_IMPORTED_MODULE_5__.changeAvatar); // ADD NEW PLACE\n\n_data_js__WEBPACK_IMPORTED_MODULE_1__.profileAddForm.addEventListener('submit', _addNewPlace_js__WEBPACK_IMPORTED_MODULE_6__.handleAddFormSubmit); // EVENT-LISTENERS\n\n(0,_popupHandler_js__WEBPACK_IMPORTED_MODULE_7__.enablePopupListeners)();\n\n//# sourceURL=webpack://mesto-project/./src/components/index.js?");

/***/ }),

/***/ "./src/components/popupHandler.js":
/*!****************************************!*\
  !*** ./src/components/popupHandler.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"enablePopupListeners\": () => (/* binding */ enablePopupListeners),\n/* harmony export */   \"openPopup\": () => (/* binding */ openPopup),\n/* harmony export */   \"closePopup\": () => (/* binding */ closePopup),\n/* harmony export */   \"updateEditFormValues\": () => (/* binding */ updateEditFormValues),\n/* harmony export */   \"renderPicture\": () => (/* binding */ renderPicture),\n/* harmony export */   \"renderProcessing\": () => (/* binding */ renderProcessing)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/components/data.js\");\n/* harmony import */ var _scrollControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrollControl.js */ \"./src/components/scrollControl.js\");\n\n\nfunction enablePopupListeners() {\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.profileEditBtn.addEventListener('click', function () {\n    return openPopup(_data_js__WEBPACK_IMPORTED_MODULE_0__.popupEdit);\n  });\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.profileAddBtn.addEventListener('click', function () {\n    return openPopup(_data_js__WEBPACK_IMPORTED_MODULE_0__.popupAdd);\n  });\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.avatarEl.addEventListener('click', function () {\n    return openPopup(_data_js__WEBPACK_IMPORTED_MODULE_0__.avatarPopup);\n  });\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.errorPopupBtn.addEventListener('click', function () {\n    return closePopup(_data_js__WEBPACK_IMPORTED_MODULE_0__.errorPopup);\n  });\n  var popups = Array.from(_data_js__WEBPACK_IMPORTED_MODULE_0__.page.querySelectorAll('.pop-up'));\n  popups.forEach(function (popup) {\n    popup.addEventListener('mousedown', function (evt) {\n      if (evt.target.classList.contains('pop-up_opened')) {\n        closePopup(popup);\n      }\n\n      if (evt.target.classList.contains('pop-up__close')) {\n        closePopup(popup);\n      }\n    });\n  });\n}\nfunction openPopup(el) {\n  el.classList.add('pop-up_opened');\n  (0,_scrollControl_js__WEBPACK_IMPORTED_MODULE_1__.lockScrollY)();\n  document.addEventListener('keydown', keyPressHandler);\n}\nfunction closePopup(el) {\n  el.classList.remove('pop-up_opened');\n  (0,_scrollControl_js__WEBPACK_IMPORTED_MODULE_1__.unlockScrollY)();\n  document.removeEventListener('keydown', keyPressHandler);\n}\nfunction updateEditFormValues(name, title) {\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.userNameInput.value = name;\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.userDescInput.value = title;\n}\n\nfunction keyPressHandler(evt) {\n  if (evt.key === 'Escape') {\n    var popup = _data_js__WEBPACK_IMPORTED_MODULE_0__.page.querySelector('.pop-up_opened');\n    closePopup(popup);\n  }\n} // Image view\n\n\nfunction renderPicture(name, link) {\n  openPopup(_data_js__WEBPACK_IMPORTED_MODULE_0__.popupImgView);\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.fullScreenImg.src = link;\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.fullScreenImg.alt = name;\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.fullScreenImgCapture.textContent = name;\n} //UX Show Form Processing\n\nfunction renderProcessing(isProcessing, popup) {\n  var popupBtn = popup.querySelector('.pop-up__submit-btn');\n\n  if (isProcessing) {\n    popupBtn.textContent = 'Сохранение...';\n  } else {\n    popupBtn.textContent = 'Сохранить';\n  }\n}\n\n//# sourceURL=webpack://mesto-project/./src/components/popupHandler.js?");

/***/ }),

/***/ "./src/components/scrollControl.js":
/*!*****************************************!*\
  !*** ./src/components/scrollControl.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lockScrollY\": () => (/* binding */ lockScrollY),\n/* harmony export */   \"unlockScrollY\": () => (/* binding */ unlockScrollY)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/components/data.js\");\n // FIXED POSITION FOR PAGE\n\nvar scrollY;\nfunction lockScrollY() {\n  scrollY = window.scrollY;\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.page.classList.add('page__scroll-lock');\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.page.style.top = \"-\".concat(scrollY, \"px\");\n}\nfunction unlockScrollY() {\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.page.classList.remove('page__scroll-lock');\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.page.style.top = '';\n  window.scrollTo(0, scrollY);\n}\n\n//# sourceURL=webpack://mesto-project/./src/components/scrollControl.js?");

/***/ }),

/***/ "./src/components/validate.js":
/*!************************************!*\
  !*** ./src/components/validate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"enableValidation\": () => (/* binding */ enableValidation),\n/* harmony export */   \"disableSubmitBtn\": () => (/* binding */ disableSubmitBtn)\n/* harmony export */ });\nfunction enableValidation(validationSettings) {\n  var formList = Array.from(document.querySelectorAll(validationSettings.formSelector));\n  formList.forEach(function (formElement) {\n    formElement.addEventListener('submit', function (evt) {\n      evt.preventDefault();\n    });\n    setEventListeners(formElement, validationSettings);\n  });\n}\n\nfunction setEventListeners(form, validationSettings) {\n  var inputList = Array.from(form.querySelectorAll(validationSettings.inputSelector));\n  var submitBtn = form.querySelector(validationSettings.submitBtnSelector);\n  toggleBtnState(inputList, submitBtn, validationSettings);\n  inputList.forEach(function (input) {\n    input.addEventListener('input', function () {\n      checkInputValidity(form, input, validationSettings);\n      toggleBtnState(inputList, submitBtn, validationSettings);\n    });\n  });\n}\n\nfunction toggleBtnState(inputList, submitBtn, validationSettings) {\n  if (hasInvalidInput(inputList)) {\n    disableSubmitBtn(submitBtn, validationSettings.inactiveBtnClass);\n  } else {\n    submitBtn.classList.remove(validationSettings.inactiveBtnClass);\n    submitBtn.removeAttribute('disabled');\n  }\n}\n\nfunction checkInputValidity(form, input, validationSettings) {\n  if (!input.validity.valid) {\n    showInputError(form, input, input.validationMessage, validationSettings);\n  } else {\n    hideInputError(form, input, validationSettings);\n  }\n}\n\nfunction showInputError(form, input, errorMessage, validationSettings) {\n  var errorElement = form.querySelector(\".pop-up__input-error_place_\".concat(input.id));\n  input.classList.add(validationSettings.inputErrorClass);\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add(validationSettings.errorClass);\n}\n\nfunction hideInputError(form, input, validationSettings) {\n  var errorElement = form.querySelector(\".pop-up__input-error_place_\".concat(input.id));\n  input.classList.remove(validationSettings.inputErrorClass);\n  errorElement.classList.remove(validationSettings.errorClass);\n}\n\nfunction hasInvalidInput(inputList) {\n  return inputList.some(function (input) {\n    return !input.validity.valid;\n  });\n}\n\nfunction disableSubmitBtn(submitBtn, inactiveBtnClass) {\n  submitBtn.classList.add(inactiveBtnClass);\n  submitBtn.setAttribute('disabled', '');\n}\n\n//# sourceURL=webpack://mesto-project/./src/components/validate.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project/./src/styles/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/index.js");
/******/ 	
/******/ })()
;