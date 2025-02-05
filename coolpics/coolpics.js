
const menuButton = document.querySelector(".menu-button");
const gallery = document.querySelector(".gallery")

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

  menuButton.addEventListener("click", () => toggleMenu());

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide")
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
  </div>`;
}

function viewHandler(event) {
  const clickedImg = event.target;
  const imgSrc = clickedImg.getAttribute('src').split('-');
  const modalImgSrc = imgSrc[0] + '-full.jpeg'
  document.body.insertAdjacentHTML('afterbegin', viewerTemplate(modalImgSrc, clickedImg.alt))
  document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function viewhandler(event) {

}

function closeViewer() {
  document.querySelector(".viewer").remove();
}

gallery.addEventListener('click', viewHandler);