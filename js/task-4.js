const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (login === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const data = {
    login,
    password,
  };

  console.log('🚀 ~ handleSubmit ~ data:', data);

  form.reset();
}
