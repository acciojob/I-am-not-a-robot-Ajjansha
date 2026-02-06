const imageContainer = document.getElementById("image-container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const message = document.getElementById("h");
const result = document.getElementById("para");

let selectedImages = [];

/* Base images */
const images = [
  "https://via.placeholder.com/120?text=1",
  "https://via.placeholder.com/120?text=2",
  "https://via.placeholder.com/120?text=3",
  "https://via.placeholder.com/120?text=4",
  "https://via.placeholder.com/120?text=5"
];

/* Setup images */
function loadImages() {
  imageContainer.innerHTML = "";
  selectedImages = [];
  result.textContent = "";
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
  message.textContent = "Please click on the identical tiles to verify that you are not a robot.";

  const duplicate = images[Math.floor(Math.random() * images.length)];
  const allImages = [...images, duplicate];

  shuffle(allImages);

  allImages.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.addEventListener("click", () => handleClick(img));
    imageContainer.appendChild(img);
  });
}

/* Shuffle array */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/* Handle image click */
function handleClick(img) {
  if (selectedImages.includes(img) || selectedImages.length === 2) return;

  img.classList.add("selected");
  selectedImages.push(img);
  resetBtn.style.display = "inline-block";

  if (selectedImages.length === 2) {
    verifyBtn.style.display = "inline-block";
  }
}

/* Reset */
resetBtn.addEventListener("click", loadImages);

/* Verify */
verifyBtn.addEventListener("click", () => {
  verifyBtn.style.display = "none";

  if (selectedImages[0].src === selectedImages[1].src) {
    result.textContent = "You are a human. Congratulations!";
  } else {
    result.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
  }
});

/* Initial load */
loadImages();

