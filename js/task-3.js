const textInput = document.querySelector('input');
const output = document.querySelector('span');

textInput.addEventListener('input', event => {
  if (
    event.currentTarget.value === '' ||
    event.currentTarget.value.includes(' ')
  ) {
    output.textContent = 'Anonymous';
  } else output.textContent = event.currentTarget.value.trim();
});
