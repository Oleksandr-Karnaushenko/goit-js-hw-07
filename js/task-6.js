function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const dataCreate = document.querySelector('button[data-create]');
const dataDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');

dataCreate.addEventListener('click', () => {
  if (input.value >= 1 && input.value <= 100) {
    createBox(input.value);
  }
});

dataDestroy.addEventListener('click', () => (divBoxes.innerHTML = ''));

function createBox(amount) {
  const boxes = [
    '<ul style="display: flex; flex-wrap: wrap; gap: 24px; row-gap: 48px;  list-style: none; justify-content: center; align-items: center;">',
  ];
  let size = 30;
  for (let index = 0; index < amount; index++) {
    boxes.push(
      `<li style="background-color:${getRandomHexColor()}; width: ${size}px; height: ${size}px"></li>`
    );
    size += 10;
  }
  divBoxes.innerHTML = boxes.join('');
  input.value = '';
}
