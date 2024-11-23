import axios from 'axios';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const slider = document.querySelector('.reviewsSwiper .swiper-wrapper');

let swiper = new Swiper('.reviewsSwiper', {
  navigation: {
    nextEl: '.custom-swiper-button-next',
    prevEl: '.custom-swiper-button-prev',
  },
});

const processReviews = async (reviews) => {
  return reviews.map(review => {
    return `
      <div class="swiper-slide">
        <div class="review">
          <p class="review-text">${review.review}</p>
          <span class="review-person">
            <span class="review-person-featured-icon">
              <svg class="review-person-featured-icon-cirle">
                <use href="../img/icons.svg#icon-review-circle"></use>
              </svg>
              <img class="review-person-featured-icon-img" src="${review.avatar_url}" alt="${review.author}" />
              <h3 class="review-person-text">${review.author}</h3>
            </span>
          </span>
      </div>
    </div>
    `;
  });
};

async function fetchSlides() {
  const response = await axios.get(`https://portfolio-js.b.goit.study/api/reviews`);
  return  await processReviews(response.data);
}

try {
  swiper.slidesPerViewDynamic();
  const data = await fetchSlides();
  slider.insertAdjacentHTML('beforeend', data.join(''));
} catch (error) {
  console.log('error');
  slider.insertAdjacentHTML('beforeend', data.join(''));
}