import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = { form: document.querySelector('.feedback-form') };

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

populateFormInput();

function populateFormInput() {
  const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedFormData) {
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    email.value = savedFormData.email;
    message.value = savedFormData.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log('The form has been sent', formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
