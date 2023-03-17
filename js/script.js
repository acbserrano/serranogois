function rotate() {
  document.getElementById("cross").style.transform = "rotate(45deg)";
}

lightbox.option({
  disableScrolling: true,
});

const img = document.querySelector("cross");
img.addEventListener("click", function () {
  this.style.border = "none";
});
