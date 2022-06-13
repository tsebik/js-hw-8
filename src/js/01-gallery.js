import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imageMarkup = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML('beforeend', imageMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
	<div class="gallery__item">
  		<a class="gallery__link" href="${original}">
    		<img
      		class="gallery__image"
      		src="${preview}"
      		alt="${description}"
    		/>
  		</a>
	</div>
	`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  enableKeyboard: true,
});
