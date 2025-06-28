const greenBg = document.getElementById('green-bg');

document.addEventListener('mousemove', (e) => {
  const moveX = (e.clientX - window.innerWidth / 2) / 30;
  const moveY = (e.clientY - window.innerHeight / 2) / 30;

  greenBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
