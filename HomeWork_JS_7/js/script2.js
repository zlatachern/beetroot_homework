// #2

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

const openButton = document.getElementById("openButton");
openButton.addEventListener("click", openModal);

const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", closeModal);

const closeSpan = document.querySelector(".close--span");
closeSpan.addEventListener("click", closeModal);