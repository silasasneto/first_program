const textInput = document.querySelector('#text-input');
const clearButton = document.querySelector('#clear-button');
const charCount = document.querySelector('#char-count');
const charNoSpaceCount = document.querySelector('#char-no-space-count');
const wordCount = document.querySelector('#word-count');

function updateCounts() {
  const text = textInput.value;
  const words = text.trim().match(/\S+/g) || [];

  charCount.textContent = text.length;
  charNoSpaceCount.textContent = text.replace(/\s/g, '').length;
  wordCount.textContent = words.length;
}

textInput.addEventListener('input', updateCounts);
clearButton.addEventListener('click', () => {
  textInput.value = '';
  textInput.focus();
  updateCounts();
});

updateCounts();
