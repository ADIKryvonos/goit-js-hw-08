const e=document.querySelector(".gallery"),a=galleryItems.map((({preview:e,original:a,description:l})=>`<a class="gallery__item" href="${a}">\n  <img class="gallery__image" src="${e}" alt="${l}" />\n</a>`)).join("");e.insertAdjacentHTML("beforeend",a);new SimpleLightbox(".gallery a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=01-gallery.f9c7c89d.js.map
