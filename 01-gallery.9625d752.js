!function(){var a=document.querySelector(".gallery"),e=galleryItems.map((function(a){var e=a.preview,n=a.original,t=a.description;return'<a class="gallery__item" href="'.concat(n,'">\n  <img class="gallery__image" src="').concat(e,'" alt="').concat(t,'" />\n</a>')})).join("");a.insertAdjacentHTML("beforeend",e);new SimpleLightbox(".gallery a",{captionDelay:250,captionsData:"alt"})}();
//# sourceMappingURL=01-gallery.9625d752.js.map