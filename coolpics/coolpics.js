
  const menuButton = document.querySelector(".menu-button");

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
    <img src="${norris-sm.jpeg}" alt="${picture}">
  </div>`;
}

function viewHandler(event) {
}

function closeViewer() {
  document.querySelector(".viewer").remove();
}