var emailUser = document.querySelector('.form-field__contact-input--email');
var nameUser = document.querySelector('.form-field__name-input--name');
var surnameUser = document.querySelector('.form-field__name-input--surname');
var formFields = document.querySelector('.form-field');
var formButton = document.querySelector('.form-field__submit-button');
var popupFailMessage = document.querySelector('.submit-unsucsess');
var popupMessage = document.querySelector('.submit-sucsess');
var popupButtonSucsess = document.querySelector('.submit-sucsess__close-button');
var popupButtonUnsucsess = document.querySelector('.submit-unsucsess__close-button');

formButton.addEventListener('click', function (evt) {
  if (!emailUser.value || !nameUser.value || !surnameUser.value) {
    popupMessage.classList.remove('submit-sucsess--opened');
    popupFailMessage.classList.remove('submit-unsucsess--opened');
    popupFailMessage.classList.add('submit-unsucsess--opened');

  } else {
    popupFailMessage.classList.remove('submit-unsucsess--opened');
    popupMessage.classList.remove('submit-sucsess--opened');
    popupMessage.classList.add('submit-sucsess--opened');
  }
});

popupButtonSucsess.addEventListener('click', function (evt) {
  popupMessage.classList.remove('submit-sucsess--opened');
});

popupButtonUnsucsess.addEventListener('click', function (evt) {
  popupFailMessage.classList.remove('submit-unsucsess--opened');
});
