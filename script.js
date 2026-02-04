const container = document.getElementById("container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const para = document.getElementById("para");

let selected = [];

function shuffle(nodes) {
  for (let i = nodes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    container.appendChild(nodes[j]);
  }
}

/* Duplicate one random image */
function setupImages() {
  selected = [];
  para.textContent = "";
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";

  // remove old duplicate if exists
  const imgs = Array.from(container.children);
  if (imgs.length === 6) imgs.pop().remove();

  const randomIndex = Math.floor(Math.random() * imgs.length);
  const clone = imgs[randomIndex].cloneNode(true);
  container.appendChild(clone);

  shuffle(Array.from(container.children));
}

/* Image click */
container.addEventListener("click", (e) => {
  if (
