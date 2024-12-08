const sliderMover = document.getElementById('slider-mover');
const imgWidth = 965;
let position = 0;

function changeImage() {
  position -= imgWidth;
  if (position <= -imgWidth * 3) {
    position = 0;
  }

  sliderMover.style.transform = `translateX(${position}px)`;
}    
setInterval(changeImage, 7000);