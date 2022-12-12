import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const emailE = document.querySelector('input');
const textareaE = document.querySelector('textarea');

const formData = {};
const STOREGE_KEY = 'feedback-form-state';

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

checkOnSavedMassege();

function onFormInput(e) {
  // formData[e.target.name] = e.target.value;
  formData.email = emailE.value;
  formData.message = textareaE.value;
  localStorage.setItem(STOREGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STOREGE_KEY);
  console.log(formData);
}

function checkOnSavedMassege(e) {
  const saveMessage = localStorage.getItem(STOREGE_KEY);
  if (saveMessage) {
    const parseMessage = JSON.parse(saveMessage);
    emailE.value = parseMessage.email;
    textareaE.value = parseMessage.message;
  }
}
