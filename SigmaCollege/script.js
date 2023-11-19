let element = document.querySelector('.element');
let containers = document.querySelector('.containers');

containers.addEventListener('mousemove', function(event) {
  let mouseX = event.clientX;
  let mouseY = event.clientY;

  element.style.left = mouseX - (element.clientWidth / 2) + 'px';
  element.style.top = mouseY - (element.clientHeight / 2) + 'px';

  // Остановка движения элемента через 3 секунды
  setTimeout(function() {
    element.style.transition = 'none'; // Отключаем CSS Transition
  }, 3000); // Например, элемент будет двигаться в течение 3 секунд (3000 мс) и затем остановится
});