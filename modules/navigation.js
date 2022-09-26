export default function navFunction() {
  const listPage = document.querySelector('.collection-section');
  const formPage = document.querySelector('.form');
  const contactPage = document.querySelector('.ContactPage');
  const list = document.querySelector('.list-book-nav');
  const addNav = document.querySelector('.add-book-nav');
  const contactNav = document.querySelector('.contact-nav');

  list.addEventListener('click', () => {
    listPage.style.display = 'block';
    formPage.style.display = 'none';
    contactPage.style.display = 'none';
    list.classList.add('displaye');
    addNav.classList.remove('displaye');
    contactNav.classList.remove('displaye');
  });

  addNav.addEventListener('click', () => {
    formPage.style.display = 'block';
    listPage.style.display = 'none';
    contactPage.style.display = 'none';
    list.classList.remove('displaye');
    addNav.classList.add('displaye');
    contactNav.classList.remove('displaye');
  });

  contactNav.addEventListener('click', () => {
    contactPage.style.display = 'block';
    listPage.style.display = 'none';
    formPage.style.display = 'none';
    contactNav.classList.add('displaye');
    list.classList.remove('displaye');
    addNav.classList.remove('displaye');
  });
}
