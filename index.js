const humburger = document.querySelector('.nav-menue-btn');
humburger.onclick = function () {
  const navBar = document.querySelector('.menue-btn');
  navBar.classList.add('active');
};

const xmark = document.querySelector('.xmark');
xmark.onclick = function () {
  const navBar = document.querySelector('.menue-btn');
  navBar.classList.remove('active');
};
