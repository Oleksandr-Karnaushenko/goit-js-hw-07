const textInput = document.querySelector('input');
const output = document.querySelector('span');

textInput.addEventListener('input', event => {
  const textInputValue = event.currentTarget.value;
  const isWhitespaceString = str => !/\S/.test(str);
  if (textInputValue === '' || isWhitespaceString(textInputValue)) {
    output.textContent = 'Anonymous';
  } else output.textContent = textInputValue.trim();
});
