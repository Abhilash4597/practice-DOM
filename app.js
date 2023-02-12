const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const count = document.querySelector('.count');
let counting = 0;

// function increase() {
//   counting++;
//   count.textContent = counting;
//   minus.disabled = false;
// }

// function decrease() {
//   if (counting > 0) {
//     counting--;
//     count.textContent = counting;
//   } else {
//     minus.disabled = true;
//   }
// }

// plus.addEventListener('click', increase);

// minus.addEventListener('click', decrease);

function countingAndDisplaying() {

  if (minus.textContent == 'increase') {
    counting++;
    count.textContent = counting;
  } else {
    counting--;
    count.textContent = counting;
  }

  if (count.textContent == 10) {
    minus.textContent = 'decrease'
  } else if (count.textContent == 0) {
    minus.textContent = 'increase';
  }
}
minus.addEventListener('click', countingAndDisplaying);