import{S as u,i}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const d="45081240-5f1794f19be8a159ba53eac07",f="https://pixabay.com/api/";async function p(s,t=1,a=12){const r=`${f}?key=${d}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${a}`,e=await fetch(r);if(!e.ok)throw new Error("Network response was not ok");return await e.json()}function m(){document.querySelector(".gallery").innerHTML=""}function y(s){return s.map(({webformatURL:t,largeImageURL:a,tags:r,likes:e,views:o,comments:n,downloads:l})=>`
    <div class="photo-card">
      <a href="${a}">
        <img src="${t}" alt="${r}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${e}</p>
        <p><b>Views:</b> ${o}</p>
        <p><b>Comments:</b> ${n}</p>
        <p><b>Downloads:</b> ${l}</p>
      </div>
    </div>
  `).join("")}function g(s){document.querySelector(".gallery").insertAdjacentHTML("beforeend",s)}(function(){const s=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(t,a,r){(t==="touchstart"||t==="touchmove")&&(typeof r=="object"?r.passive=!0:r={passive:!0}),s.call(this,t,a,r)}})();const h=document.querySelector("#search-form");document.querySelector(".gallery");const c=document.querySelector(".loader");let b=new u(".gallery a"),v=1;h.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(!t){i.error({title:"Error",message:"Please enter a search term"});return}m(),c.style.display="block";try{const a=await p(t,v);if(a.hits.length===0)i.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});else{const r=y(a.hits);g(r),b.refresh(),s.target.elements.searchQuery.value=""}}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{c.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
