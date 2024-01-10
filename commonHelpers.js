import{S as d,i as u}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();const m="https://pixabay.com/api/",f="41701983-23ca5d5908e2c78927e8095f2",h=()=>{const o=new URL(m);return o.searchParams.append("key",f),o},g=o=>{const r=h();return r.searchParams.append("q",o),fetch(r).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>e.hits).catch(e=>{throw console.error("Error fetching images:",e),e})},p=o=>{const r=document.getElementById("gallery");r.innerHTML="";const e=new d(".gallery-item");o.forEach(({image:s})=>{r.insertAdjacentHTML("beforeend",`
    <li class="gallery-item">
    <a href="${largeImageURL}"
      <img src="${webformatURL}" alt="${tags}"/>
    <a/>
    <p>Likes: ${likes}<p/>
    <p>view: ${view}<p/>
    <p>comments: ${comments}<p/>
    <p>downloads: ${downloads}<p/>
    </li>
    `)}),e.refresh()};let l=document.getElementById("loader");const y=()=>{l.style.display="block"},c=()=>{l.style.display="none"},i=(o,r="info")=>{u[r]({title:o,position:"topCenter"})},L=o=>{o.preventDefault();const e=document.getElementById("search-input").value.trim();if(e===""){i("Please enter a search query","warning");return}y(),g(e).then(s=>{c(),s.length>0?p(s):i("Sorry, there are no images matching your search query. Please try again.","error")}).catch(s=>{c(),i("Error fetching images. Pease try again later.","error")})},w=document.getElementById("form");w.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
