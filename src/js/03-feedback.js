import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textArea: document.querySelector('feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textArea.addEventListener('input', onTextareaInput);

function onTextareaInput(event) {
  const message = event.currentTarget.value;
  console.log(message);
  localStorage.setItem('feedback-form-state', message);
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log('відправляємо форму');
}
