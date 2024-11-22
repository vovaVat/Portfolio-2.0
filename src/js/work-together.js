import axios from 'axios';

const form = document.querySelector('.together__form');
const emailField = document.querySelector('input[name="email"');
const messageField = document.querySelector('textarea[name="message"]');
const errorMessage = document.querySelector('.error-message');

const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';

const onSubmit = async event => {
  event.preventDefault();

  if (!validateEmail() || messageField.value.trim() === '') {
    console.log('something wemt wrong!');
    return;
  }

  try {
    const body = {
      email: emailField.value,
      comment: messageField.value,
    };

    const response = await axios.post(BASE_URL, body);
    console.log(response.data.title);
    const { title, message } = response.data;
    console.log(title, message);
  } catch (error) {
    console.log(error.message);
    alert(
      'An error occurred while sending your message. Please try again later.'
    );
  }

  form.reset();
  emailField.classList.remove('valid');
};

const validateEmail = () => {
  if (emailField.validity.valid) {
    emailField.classList.add('valid');
    errorMessage.style.display = 'none';
    return true;
  } else {
    emailField.classList.remove('valid');
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Invalid email, try again';
    return;
  }
};

form.addEventListener('submit', onSubmit);
emailField.addEventListener('input', validateEmail);
