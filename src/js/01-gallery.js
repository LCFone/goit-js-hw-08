// Add imports above this line

//імпортую бібліотеку СімплеЛайтбокс
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
 
// імпорт масиву з об'єктами з інформацією про зображення у галереї
import { galleryItems } from './gallery-items';
// Change code below this line

// знаходжу DOM-елемент з класом  галлері і зберігаю його в змінну галері
const gallery = document.querySelector('.gallery');

// роблю функцыю для сворення HTML-розмітки карток зображень на основі об'єктів у масиві
function createGalleryCardEl(galleres) {
    return galleres
      .map(({ preview, original, description }) => {
        return ` <div class="gallery__item">
              <a class="gallery__link" href="${original}">
               <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
              </a>
             </div> `;
      })
      .join('');
  }


  // викликаю функцію 'createGalleryCardEl' і передаю їй масив galleryItems
// результат її роботи (HTML-розмітка карточок) зберігаю в змінну galleryCard
const galleryCard = createGalleryCardEl(galleryItems);

// вставляю створену HTML-розмітку карточок у кінець DOM-елемента з класом gallery
gallery.insertAdjacentHTML('beforeend', galleryCard);

// створюю об'єкт 'lightbox' для роботи з simplelightbox
// вказую селектор для пошуку посилань (зображень), які будуть відкриватися в simplelightbox
// також налаштовуємо показ підписів (captions) та затримку перед їх відображенням

const lightbox = new SimpleLightbox('.gallery a', {
//  атрибут 'alt' зображення як підписи
  captionsData: 'alt', 
   // затримка перед показом підпису (в мілісекундах)

  captionDelay: 250,  
});

console.log(galleryItems);
