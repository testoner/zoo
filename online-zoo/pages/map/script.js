const blackStyle = document.querySelector('.blackstyle');
const linkStyle = document.querySelector('link');

const bal = document.querySelector('.bal');
const bar = document.querySelector('.bar');

const bigMap = document.querySelector('.big__map');

const blackPop = document.querySelectorAll(".blackpopup");

const footerButton = document.querySelector(".footer__menu__button");

blackStyle.addEventListener('change', function () {
  transition();
  if (this.checked) {
    linkStyle.href = "mapblack.css";

    bal.src = "../../assets/images/bal.png";

    bar.src = "../../assets/images/bar.png";

    blackPop.forEach((el) => {
      el.src = "../../assets/images/popblk.png";
    });
    bigMap.src = '../../assets/images/gmap.png';
  } else {
    linkStyle.href = 'mapstyle.css';

    bal.src = "../../assets/icons/left-arrow.svg";

    bar.src = "../../assets/icons/right-arrow.svg";

    blackPop.forEach((el) => {
      el.src = "../../assets/images/tooltip.png";
    });
    bigMap.src = '../../assets/images/mappage.png';
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

/*range input*/
const mapInput = document.querySelector('.map__slider-input');
const mapNumber = document.querySelector('.map__slider-number');

function mapRange() {
  const mapNewValue = mapInput.value;
  mapNumber.innerHTML = `0${mapNewValue}`;
}

mapInput.addEventListener("input", () => {
  mapRange();
  if (mapInput.value == 1) {
    mapround.style.left = 5 + 'px';
    delActSldie();
    mapSlider[mapIndex - 1].classList.add('active__svg__all');
    mapSlider[mapInput.value].classList.remove('active__svg__all');
    mapSlider[mapInput.value].classList.add('active__svg__all__active');
    mapSlider[mapInput.value - 1].classList.remove('active__svg__all');
    mapIndex = mapInput.value;
    colorPath(mapIndex);
    mapSwitch(mapIndex);
  } else {
    mapround.style.left = 113 + 138 * (mapInput.value - 2) + 'px';
    delActSldie();
    mapSlider[mapIndex - 1].classList.add('active__svg__all');
    mapSlider[mapInput.value].classList.remove('active__svg__all');
    mapSlider[mapInput.value].classList.add('active__svg__all__active');
    mapSlider[mapInput.value - 1].classList.remove('active__svg__all');
    mapIndex = mapInput.value;
    colorPath(mapIndex);
    mapSwitch(mapIndex);
  }
});

/*slider*/
const leftBtn = document.querySelector('.bal');
const rightBtn = document.querySelector('.bar');

const mapSlider = document.querySelectorAll('.map__slider img');

const mapround = document.querySelector('.map__round');

let mapIndex = 2;
let lastchild = mapSlider[2];

const mapPath = document.querySelectorAll('path');

const mapbutton = document.querySelector('.mapbutton');

const srcArr = ['liveoriel.html', 'livekroko.html', 'livemagu.html', 'livepanda.html'];

console.log(mapPath);

function mapSwitch(index) {
  if (index == 1) mapbutton.href = `../live/${srcArr[2]}`;
  if (index == 2) mapbutton.href = `../live/${srcArr[3]}`;
  if (index == 3) mapbutton.href = `../live/${srcArr[1]}`;
  if (index == 4) mapbutton.href = `../live/${srcArr[0]}`;
  if (index > 4) mapbutton.href = `#`;
}

function colorPath(index) {
  if (index >= 1 && index <= 4) {
    mapPath.forEach((el) => {
      if (el.fill = '#EB5757') {
        el.style.fill = '#4BD8B5';
      }
    })
    if (index == 1) mapPath[2].style.fill = '#EB5757';
    if (index == 2) mapPath[3].style.fill = '#EB5757';
    if (index == 3) mapPath[1].style.fill = '#EB5757';
    if (index == 4) mapPath[0].style.fill = '#EB5757';
    console.log(mapPath[index - 1].fill);
  } else {
    mapPath.forEach((el) => {
      if (el.fill = '#EB5757') {
        el.style.fill = '#4BD8B5';
      }
    })
  }
}

function delActSldie() {
  mapSlider.forEach((elem) => {
    if (elem.classList.contains('active__svg__all__active')) {
      elem.classList.remove('active__svg__all__active');
      elem.classList.add('active__svg__all');
    }
    if (elem.classList.contains('first__active__svg__all')) {
      elem.classList.remove('first__active__svg__all');
      elem.classList.add('active__svg__all');
    }
  })
}

function sliderSv(el, index) {
  el.addEventListener("click", () => {
    if (index != 0) {
      lastchild = el;
      if (index == 1) {
        mapround.style.left = 5 + "px";
      } else {
        mapround.style.left = 113 + 138 * (index - 2) + 'px';
      }
      if (mapIndex != 0) {
        mapSlider[mapIndex - 1].classList.add('active__svg__all');
      }
      delActSldie();
      el.classList.remove('active__svg__all');
      el.classList.add('active__svg__all__active');
      if (index != 0) {
        mapSlider[index - 1].classList.remove('active__svg__all');
      }

      mapIndex = index;
      mapInput.value = mapIndex;
      mapRange();
      colorPath(mapIndex);
      mapSwitch(mapIndex);
      console.log(mapIndex);
    }
  });
}

mapSlider.forEach((el, index) => {
  sliderSv(el, index);
});

console.log(rightBtn, ' ', leftBtn);

rightBtn.addEventListener("click", () => {
  if (mapIndex == 8) {
    mapIndex = 1;
    mapInput.value = mapIndex;
    mapRange();
    colorPath(mapIndex);
    mapSwitch(mapIndex);
    mapround.style.left = 5 + 'px';
    delActSldie();
    mapSlider[7].classList.add('active__svg__all');
    mapSlider[mapIndex].classList.remove('active__svg__all');
    mapSlider[mapIndex].classList.add('active__svg__all__active');

  } else
    if (mapIndex != 8) {
      mapIndex++;
      mapInput.value = mapIndex;
      mapRange();
      colorPath(mapIndex);
      mapSwitch(mapIndex);
      mapround.style.left = 113 + 138 * (mapIndex - 2) + 'px';
      delActSldie();
      mapSlider[mapIndex - 2].classList.add('active__svg__all');
      mapSlider[mapIndex].classList.remove('active__svg__all');
      mapSlider[mapIndex].classList.add('active__svg__all__active');
      mapSlider[mapIndex - 1].classList.remove('active__svg__all');
    }
})

leftBtn.addEventListener("click", () => {
  if (mapIndex == 1) {
    mapIndex = 8;
    mapInput.value = mapIndex;
    mapRange();
    colorPath(mapIndex);
    mapSwitch(mapIndex);
    mapround.style.left = 113 + 138 * (mapIndex - 2) + 'px';
    delActSldie();
    mapSlider[2].classList.add('active__svg__all');
    mapSlider[mapIndex].classList.remove('active__svg__all');
    mapSlider[mapIndex].classList.add('active__svg__all__active');
    mapSlider[mapIndex - 1].classList.remove('active__svg__all');
  } else
    if (mapIndex == 8) {
      mapIndex--;
      mapInput.value = mapIndex;
      mapRange();
      colorPath(mapIndex);
      mapSwitch(mapIndex);
      mapround.style.left = 113 + 138 * (mapIndex - 2) + 'px';
      delActSldie();

      mapSlider[mapIndex].classList.remove('active__svg__all');
      mapSlider[mapIndex].classList.add('active__svg__all__active');
      mapSlider[mapIndex - 1].classList.remove('active__svg__all');
    } else
      if (mapIndex == 2) {
        mapIndex--;
        mapInput.value = mapIndex;
        mapRange();
        colorPath(mapIndex);
        mapSwitch(mapIndex);
        mapround.style.left = 5 + "px";
        delActSldie();
        mapSlider[mapIndex + 2].classList.add('active__svg__all');
        mapSlider[mapIndex].classList.remove('active__svg__all');
        mapSlider[mapIndex].classList.add('active__svg__all__active');
        mapSlider[mapIndex - 1].classList.remove('active__svg__all');
      } else
        if ((mapIndex > 1) && (mapIndex <= 7)) {
          mapIndex--;
          mapInput.value = mapIndex;
          mapRange();
          colorPath(mapIndex);
          mapSwitch(mapIndex);
          mapround.style.left = 113 + 138 * (mapIndex - 2) + 'px';
          delActSldie();
          mapSlider[mapIndex + 2].classList.add('active__svg__all');
          mapSlider[mapIndex].classList.remove('active__svg__all');
          mapSlider[mapIndex].classList.add('active__svg__all__active');
          mapSlider[mapIndex - 1].classList.remove('active__svg__all');
        }
})

