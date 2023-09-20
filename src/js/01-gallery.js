// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    img =>
      `<li class="gallery__item"><a class="gallery__link" href="${img.original}"><img
      class="gallery__image"
      src="${img.preview}"
      alt="${img.description}"
    />
  </a>
</li>`
  )
  .join('');
galleryList.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
