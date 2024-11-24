import imgProject1Path from '../img/Projects/Project1.jpg';
import imgProject1Path_x2 from '../img/Projects/Project1-2x.jpg';
import imgProject2Path from '../img/Projects/Project2.jpg';
import imgProject2Path_x2 from '../img/Projects/Project2-2x.jpg';
import imgProject3Path from '../img/Projects/Project3.jpg';
import imgProject3Path_x2 from '../img/Projects/Project3-2x.jpg';
import imgProject4Path from '../img/Projects/Project4.jpg';
import imgProject4Path_x2 from '../img/Projects/Project4-2x.jpg';
import imgProject5Path from '../img/Projects/Project5.jpg';
import imgProject5Path_x2 from '../img/Projects/Project5-2x.jpg';
import imgProject6Path from '../img/Projects/Project6.jpg';
import imgProject6Path_x2 from '../img/Projects/Project6-2x.jpg';
import imgProject7Path from '../img/Projects/Project7.jpg';
import imgProject7Path_x2 from '../img/Projects/Project7-2x.jpg';
import imgProject8Path from '../img/Projects/Project8.jpg';
import imgProject8Path_x2 from '../img/Projects/Project8-2x.jpg';
import imgProject9Path from '../img/Projects/Project9.jpg';
import imgProject9Path_x2 from '../img/Projects/Project9-2x.jpg';
import imgProject10Path from '../img/Projects/Project10.jpg';
import imgProject10Path_x2 from '../img/Projects/Project10-2x.jpg';

import svgVector from '../img/icons.svg#icon-Vector-above-right-24';

const projects = [
  {
    img: imgProject1Path,

    skills: 'React, JavaScript, Node JS, Git',
    title: 'starlight studio landing page',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: `${imgProject1Path}, ${imgProject1Path_x2}`,
  },
  {
    img: imgProject2Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'energy flow webservice ',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: `${imgProject2Path}, ${imgProject2Path_x2}`,
  },
  {
    img: imgProject3Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'fruitbox online store',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: `${imgProject3Path}, ${imgProject3Path_x2}`,
  },
  {
    img: imgProject4Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'chego jewelry website',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: `${imgProject4Path}, ${imgProject4Path_x2}`,
  },
  {
    img: imgProject5Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'mimino website',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: `${imgProject5Path}, ${imgProject5Path_x2}`,
  },
  {
    img: imgProject6Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'vyshyvanka vibes Landing Page',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: `${imgProject6Path}, ${imgProject6Path_x2}`,
  },
  {
    img: imgProject7Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'green harvest online store',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: `${imgProject7Path}, ${imgProject7Path_x2}`,
  },
  {
    img: imgProject8Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'power pulse webservice ',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: `${imgProject8Path}, ${imgProject8Path_x2}`,
  },
  {
    img: imgProject9Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'wallet webservice',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: `${imgProject9Path}, ${imgProject9Path_x2}`,
  },
  {
    img: imgProject10Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'English excellence webservice ',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
    srcset: `${imgProject10Path}, ${imgProject10Path_x2}`,
  },
];

let lengthArr = 0;
let step = 3;

const loadMoreBtn = document.querySelector('.load-more-btn');
const projectsList = document.querySelector('.projects-list');

loadMoreBtn.addEventListener('click', event => {
  lengthArr += 3;
  step +=3;
  if (step >= projects.length) {
    loadMoreBtn.style.display = 'none';
  }
  return createMarkup(projects);
});

window.addEventListener('load', event => {
  return createMarkup(projects);
});

function createMarkup(arr) {
  
  const markup = arr
    .slice(lengthArr, step)
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
                    <a href="${link}" class="my-projects-link" target="_blank" rel="noopener noreferrer">VISIT
                    <svg class="icon icon-Vector-above-right-24">
                    <use href=${svgVector}></use>
                    </svg>
                  </a>
                </div>

            </li>
    `
    )
    .join('');
    projectsList.insertAdjacentHTML('beforeend', markup);
}
