const galleryList = document.querySelector('.gallery');
const addGalleryList = createGalleryMarking(galleryItems);

function createGalleryMarking(img) {
  return img
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

galleryList.insertAdjacentHTML('beforeend', addGalleryList);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
