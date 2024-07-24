import{S as u,i}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const d="45081240-5f1794f19be8a159ba53eac07",f="https://pixabay.com/api/";async function p(n,t=1,s=12){const r=`${f}?key=${d}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${s}`,e=await fetch(r);if(!e.ok)throw new Error("Network response was not ok");return await e.json()}function m(){document.querySelector(".gallery").innerHTML=""}function y(n){return n.map(({webformatURL:t,largeImageURL:s,tags:r,likes:e,views:o,comments:a,downloads:l})=>`
    <div class="photo-card">
      <a href="${s}">
        <img src="${t}" alt="${r}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${e}</p>
        <p><b>Views:</b> ${o}</p>
        <p><b>Comments:</b> ${a}</p>
        <p><b>Downloads:</b> ${l}</p>
      </div>
    </div>
  `).join("")}function g(n){document.querySelector(".gallery").insertAdjacentHTML("beforeend",n)}(function(){const n=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(t,s,r){(t==="touchstart"||t==="touchmove")&&(typeof r=="object"?r.passive=!0:r={passive:!0}),n.call(this,t,s,r)}})();const h=document.querySelector("#search-form");document.querySelector(".gallery");const c=document.querySelector(".loader");let b=new u(".gallery a"),v=1;h.addEventListener("submit",async n=>{n.preventDefault();const t=n.target.elements.searchQuery.value.trim();if(!t){i.error({title:"Error",message:"Please enter a search term"});return}m(),c.style.display="block";try{const s=await p(t,v);if(s.hits.length===0)i.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});else{const r=y(s.hits);g(r),b.refresh()}}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{c.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
