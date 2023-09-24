import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
// let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
// // ? JSON.parse(localStorage.getItem(STORAGE_KEY))
// // : {};

let formData = {};

const refs = { form: document.querySelector('.feedback-form') };

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

populateFormInput();

function populateFormInput() {
  const savedDataForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!savedDataForm) {
    return;
  }

  // const email = document.querySelector('.feedback-form input');
  // const message = document.querySelector('.feedback-form textarea');

  const allFormEL = refs.form.elements;

  for (const key in savedDataForm) {
    if (savedDataForm.hasOwnProperty(key)) {
      allFormEL[key].value = savedDataForm[key];
    }
    if (savedDataForm[key]) {
      formData[key] = savedDataForm[key];
    }
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log('The form has been sent', formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}
