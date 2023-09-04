// імпортую бібліотеку Vimeo Player і функцію throttle з lodash
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// отримую посилання на <iframe> елемент відео за допомогою його id
const iframe = document.querySelector('#vimeo-player');

// створюю інстанцію плеєра Vimeo і передаю туди <iframe> елемент
const player = new Player(iframe);

// створюю ім'я, за яким  зберігаю поточний час відтворення в локальному сховищі
const CURRENT_TIME = 'videoplayer-current-time';

// встановлюю слухач події 'timeupdate' на плеєрі і використовю throttle,
// щоб обмежити частоту виконання функції onTimeUpDate до одного разу на секунду
player.on('timeupdate', throttle(onTimeUpDate, 1000));

// функція, яка викликається при оновленні часу відтворення відео
function onTimeUpDate(data) {

  // зберігаєю поточний час відтворення у локальному сховищі у форматі JSON
  localStorage.setItem(CURRENT_TIME, JSON.stringify(data.seconds));
}

// викликаю функцію setCurrentTime()
setCurrentTime();

// функція для встановлення поточного часу відтворення зі значення, збереженого в локальному сховищі
function setCurrentTime() {
  // перевіряю, чи існує збережений час відтворення у локальному сховищі
  if (localStorage.getItem(CURRENT_TIME)) {
    // встановлюю поточний час відтворення на плеєрі зі значення, збереженого в локальному сховищі
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
  }
}

