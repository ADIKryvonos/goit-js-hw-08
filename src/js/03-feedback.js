import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const emailE = document.querySelector('input');
const textareaE = document.querySelector('textarea');

const formData = {};
const STOREGE_KEY = 'feedback-form-state';

form.addEventListener('input', onFormInput);
form.addEventListener('submit', throttle(onFormSubmit, 500));

checkOnSavedMassege();

function onFormInput(e) {
  // formData[e.target.name] = e.target.value;
  formData.email = emailE.value;
  formData.massege = textareaE.value;
  localStorage.setItem(STOREGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STOREGE_KEY);
  console.log(JSON.parse(localStorage.getItem(STOREGE_KEY)));
}

function checkOnSavedMassege(e) {
  const saveMassege = localStorage.getItem(STOREGE_KEY);
  if (saveMassege) {
    const parseMessage = JSON.parse(saveMassege);
    emailE.value = parseMessage.email;
    textareaE.value = parseMessage.message;
  }
}
