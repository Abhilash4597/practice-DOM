const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const count = document.querySelector('.count');
let counting = 0;

function increase() {
  counting++;
  count.textContent = counting;
  minus.disabled = false;
}

function decrease() {
  if (counting > 0) {
    counting--;
    count.textContent = counting;
  } else {
    minus.disabled = true;
  }
}

plus.addEventListener('click', increase);

minus.addEventListener('click', decrease);
