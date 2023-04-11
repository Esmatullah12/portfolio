const humburger = document.querySelector('.nav-menue-btn');
humburger.onclick = function () {
  const navBar = document.querySelector('.menue-btn');
  navBar.classList.add('active');
};

const xmark = document.querySelectorAll('.exam');
for (let i = 0; i < xmark.length; i += 1) {
  xmark[i].onclick = function () {
    const navBar = document.querySelector('.menue-btn');
    navBar.classList.remove('active');
  };
}