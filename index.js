import{A as c}from"./assets/vendor-CTqzIL4Y.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const r="/Portfolio-2.0/assets/icons-Ci8sQ5sJ.svg",d=[{heading:"What programming languages are most often used in your project?",content:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{heading:"What are the deadlines for the project?",content:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{heading:"What payment methods do you accept?",content:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{heading:"How can I contact you?",content:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{heading:"Do you provide advice or support?",content:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{heading:"What does the process of developing a software product look like from idea to implementation?",content:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}];function l(n){const{heading:o,content:i}=n;return`
    <div class="accordion-item">
      <div class="accordion-header">
        <button class="accordion-trigger-button">
          <span class="accordion-header-title"> ${o} </span>

          <div class="accordion-trigger-button-icon">
            <svg class="down-icon" width="32" height="32" aria-label="icon-Dropdown icon">
              <use href="${r}#icon-Dropdown"></use>
            </svg>
            <svg class="up-icon" width="32" height="32" aria-label="icon-Dropup icon">
              <use href="${r}#icon-Dropup"></use>
            </svg>
          </div>
        </button>
      </div>
      <div class="accordion-panel">
        <div class="accordion-content">${i}</div>
      </div>
    </div>`}function u(n,o){const i=o.map(l);n.innerHTML=i.join("")}function p(){const n=document.getElementById("faq-accordion");u(n,d),new c(n,{duration:400,elementClass:"accordion-item",triggerClass:"accordion-trigger-button",panelClass:"accordion-panel",activeClass:"is-open"}).open(0)}p();
//# sourceMappingURL=index.js.map
