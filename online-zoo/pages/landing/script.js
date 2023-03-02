const blackStyle = document.querySelector('.blackstyle');
const linkStyle = document.querySelector('link');

const dark1 = document.querySelector('.dark1');
const dark2 = document.querySelector('.dark2');
const dark3 = document.querySelector('.dark3');

const bal = document.querySelectorAll('.bal');
const bar = document.querySelectorAll('.bar');

const bigMap = document.querySelector('.big__map');

const blackPop = document.querySelectorAll(".blackpopup");

const footerButton = document.querySelector(".footer__menu__button");

const petsImg = document.querySelectorAll('.pets__slider__img');

const petsBtnLeft = document.querySelector('.bal');
const petsBtnRight = document.querySelector('.bar');

let petsIndex = 0;

let workIn = 1;
/*switch black*/
blackStyle.addEventListener('change', function () {
  transition();
  if (this.checked) {
    linkStyle.href = "blackstyle.css";
    dark1.src = "../../assets/images/dv1.png";
    dark2.src = "../../assets/images/dark.png";
    dark3.src = "../../assets/images/dark1.png";
    bal.forEach((el) => {
      el.src = "../../assets/images/bal.png";
    });
    bar.forEach((el) => {
      el.src = "../../assets/images/bar.png";
    });
    blackPop.forEach((el) => {
      el.src = "../../assets/images/popblk.png";
    });
    bigMap.src = '../../assets/images/gmap.png';
  } else {
    linkStyle.href = 'style.css';
    dark1.src = "../../assets/icons/visa.svg";
    dark2.src = "../../assets/icons/payment.svg";
    dark3.src = "../../assets/icons/panda.svg";
    bal.forEach((el) => {
      el.src = "../../assets/icons/left-arrow.svg";
    });
    bar.forEach((el) => {
      el.src = "../../assets/icons/right-arrow.svg";
    });
    blackPop.forEach((el) => {
      el.src = "../../assets/images/tooltip.png";
    });
    bigMap.src = '../../assets/images/landingmap.png';
  }
})

function transition() {
  document.documentElement.classList.add('transition');
  setTimeout(function () {
    document.documentElement.classList.remove('transition');
  }, 500)
}
/*donate*/
const body = document.querySelector('body');

const bgPopup = document.querySelector('.bg-podpup');
const popup = document.querySelector('.podpup');
const payButton = document.querySelector('.pay__content__button button');
const firstDonate = document.querySelector('.first__donate__button');

footerButton.addEventListener("click", uppopup);
payButton.addEventListener('click', uppopup);
firstDonate.addEventListener('click', uppopup);

bgPopup.addEventListener('click', (event) => {
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
const firstInput = document.querySelector('.first__slider-input');
const firstNumber = document.querySelector('.first__slider-number');

const secondInput = document.querySelector('.second__slider-input');
const secondNumber = document.querySelector('.second__slider-number');

const thirdInput = document.querySelector('.third__slider-input');
const thirdNumber = document.querySelector('.third__slider-number');

const testInput = document.querySelector('.test__slider-input');
const testNumber = document.querySelector('.test__slider-number');

function firstRange() {
  const firstNewValue = firstInput.value;
  firstNumber.innerHTML = `0${firstNewValue}`;
}
function secondRange() {
  const secondNewValue = secondInput.value;
  secondNumber.innerHTML = `0${secondNewValue}`;
}
function thirdRange() {
  const thirdNewValue = thirdInput.value;
  thirdNumber.innerHTML = `0${thirdNewValue}`;
}
function testRange() {
  const testNewValue = testInput.value;
  testNumber.innerHTML = `0${testNewValue}`;
}

testInput.addEventListener("input", () => {
  testRange();
});

thirdInput.addEventListener("input", () => {

  petsIndex = +thirdInput.value - 1;
  petsImg.forEach(e => {
    if (e.classList.contains('pets__active')) {
      e.classList.remove('pets__active');
    }
  });
  petsImg[petsIndex].classList.add('pets__active');
  thirdRange();
  if ((petsIndex <= 4) && (petsIndex >= 0)) {
    sliderRight.style.right = 0 + 'px';
  }
  if ((petsIndex >= 4) && (petsIndex <= 7)) {
    sliderRight.style.right = (petsIndex - 3) * 308 + 'px';
  }

});

secondInput.addEventListener("input", () => {
  workIn = +secondInput.value;
  secondRange();
  workInputImg();
});

firstInput.addEventListener("input", () => {
  firstRange();
  firstActive.forEach(e => {
    e.style.display = 'none';
  })
  firstActive[firstInput.value - 1].style.display = 'block';
  firstSliderImg.forEach(e => {
    if (e.classList.contains('active__panda')) {
      e.classList.remove('active__panda');
      e.classList.add('active__svg__all');
    }
  })
  firstSliderImg[firstInput.value - 1].classList.add('active__panda');
  firstSliderImg[firstInput.value - 1].classList.remove('active__svg__all');
  firstSlider.style.left = 186 - ((firstInput.value - 1) * 186) + 'px';
});
/*slider in work block */

const workSliderImg = document.querySelectorAll(".works__slider__img img");
const workSlider = document.querySelector('.works__slider__img');

workSlider.addEventListener("click", () => {
  if (workIn + 1 <= workSliderImg.length) {
    workIn += 1;
    secondInput.value = workIn;
    workInputImg();
    secondRange();
  } else
    if (workIn + 1 > workSliderImg.length) {
      workIn = 1;
      secondInput.value = workIn;
      workInputImg();
      secondRange();
    }
});


function workInputImg() {
  workSliderImg.forEach((el) => {
    if (el.dataset.key != secondInput.value) {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  });
}

/*sldier in pets in zoo*/
const sliderRight = document.querySelector('.pets__slider');

petsBtnRight.addEventListener("click", () => {
  if ((petsIndex + 1 >= 4) && (petsIndex + 1 <= 7)) {
    petsIndex++;
    removeClass();
    thirdInput.value = petsIndex + 1;
    thirdRange();
    petsImg[petsIndex].classList.add('pets__active');
    sliderRight.style.right = (petsIndex - 3) * 308 + 'px';

  } else
    if (petsIndex + 1 <= 7) {
      petsIndex++;
      removeClass();
      thirdInput.value = petsIndex + 1;
      thirdRange();
      petsImg[petsIndex].classList.add('pets__active');

    } else {
      petsIndex = 0;
      removeClass();
      thirdInput.value = petsIndex + 1;
      thirdRange();
      petsImg[petsIndex].classList.add('pets__active');
      sliderRight.style.right = 0 + 'px';

    }
  function removeClass() {
    petsImg.forEach(e => {
      if (e.classList.contains('pets__active')) {
        e.classList.remove('pets__active');
      }
    });
  }
})

petsBtnLeft.addEventListener("click", () => {
  if ((petsIndex - 1 >= 3) && (petsIndex - 1 <= 7)) {
    petsIndex--;
    removeClass();
    thirdInput.value = petsIndex + 1;
    thirdRange();
    petsImg[petsIndex].classList.add('pets__active');
    sliderRight.style.right = (petsIndex - 3) * 308 + 'px';
  } else
    if (petsIndex - 1 >= 0) {

      petsIndex--;
      removeClass();
      thirdInput.value = petsIndex + 1;
      thirdRange();
      petsImg[petsIndex].classList.add('pets__active');

    } else {

      petsIndex = 7;
      removeClass();
      thirdInput.value = petsIndex + 1;
      thirdRange();
      petsImg[petsIndex].classList.add('pets__active');
      sliderRight.style.right = 1232 + 'px';
    }
  function removeClass() {
    petsImg.forEach(e => {
      if (e.classList.contains('pets__active')) {
        e.classList.remove('pets__active');
      }
    });
  }
})

/*first slider*/
const firstSliderImg = document.querySelectorAll('.fs__image');
const firstSlider = document.querySelector('.first__slider');

const firstActive = document.querySelectorAll('.first__slider__active');

const firstSliderIndex = 0;

firstSliderImg.forEach((elem, index) => {
  elem.addEventListener('click', (el) => {
    firstActive.forEach(e => {
      e.style.display = 'none';
    })
    console.log(index);
    firstInput.value = index + 1;
    firstRange();
    firstActive[index].style.display = 'block';
    firstSliderImg.forEach(e => {
      if (e.classList.contains('active__panda')) {
        e.classList.remove('active__panda');
        e.classList.add('active__svg__all');
      }
    })
    elem.classList.add('active__panda');
    elem.classList.remove('active__svg__all');

    firstSlider.style.left = 186 - (elem.dataset.key * 186) + 'px';
  })
})