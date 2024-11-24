const projects = [
  {
    img: './img/Projects/Project1.jpg',
    skills: 'React, JavaScript, Node JS, Git',
    title: 'starlight studio landing page',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: './img/Projects/Project1.jpg, ./img/Projects/Project1-2x.jpg'
  },
  {
    img: './img/Projects/Project2.jpg',
    skills: 'React, JavaScript, Node JS, Git',
    title: 'energy flow webservice ',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: './img/Projects/Project2.jpg, ./img/Projects/Project2-2x.jpg'
  },
  {
    img: './img/Projects/Project3.jpg',
    skills: 'React, JavaScript, Node JS, Git',
    title: 'fruitbox online store',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: './img/Projects/Project3.jpg, ./img/Projects/Project3-2x.jpg'
  },
  {
    img: './img/Projects/Project4.jpg',
    skills: 'React, JavaScript, Node JS, Git',
    title: 'chego jewelry website',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: './img/Projects/Project4.jpg, ./img/Projects/Project4-2x.jpg'
  },
  {
    img: './img/Projects/Project5.jpg',
    skills: 'React, JavaScript, Node JS, Git',
    title: 'mimino website',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: './img/Projects/Project5.jpg, ./img/Projects/Project5-2x.jpg'
  },
  {
    img: './img/Projects/Project6.jpg',
    skills: 'React, JavaScript, Node JS, Git',
    title: 'vyshyvanka vibes Landing Page',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: './img/Projects/Project6.jpg, ./img/Projects/Project6-2x.jpg'
  },
  {
    img: './img/Projects/Project7.jpg',
    skills: 'React, JavaScript, Node JS, Git',
    title: 'green harvest online store',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: './img/Projects/Project7.jpg, ./img/Projects/Project7-2x.jpg'
  },
  {
    img: './img/Projects/Project8.jpg',
    skills: 'React, JavaScript, Node JS, Git',
    title: 'power pulse webservice ',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: './img/Projects/Project8.jpg, ./img/Projects/Project8-2x.jpg'
  },
  {
    img: './img/Projects/Project9.jpg',
    skills: 'React, JavaScript, Node JS, Git',
    title: 'wallet webservice',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: './img/Projects/Project9.jpg, ./img/Projects/Project9-2x.jpg'
  },
  {
    img: './img/Projects/Project10.jpg',
    skills: 'React, JavaScript, Node JS, Git',
    title: 'English excellence webservice ',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: './img/Projects/Project10.jpg, ./img/Projects/Project10-2x.jpg'
  },
];

let lengthArr = 0;

const loadMoreBtn = document.querySelector('.load-more-btn');
const projectsList = document.querySelector('.projects-list');

loadMoreBtn.addEventListener('click', event => {
  lengthArr += 3;
  if (lengthArr >= projects.length) {
    loadMoreBtn.style.visibility = 'hidden';
  }
  return createMarkup(projects);
});

window.addEventListener('load', event => {
  lengthArr += 3;
  return createMarkup(projects);
});

function createMarkup(arr) {
  const markup = arr
    .slice(0, lengthArr)
    .map(
      ({ img, skills, title, link, srcset }) =>
        `
    <li class="projects-list-card">
                <img srcset="${srcset}" src="${img}" alt="${title}" width="320" class="my-project-picture">
                <div class="discription-container">
                    <div class="wrapper">
                        <p class="skills-text">${skills}</p>
                        <h3 class="project-title">${title}</h3>
                    </div>
                    <a href="${link}" class="my-projects-link">VISIT
                    <svg class="icon icon-Vector-above-right-24">
                    <use href="./img/icons.svg#icon-Vector-above-right-24"></use>
                    </svg>
                  </a>
                </div>

            </li>
    `
    )
    .join('');
  projectsList.innerHTML = markup;
}
