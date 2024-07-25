(function () {
  const originalAddEventListener = EventTarget.prototype.addEventListener;

  EventTarget.prototype.addEventListener = function (type, listener, options) {
    if (type === 'touchstart' || type === 'touchmove') {
      if (typeof options === 'object') {
        options.passive = true;
      } else {
        options = { passive: true };
      }
    }
    originalAddEventListener.call(this, type, listener, options);
  };
})();

import { fetchImages } from './js/pixabay-api.js';
import {
  renderImageCards,
  clearGallery,
  appendImagesToGallery,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a');
let page = 1;

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search term' });
    return;
  }

  clearGallery();
  loader.style.display = 'block';

  try {
    const data = await fetchImages(query, page);
    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'No Results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      const markup = renderImageCards(data.hits);
      appendImagesToGallery(markup);
      lightbox.refresh();
      event.target.elements.searchQuery.value = '';
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    loader.style.display = 'none';
  }
});
