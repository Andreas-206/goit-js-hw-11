import{S as d,i as u}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const m="https://pixabay.com/api/",f="41701983-23ca5d5908e2c78927e8095f2",h=()=>{const o=new URL(m);return o.searchParams.append("key",f),o},g=o=>{const r=h();return r.searchParams.append("q",o),fetch(r).then(t=>{if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.json()}).then(t=>t.hits).catch(t=>{throw console.error("Error fetching images:",t),t})},p=o=>{const r=document.getElementById("gallery");r.innerHTML="";const t=new d(".gallery-item");o.forEach(({image:s})=>{r.insertAdjacentHTML("beforeend",`
    <li class="gallery-item">
    <img src="${webformatURL}" data-source="${largeImageURL}" alt="${tags}"/>
    <p>Likes: ${likes}<p/>
    <p>view: ${view}<p/>
    <p>comments: ${comments}<p/>
    <p>downloads: ${downloads}<p/>
    </li>
    `)}),t.refresh()};let l=document.getElementById("loader");const y=()=>{l.style.display="block"},c=()=>{l.style.display="none"},i=(o,r="info")=>{u[r]({title:o,position:"topCenter"})},L=o=>{if(o.preventDefault(),document.getElementById("search-input").value.trim()===""){i("Please enter a search query","warning");return}y(),g(guery).then(s=>{c(),s.length>0?p(s):i("Sorry, there are no images matching your search query. Please try again.","error")}).catch(s=>{c(),i("Error fetching images. Pease try again later.","error")})},w=document.getElementById("form");w.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map