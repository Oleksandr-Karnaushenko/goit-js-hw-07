const numberOfCategories = document.querySelectorAll('.item');

console.log('🚀 ~ numberOfCategories:', numberOfCategories.length);

numberOfCategories.forEach(li => {
  const category = li.querySelector('h2');
  console.log('🚀 ~ category:', category.textContent);
  const numberOfLi = li.querySelectorAll('li');
  console.log('🚀 ~ numberOfLi:', numberOfLi.length);
});
