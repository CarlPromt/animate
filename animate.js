const element = document.getElementById('animated-element');
let angle = 0;

const animate = () => {
  angle += 0.1;
  const x = Math.sin(angle) * 100;
  const y = Math.cos(angle) * 100;
  const scale = (Math.sin(angle) + 1) * 0.5;

  element.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;

  requestAnimationFrame(animate);
};

animate();
