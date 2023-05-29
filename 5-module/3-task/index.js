function initCarousel() {
  document.querySelector(`.carousel__arrow_left`).style.display = 'none';
  let rightButton = document.querySelector(`.carousel__arrow_right`);
  let leftButton = document.querySelector(`.carousel__arrow_left`);
  let slider = document.querySelector(`.carousel__inner`);
  let counter = 0;
  rightButton.addEventListener("click", () => {
    counter--;
    let sliderLength = counter * 500;
    slider.style.transform = `translateX(${sliderLength}px)`;
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
  });
  leftButton.addEventListener("click", () => {
    counter++;
    let sliderLength = counter * 500;
    slider.style.transform = `translateX(${sliderLength}px)`;
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
  });
}


