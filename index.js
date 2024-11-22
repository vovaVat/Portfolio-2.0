import{A as r}from"./assets/vendor-CTqzIL4Y.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const a="/Portfolio-2.0/assets/iconss-xx_BZ7Fl.svg",d=[{heading:"What programming languages are most often used in your project?",content:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{heading:"What are the deadlines for the project?",content:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{heading:"What payment methods do you accept?",content:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{heading:"How can I contact you?",content:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{heading:"Do you provide advice or support?",content:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{heading:"What does the process of developing a software product look like from idea to implementation?",content:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}];function l(o){const{heading:n,content:i}=o;return`
    <div class="accordion-item">
      <div class="accordion-header">
        <button class="accordion-trigger-button">
          <span class="accordion-header-title"> ${n} </span>

          <div class="accordion-trigger-button-icon">
            <svg class="down-icon" width="32" height="32" aria-label="icon-Dropdown icon">
              <use href="${a}#icon-Dropdown"></use>
            </svg>
            <svg class="up-icon" width="32" height="32" aria-label="icon-Dropup icon">
              <use href="${a}#icon-Dropup"></use>
            </svg>
          </div>
        </button>
      </div>
      <div class="accordion-panel">
        <div class="accordion-content">${i}</div>
      </div>
    </div>`}function u(o,n){const i=n.map(l);o.innerHTML=i.join("")}function p(){const o=document.getElementById("faq-accordion");u(o,d),new r(o,{duration:400,elementClass:"accordion-item",triggerClass:"accordion-trigger-button",panelClass:"accordion-panel",activeClass:"is-open"}).open(0)}p();document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".animate-on-scroll"),n=(e,s=1)=>e.getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)/s,i=e=>{e.classList.add("visible")},c=e=>{e.classList.remove("visible")},t=()=>{o.forEach(e=>{n(e,1.25)?i(e):c(e)})};window.addEventListener("scroll",()=>{t()}),t()});
//# sourceMappingURL=index.js.map
