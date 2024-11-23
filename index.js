import{A as q,i as l,a as J}from"./assets/vendor-Bwt5MwBX.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(o){if(o.ep)return;o.ep=!0;const e=s(o);fetch(o.href,e)}})();const C=document.querySelector(".menu-btm"),y=document.querySelector(".mob-menu"),M=document.querySelector(".mob-menu-close"),x=document.querySelectorAll(".mob-nav"),b=document.querySelector(".page-header"),S=document.querySelector("main"),j=document.querySelector("footer");C.addEventListener("click",I);function I(){y.classList.add("active"),b.classList.add("hidden"),S.classList.add("hidden"),j.classList.add("hidden")}M.addEventListener("click",P);function P(){y.classList.remove("active"),b.classList.remove("hidden"),S.classList.remove("hidden"),j.classList.remove("hidden")}x.forEach(t=>t.addEventListener("click",P));const h="/Portfolio-2.0/assets/icons-CmXDuV_f.svg",V=[{heading:"What programming languages are most often used in your project?",content:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{heading:"What are the deadlines for the project?",content:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{heading:"What payment methods do you accept?",content:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{heading:"How can I contact you?",content:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{heading:"Do you provide advice or support?",content:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{heading:"What does the process of developing a software product look like from idea to implementation?",content:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}];function A(t){const{heading:i,content:s}=t;return`
    <div class="accordion-item">
      <div class="accordion-header">
        <button class="accordion-trigger-button">
          <span class="accordion-header-title"> ${i} </span>

          <div class="accordion-trigger-button-icon">
            <svg class="down-icon" width="32" height="32" aria-label="icon-Dropdown icon">
              <use href="${h}#icon-btn-down"></use>
            </svg>
            <svg class="up-icon" width="32" height="32" aria-label="icon-Dropup icon">
              <use href="${h}#icon-btn-up"></use>
            </svg>
          </div>
        </button>
      </div>
      <div class="accordion-panel">
        <div class="accordion-content">${s}</div>
      </div>
    </div>`}function N(t,i){const s=i.map(A);t.innerHTML=s.join("")}function R(){const t=document.getElementById("faq-accordion");N(t,V),new q(t,{duration:400,elementClass:"accordion-item",triggerClass:"accordion-trigger-button",panelClass:"accordion-panel",activeClass:"is-open"}).open(0)}R();const d=[{img:"../img/Projects/Project1.jpg",skills:"React, JavaScript, Node JS, Git",title:"starlight studio landing page",link:"https://github.com/vovaVat/Portfolio-2.0"},{img:"./img/Projects/Project2.jpg",skills:"React, JavaScript, Node JS, Git",title:"energy flow webservice ",link:"https://github.com/vovaVat/Portfolio-2.0"},{img:"./img/Projects/Project3.jpg",skills:"React, JavaScript, Node JS, Git",title:"fruitbox online store",link:"https://github.com/vovaVat/Portfolio-2.0"},{img:"./img/Projects/Project4.jpg",skills:"React, JavaScript, Node JS, Git",title:"chego jewelry website",link:"https://github.com/vovaVat/Portfolio-2.0"},{img:"./img/Projects/Project5.jpg",skills:"React, JavaScript, Node JS, Git",title:"mimino website",link:"https://github.com/vovaVat/Portfolio-2.0"},{img:"./img/Projects/Project6.jpg",skills:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page",link:"https://github.com/vovaVat/Portfolio-2.0"},{img:"./img/Projects/Project7.jpg",skills:"React, JavaScript, Node JS, Git",title:"green harvest online store",link:"https://github.com/vovaVat/Portfolio-2.0"},{img:"./img/Projects/Project8.jpg",skills:"React, JavaScript, Node JS, Git",title:"power pulse webservice ",link:"https://github.com/vovaVat/Portfolio-2.0"},{img:"./img/Projects/Project9.jpg",skills:"React, JavaScript, Node JS, Git",title:"wallet webservice",link:"https://github.com/vovaVat/Portfolio-2.0"},{img:"./img/Projects/Project10.jpg",skills:"React, JavaScript, Node JS, Git",title:"English excellence webservice ",link:"https://github.com/vovaVat/Portfolio-2.0"}];let a=0;const v=document.querySelector(".load-more-btn"),T=document.querySelector(".projects-list");v.addEventListener("click",t=>(a+=3,a>=d.length&&(v.style.visibility="hidden"),w(d)));window.addEventListener("load",t=>(a+=3,w(d)));function w(t){const i=t.slice(0,a).map(({img:s,skills:n,title:o,link:e})=>`
    <li class="projects-list-card">
                <img src="${s}" alt="${o}" width="320" class="my-project-picture">
                <div class="discription-container">
                    <p class="skills-text">${n}</p>
                    <h3 class="project-title">${o}</h3>
                    <a href="${e}" class="my-projects-link">VISIT</a>
                </div>

            </li>
    `).join("");T.innerHTML=i}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".animate-on-scroll"),i=(e,c=1)=>e.getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)/c,s=e=>{e.classList.add("visible")},n=e=>{e.classList.remove("visible")},o=()=>{t.forEach(e=>{i(e,1.25)?s(e):n(e)})};window.addEventListener("scroll",()=>{o()}),o()});const u=document.querySelector(".together__form"),g=document.querySelector('input[name="email"'),f=document.querySelector('textarea[name="message"]'),r=document.querySelector(".error-message"),L=document.querySelector(".modal"),_=document.querySelector(".modal__close"),p=document.querySelector(".backdrop"),m=u.querySelector(".icon-success-filled"),$="https://portfolio-js.b.goit.study/api/requests";l.settings({messageSize:15,messageLineHeight:24,position:"topRight",timeout:7e3,closeOnClick:!0,maxWidth:350,transitionIn:"bounceInLeft",displayMode:1});const G=async t=>{if(t.preventDefault(),!k()||f.value.trim()===""){l.warning({message:"Invalid email or empty message field. Please, try again.",backgroundColor:"#ffd7a3",theme:"light",messageColor:"#292929"});return}try{const i={email:g.value,comment:f.value},s=await J.post($,i);D(s.data)}catch{l.error({message:"An error occurred while sending your message. Please try again.",backgroundColor:"rgb(239, 64, 64)",theme:"dark",messageColor:"#fff"})}u.reset(),m.classList.remove("valid")},k=()=>{if(g.validity.valid)return m.classList.add("valid"),r.style.display="none",!0;m.classList.remove("valid"),r.style.display="block",r.textContent="Invalid email, try again"},D=({title:t,message:i})=>{const s=document.querySelector(".modal__title"),n=document.querySelector(".modal__text");s.textContent=`${t}`,n.textContent=`${i}`,L.classList.add("show"),p.classList.add("visible"),document.body.style.overflow="hidden"},E=()=>{L.classList.remove("show"),p.classList.remove("visible"),document.body.style.overflow=""};u.addEventListener("submit",G);g.addEventListener("input",k);_.addEventListener("click",E);window.addEventListener("click",t=>{t.target===p&&E()});
//# sourceMappingURL=index.js.map
