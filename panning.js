document.addEventListener("mousemove", function(e) {
  const bg = document.querySelector(".background-container");
  const x = (e.clientX / window.innerWidth - 0.5) * 50;
  const y = (e.clientY / window.innerHeight - 0.5) * 50;
  bg.style.transform = `translate(${-x}px, ${-y}px)`;
});