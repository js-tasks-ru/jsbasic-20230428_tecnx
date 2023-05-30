function initCarousel() {
  document.querySelector(`.carousel__arrow_left`).style.display = 'none';
  let rightButton = document.querySelector(`.carousel__arrow_right`);
  let leftButton = document.querySelector(`.carousel__arrow_left`);
  let slider = document.querySelector(`.carousel__inner`);
  let step = slider.offsetWidth;
  let counter = 0;
  rightButton.addEventListener("click", () => {
    counter--;
    let sliderLength = counter * step;
    slider.style.transform = `translateX(${sliderLength}px)`;
    toggleArrows(counter, rightButton, leftButton);
  });
  leftButton.addEventListener("click", () => {
    counter++;
    let sliderLength = counter * step;
    slider.style.transform = `translateX(${sliderLength}px)`;
    toggleArrows(counter, rightButton, leftButton);
  });
}
function toggleArrows(counter, rightButton, leftButton) {
  if (counter < -2) {
    rightButton.style.display = 'none';
  } else {
    rightButton.style.display = '';
  }
  if (counter >= 0) {
    leftButton.style.display = 'none';
  } else {
    leftButton.style.display = '';
  }
}

