import{S as u,i as d}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const f="https://pixabay.com/api/",m="41701983-23ca5d5908e2c78927e8095f2",h=()=>{const o=new URL(f);return o.searchParams.append("key",m),o},g=o=>{const r=h();return r.searchParams.append("q",o),fetch(r).then(t=>{if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.json()}).then(t=>t.hits).catch(t=>{throw console.error("Error fetching images:",t),t})},y=o=>{const r=document.getElementById("gallery");r.innerHTML="";const t=new u(".gallery-item");o.forEach(({image:s})=>{r.insertAdjacentHTML("beforeend",`
    <li>
    <a href="${largeImageURL}" class="gallery-item">
      <img src="${webformatURL}" alt="${tags}">
    </a>
    </li>
    `)}),t.refresh()};let l=document.getElementById("loader");const p=()=>{l.style.display="block"},c=()=>{l.style.display="none"},i=(o,r="info")=>{d[r]({title:o,position:"topCenter"})},L=o=>{if(o.preventDefault(),document.getElementById("search-input").value.trim()===""){i("Please enter a search query","warning");return}p(),g(guery).then(s=>{c(),s.length>0?y(s):i("Sorry, there are no images matching your search query. Please try again.","error")}).catch(s=>{c(),i("Error fetching images. Pease try again later.","error")})},E=document.getElementById("form");E.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
