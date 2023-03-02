const blackStyle = document.querySelector('.blackstyle');
const linkStyle = document.querySelector('link');

const bad = document.querySelector('.bad');

const footerButton = document.querySelector(".footer__menu__button");

blackStyle.addEventListener('change', function () {
  transition();
  if (this.checked) {
    linkStyle.href = "blackzoo.css";
    bad.src = "../../assets/images/bad.png";
  } else {
    linkStyle.href = 'stylepanda.css';
    bal.src = "../../assets/images/arrow-down.png";
  }
})

function transition() {
  document.documentElement.classList.add('transition');
  setTimeout(function () {
    document.documentElement.classList.remove('transition');
  }, 500)
}
/*Donate*/
const body = document.querySelector('body');

const bgPopup = document.querySelector('.bg-podpup');
const popup = document.querySelector('.podpup');

footerButton.addEventListener("click", uppopup);

bgPopup.addEventListener('click', (event) => {
  console.log(event);
  if (event.target.classList.contains('bg-podpup')) {
    body.style.overflow = "visible";
    bgPopup.style.display = 'none';

  }
})

function uppopup() {
  body.style.overflow = "hidden";
  bgPopup.style.display = 'block';
}
/*iframe*/

const mainIframe = document.querySelector('.main-video iframe');
const afterIframe = document.querySelectorAll('.after-video iframe');
const displayWrapper = document.querySelectorAll('.display-wrapper');

console.log(afterIframe);

displayWrapper.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    const src = afterIframe[index].src;
    afterIframe[index].src = mainIframe.src;
    console.log(src);
    mainIframe.src = src;
    console.log(src, ' ', mainIframe);
  })
})