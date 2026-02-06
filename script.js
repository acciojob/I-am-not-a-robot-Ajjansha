const imageContainer = document.getElementById("image-container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const result = document.getElementById("para");

let selected = [];

/* Image class list */
const imageClasses = ["img1", "img2", "img3", "img4", "img5"];

/* Load images */
function loadImages() {
  imageContainer.innerHTML = "";
  selected = [];
  result.textContent = "";
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";

  // Pick one random image to duplicate
  const duplicate = imageClasses[Math.floor(Math.random() * imageClasses.length)];
  const images = [...imageClasses, duplicate];

  shuffle(images);

  images.forEach(cls => {
    const img = document.createElement("img");
    img.classList.add(cls);
    img.src = "https://via.placeholder.com/120";
    img.addEventListener("click", () => handleClick(img));
    imageContainer.appendChild(img);
  });
}

/* Shuffle */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/* Handle click */
function handleClick(img) {
  if (selected.includes(img) || selected.length === 2) return;

  img.classList.add("selected");
  selected.push(img);
  resetBtn.style.display = "inline";

  if (selected.length === 2) {
    verifyBtn.style.display = "inline";
  }
}

/* Reset */
resetBtn.addEventListener("click", loadImages);

/* Verify */
verifyBtn.addEventListener("click", () => {
  verifyBtn.style.display = "none";

  if (selected[0].className === selected[1].className) {
    result.textContent = "You are a human. Congratulations!";
  } else {
    result.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
  }
});

/* Init */
loadImages();
