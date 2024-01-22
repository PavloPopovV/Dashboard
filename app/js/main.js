const datepickerPopup = document.querySelectorAll(".datepicker");
const datepickerBtn = document.querySelectorAll(".date-btn");

function openCloseDatepickerPopup(e, method) {
  e.target.nextElementSibling.classList[method]("open");
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("date-btn")) {
    openCloseDatepickerPopup(e, "add");
  }
});

datepickerBtn.forEach((item) => {
  item.addEventListener("blur", (e) => {
    openCloseDatepickerPopup(e, "remove");
  });
});
