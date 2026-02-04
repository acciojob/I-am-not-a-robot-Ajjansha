//your code here
const container = document.getElementById("container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const para = document.getElementById("para");

let selectedImages = [];

/* Image classes */
const images = ["img1", "img2", "img3", "img4", "img5"];

/* Shuffle function */
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

/* Load images */
function loadImages() {
  container.innerHTML = "";
  selectedImages = [];
  para.textContent = "";
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";

  // pick random image to duplicate
  const duplicate = images[Math.floor(Math.random() * images.length)];
  const imgArray = shuffle([...images, duplicate]);

  imgArray.forEach(cls => {
    const img = document.createElement("img");
    img.classList.add(cls);

    img.addEventListener("click", () => handleClick(img, cls));
    container.appendChild(img);
  });
}

/* Handle image click */
function handleClick(img, cls) {
  if (selectedImages.length === 2) return;
  if (selectedImages.some(item => item.img === img)) return;

  img.classList.add("selected");
  selectedImages.push({ img, cls });

  resetBtn.style.display = "inline-block";

  if (selectedImages.length === 2) {
    verifyBtn.style.display = "inline-block";
  }
}

/* Verify */
verifyBtn.addEventListener("click", () => {
  ve
