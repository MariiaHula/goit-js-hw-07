import { galleryItems } from './gallery-items.js';
// Change code below this line


const refs = {
    galleryList: document.querySelector('.gallery'),
};



function galleryMarkup(array) {
  const markup = array
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join('');

  return markup;
}

function renderGalleryList(galleryArr) {
  const markup = galleryMarkup(galleryArr);
    refs.galleryList.insertAdjacentHTML('beforeend', markup);
}
renderGalleryList(galleryItems);

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250, });














