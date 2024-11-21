import axios from 'axios';

const form = document.querySelector('.together__form');
const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';

const onSubmit = async event => {
  event.preventDefault();
  const input = event.target.elements.email;
  const message = event.target.elements.message;

  try {
    const body = {
      email: input.value,
      comment: message.value,
    };

    const response = await axios.post(BASE_URL, body);
    console.log(response.data.title);
  } catch (error) {
    console.log(error.message);
  }
};

form.addEventListener('submit', onSubmit);
