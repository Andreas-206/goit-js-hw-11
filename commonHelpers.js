import{S as p,i as f}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const g="https://pixabay.com/api/",y="41701983-23ca5d5908e2c78927e8095f2",L=()=>{const r=new URL(g);return r.searchParams.append("key",y),r.searchParams.append("image_type","photo"),r.searchParams.append("orientation","horizontal"),r.searchParams.append("safesearch",!0),r},w=r=>{const n=L();return n.searchParams.append("q",r),fetch(n).then(t=>{if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.json()}).then(t=>t.hits).catch(t=>{throw console.error("Error fetching images:",t),t})},E=r=>{const n=document.getElementById("gallery");n.innerHTML="";const t=new p(".gallery-item");r.forEach(s=>{const{webformatURL:e,largeImageURL:o,tags:a,likes:d,views:u,comments:m,downloads:h}=s;n.insertAdjacentHTML("beforeend",`
    <li class="gallery-item">
    <a href="${o}"
      <img src="${e}" alt="${a}"/>
    <a/>
    <p>Likes: ${d}<p/>
    <p>view: ${u}<p/>
    <p>comments: ${m}<p/>
    <p>downloads: ${h}<p/>
    </li>
    `)}),t.refresh()};let l=document.getElementById("loader");const I=()=>{l.style.display="block"},c=()=>{l.style.display="none"},i=(r,n="info")=>{f[n]({title:r,position:"topCenter"})},P=r=>{r.preventDefault();const t=document.getElementById("search-input").value.trim();if(t.length<3){i("Please enter a search query","warning");return}I(),w(t).then(s=>{c(),s.length>0?E(s):i("Sorry, there are no images matching your search query. Please try again.","error")}).catch(s=>{c(),i("Error fetching images. Pease try again later.","error")})},b=document.getElementById("form");b.addEventListener("submit",P);
//# sourceMappingURL=commonHelpers.js.map
