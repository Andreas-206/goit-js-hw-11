import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41701983-23ca5d5908e2c78927e8095f2';

const getBaseUrl = () => {
  const url = new URL(BASE_URL);
  url.searchParams.append("key", API_KEY)

  return url;
}

const fetchImg = (query) => {
  const url = getBaseUrl();
  url.searchParams.append("q", query);

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => data.hits)
    .catch((error) => {
      console.error(`Error fetching images:`, error);
      throw error;
    });
};

const renderGallery = (images) => {
  const galleryCoontainer = document.getElementById("gallery");
  galleryCoontainer.innerHTML = "";

  const lightbox = new SimpleLightbox(".gallery-item");

  images.forEach(({ image }) => {
    galleryCoontainer.insertAdjacentHTML(
      'beforeend', `
    <li>
    <a href="${largeImageURL}" class="gallery-item">
      <img src="${webformatURL}" alt="${tags}">
    </a>
    </li>
    `
    );
  });

  lightbox.refresh();
};

let loader = document.getElementById("loader");

const showLoadingIndicator = () => {
  loader.style.display = "block";
};

const hideLoadingIndicator = () => {
  loader.style.display = "none";
};

const showMessage = (message, type = "info") => {
  iziToast[type]({
    title: message,
    position: "topCenter",
  });
};

const handleSearсhFormSubmit = (event) => {
  event.preventDefault();

  const searchInput = document.getElementById("search-input");
  const query = searchInput.value.trim();

  if (query === "") {
    showMessage("Please enter a search query", "warning");
    return;
  }

  showLoadingIndicator();

  fetchImg(guery)
    .then((images) => {
      hideLoadingIndicator();
      if (images.length > 0) {
        renderGallery(images);
      } else {
        showMessage("Sorry, there are no images matching your search query. Please try again.", "error");
      }
    })
    .catch((error) => {
      hideLoadingIndicator();
      showMessage("Error fetching images. Pease try again later.", "error");
    });
};

const searchForm = document.getElementById("form");
searchForm.addEventListener("submit", handleSearсhFormSubmitndleSearchFormSubmit);

































// const url = getBaseUrl();
// url.searchParams.append("q", "query");

// fetch(url)
//   .then(res => res.json())
//   .then(images => {
//     document.body.insertAdjacentHTML("beforeend", `
//     <img src="${images.hits[0].largeImageURL}"/>
//     `)
//   })