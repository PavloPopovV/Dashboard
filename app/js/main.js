function clickHandler(e) {
  const target = e.target;

  if (target.classList.contains("sidebar__search")) {
    target.classList.add("search-active");
  }
}

document.addEventListener("click", (e) => {
  clickHandler(e);
});
