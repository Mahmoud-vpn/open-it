window.onload = () => 
  setTimeout(() => {
    const ring = document.getElementById("ring");
    ring.style.opacity = "1";
    ring.style.transform = "translateY(0)";

    startFallingFlowers();
  }, 500); 

 setTimeout(() => {
  const message = document.getElementById("message");
  message.style.opacity = "1";
}, 1300);

function startFallingFlowers() {
  const symbols = ['🥀', '🌹'];
  setInterval(() => {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = 5 + Math.random() * 5 + 's'; // مدة مختلفة لكل وردة

    document.body.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 10000);
  }, 200); 
}
