function toggleText() {
  let button = document.querySelector('[class="toggle-text-button"]');
  let hideText = document.getElementById("text");
  button.addEventListener('click', () => hideText.toggleAttribute('hidden'));
}
