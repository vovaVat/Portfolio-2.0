import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.together__form');
const emailField = document.querySelector('input[name="email"');
const messageField = document.querySelector('textarea[name="message"]');
const errorMessage = document.querySelector('.error-message');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const backdrop = document.querySelector('.backdrop');
const iconSuccess = form.querySelector('.icon-success-filled');

const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';

iziToast.settings({
  messageSize: 15,
  messageLineHeight: 24,
  position: 'topRight',
  timeout: 7000,
  closeOnClick: true,
  maxWidth: 350,
  transitionIn: 'bounceInLeft',
  displayMode: 1,
});

const iziToastOptions = {
  warning: {
    message: 'Invalid email or empty message field. Please, try again.',
    backgroundColor: '#ffd7a3',
    theme: 'light',
    messageColor: '#292929',
  },
  error: {
    message: 'An error occurred while sending your message. Please try again.',
    backgroundColor: 'rgb(239, 64, 64)',
    theme: 'dark',
    messageColor: '#fff',
  },
};

const onSubmit = async event => {
  event.preventDefault();

  if (!validateEmail() || messageField.value.trim() === '') {
    iziToast.warning(iziToastOptions.warning);
    return;
  }

  try {
    const body = {
      email: emailField.value,
      comment: messageField.value,
    };

    const response = await axios.post(BASE_URL, body);

    showModal(response.data);
  } catch (error) {
    iziToast.error(iziToastOptions.error);
  }

  form.reset();
  iconSuccess.classList.remove('valid');
};

const validateEmail = () => {
  if (emailField.validity.valid) {
    iconSuccess.classList.add('valid');
    errorMessage.style.display = 'none';
    return true;
  } else {
    iconSuccess.classList.remove('valid');
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Invalid email, try again';
    return;
  }
};

const toggleModal = isVisible => {
  modal.classList.toggle('show', isVisible);
  backdrop.classList.toggle('visible', isVisible);
  document.body.style.overflow = isVisible ? 'hidden' : '';

  isVisible
    ? window.addEventListener('keydown', onEscPress)
    : window.removeEventListener('keydown', onEscPress);
};

const showModal = ({ title, message }) => {
  modal.querySelector('.modal__title').textContent = title;
  modal.querySelector('.modal__text').textContent = message;

  toggleModal(true);
};

const closeModal = () => {
  toggleModal(false);
};

const onEscPress = event => {
  if (event.key === 'Escape') closeModal();
};

form.addEventListener('submit', onSubmit);
emailField.addEventListener('input', validateEmail);
modalClose.addEventListener('click', closeModal);
window.addEventListener('click', event => {
  if (event.target === backdrop) closeModal();
});
