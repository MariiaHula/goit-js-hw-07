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
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image ${description}"
    />
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

refs.galleryItem = document.querySelector('.gallery__item');
refs.galleryImage = document.querySelector('.gallery__link');

refs.galleryList.addEventListener('click', onGalleryListClick);

let imageBox;
const onBoxShow = () => {
    document.addEventListener('keydown', onDocumentKeyDown);
    // console.log('listener added');
}
const onBoxClose = () => {
    document.removeEventListener('keydown', onDocumentKeyDown);
    // console.log('listener removed');
}

function onGalleryListClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) return;
    const imgValue = event.target;
    const urlValue = imgValue.dataset.source;
    imageBox = basicLightbox.create(`<img width="1400" height="900" src="${urlValue}">`, {
        onShow: onBoxShow,
        onClose: onBoxClose
    });
    imageBox.show();
}

function onDocumentKeyDown(event) {
    if (event.key === 'Escape') { 
        imageBox.close();
    }   
};




