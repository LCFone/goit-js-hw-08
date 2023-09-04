// імпортую функцію throttle з бібліотеки lodash
import throttle from 'lodash.throttle';

// cтворюю об'єкт refs, в якому зберігаю посилання на DOM-елементи
const refs = {
    // знаходжу форму за класом 'feedback-form'
  form: document.querySelector('.feedback-form'), 

  // знаходжу перше поле вводу <input>
  inputEmail: document.querySelector('input'), 

  // знаходжу перше поле вводу <textarea>
  textares: document.querySelector('textarea'), 
};

// ім'я для ключа, за яким ббуду зберігати стан форми в локальному сховищі
const FORM_STATS = 'feedback-form-state';

// Ототримую дані з локального сховища і розпаковуємо їх в об'єкт feedbackForm, 
// або створююю пустий об'єкт, якщо дані відсутні
const feedbackForm = JSON.parse(localStorage.getItem(FORM_STATS)) || {};

// викликаю функцію populateFormInput(), яка заповнить поля форми зі збереженими даними
populateFormInput();

// додаю слухач події input на форму з обробником onForminput, використовуючи throttle
refs.form.addEventListener('input', throttle(onForminput, 500));

// додаємо слухач події submit на форму з обробником onSubmitForm
refs.form.addEventListener('submit', onSubmitForm);

// функція, яка викликається при введенні даних в поля форми
function onForminput({ target }) {

  // зберігаю значення введених даних в об'єкт feedbackForm за відповідними іменами полів
  feedbackForm[target.name] = target.value;

  // зберігаю об'єкт feedbackForm у локальному сховищі у форматі JSON
  localStorage.setItem(FORM_STATS, JSON.stringify(feedbackForm));
}

// функція, яка викликається при відправці форми
function onSubmitForm(e) {

     // відміняю стандартну дію відправки форми
  e.preventDefault();

  // очищаємо дані введені в формі
  e.currentTarget.reset(); 

// виводжу збережені дані у консоль
  console.log(JSON.parse(localStorage.getItem(FORM_STATS))); 

  // видаляю дані про стан форми з локального сховища
  localStorage.removeItem(FORM_STATS); 
}

// функція, яка заповнює мої поля форми зі збереженими даними
function populateFormInput() {
  const savedFormData = JSON.parse(localStorage.getItem(FORM_STATS));
  if (savedFormData) {
    if (savedFormData.email) {
      refs.inputEmail.value = "";
    }
    if (savedFormData.message) {
      refs.textares.value = "";
    }
  }
}

