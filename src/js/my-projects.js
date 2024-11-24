import imgProject1Path from '../img/Projects/Project1.jpg';
import imgProject2Path from '../img/Projects/Project2.jpg';
import imgProject3Path from '../img/Projects/Project3.jpg';
import imgProject4Path from '../img/Projects/Project4.jpg';
import imgProject5Path from '../img/Projects/Project5.jpg';
import imgProject6Path from '../img/Projects/Project6.jpg';
import imgProject7Path from '../img/Projects/Project7.jpg';
import imgProject8Path from '../img/Projects/Project8.jpg';
import imgProject9Path from '../img/Projects/Project9.jpg';
import imgProject10Path from '../img/Projects/Project10.jpg';

const projects = [
  {
    img: imgProject1Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'starlight studio landing page',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
  },
  {
    img: imgProject2Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'energy flow webservice ',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
  },
  {
    img: imgProject3Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'fruitbox online store',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
  },
  {
    img: imgProject4Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'chego jewelry website',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
  },
  {
    img: imgProject5Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'mimino website',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
  },
  {
    img: imgProject6Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'vyshyvanka vibes Landing Page',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
  },
  {
    img: imgProject7Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'green harvest online store',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
  },
  {
    img: imgProject8Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'power pulse webservice ',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
  },
  {
    img: imgProject9Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'wallet webservice',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
  },
  {
    img: imgProject10Path,
    skills: 'React, JavaScript, Node JS, Git',
    title: 'English excellence webservice ',
    link: 'https://github.com/vovaVat/Portfolio-2.0',
  },
];

// let projectsLoad = [];
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
      ({ img, skills, title, link }) =>
        `
    <li class="projects-list-card">
                <img src="${img}" alt="${title}" width="320" class="my-project-picture">
                <div class="discription-container">
                    <div class="wrapper">
                        <p class="skills-text">${skills}</p>
                        <h3 class="project-title">${title}</h3>
                    </div>
                    <a href="${link}" class="my-projects-link">VISIT</a>
                </div>

            </li>
    `
    )
    .join('');
  projectsList.innerHTML = markup;
}
