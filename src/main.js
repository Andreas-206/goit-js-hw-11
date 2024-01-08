import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


fetch('https://pixabay.com/api/?key=41701983-23ca5d5908e2c78927e8095f2&q=yellow+flower')
  .then(res => res.json())
  .then(images => console.log(images))