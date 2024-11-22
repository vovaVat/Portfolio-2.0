import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import iconsUrl from '../img/icons.svg';

const FAQ_ITEMS = [
  {
    heading: 'What programming languages are most often used in your project?',
    content:
      'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
  },
  {
    heading: 'What are the deadlines for the project?',
    content:
      'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
  },
  {
    heading: 'What payment methods do you accept?',
    content:
      'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
  },
  {
    heading: 'How can I contact you?',
    content:
      'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
  },
  {
    heading: 'Do you provide advice or support?',
    content:
      'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
  },
  {
    heading:
      'What does the process of developing a software product look like from idea to implementation?',
    content:
      'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
  },
];

function createAccordionItem(accordionItemData) {
  const { heading, content } = accordionItemData;

  return `
    <div class="accordion-item">
      <div class="accordion-header">
        <button class="accordion-trigger-button">
          <span class="accordion-header-title"> ${heading} </span>

          <div class="accordion-trigger-button-icon">
            <svg class="down-icon" width="32" height="32" aria-label="icon-Dropdown icon">
              <use href="${iconsUrl}#icon-Dropdown"></use>
            </svg>
            <svg class="up-icon" width="32" height="32" aria-label="icon-Dropup icon">
              <use href="${iconsUrl}#icon-Dropup"></use>
            </svg>
          </div>
        </button>
      </div>
      <div class="accordion-panel">
        <div class="accordion-content">${content}</div>
      </div>
    </div>`;
}

function renderAccordionElement(accordionElement, items) {
  const accordionItems = items.map(createAccordionItem);
  accordionElement.innerHTML = accordionItems.join('');
}

function initFAQ() {
  const faqAccordionElement = document.getElementById('faq-accordion');
  renderAccordionElement(faqAccordionElement, FAQ_ITEMS);
  const accordion = new Accordion(faqAccordionElement, {
    duration: 400,
    elementClass: 'accordion-item',
    triggerClass: 'accordion-trigger-button',
    panelClass: 'accordion-panel',
    activeClass: 'is-open',
  });
  accordion.open(0);
}

initFAQ();
