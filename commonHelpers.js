import{S as d,i}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const f="45081240-5f1794f19be8a159ba53eac07",p="https://pixabay.com/api/";async function m(s,t=1,n=12){const r=`${p}?key=${f}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${n}`,e=await fetch(r);if(!e.ok)throw new Error("Network response was not ok");return await e.json()}function y(){document.querySelector(".gallery").innerHTML=""}function g(s){return s.map(({webformatURL:t,largeImageURL:n,tags:r,likes:e,views:o,comments:a,downloads:u})=>`
    <div class="photo-card">
      <a href="${n}">
        <img src="${t}" alt="${r}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${e}</p>
        <p><b>Views:</b> ${o}</p>
        <p><b>Comments:</b> ${a}</p>
        <p><b>Downloads:</b> ${u}</p>
      </div>
    </div>
  `).join("")}function h(s){document.querySelector(".gallery").insertAdjacentHTML("beforeend",s)}(function(){const s=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(t,n,r){(t==="touchstart"||t==="touchmove")&&(typeof r=="object"?r.passive=!0:r={passive:!0}),s.call(this,t,n,r)}})();const c=document.querySelector("#search-form");document.querySelector(".gallery");const l=document.querySelector(".loader");let b=new d(".gallery a"),v=1;c.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(!t){i.error({title:"Error",message:"Please enter a search term"});return}y(),l.style.display="block";try{const n=await m(t,v);if(n.hits.length===0)i.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});else{const r=g(n.hits);h(r),b.refresh(),c.elements.searchQuery.value=""}}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{l.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
