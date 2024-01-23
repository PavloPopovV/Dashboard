const datepickerPopup = document.querySelectorAll(".datepicker");
const datepickerBtn = document.querySelectorAll(".date-btn");

function setValueOnOdometer() {
  let oneValue = 7265;
  let twoValue = 3671;
  let threeValue = 156;
  let fourValue = 231;
  document.getElementById("odometer-one").innerHTML = oneValue;
  document.getElementById("odometer-two").innerHTML = twoValue;
  document.getElementById("odometer-three").innerHTML = threeValue;
  document.getElementById("odometer-four").innerHTML = fourValue;
}

function openCloseDatepickerPopup(e, method) {
  e.target.nextElementSibling.classList[method]("open");
}
//------------------------------- Tabs for Passenger--------------------------

const tabBtns = document.querySelectorAll(".tab-btn");
const tabsItems = document.querySelectorAll(".tab-content");
const tabMediaBtns = document.querySelectorAll(".tab-media-btn");
const tabsMediaItems = document.querySelectorAll(".tab-media-content");

function removeClass(items, className) {
  items.forEach((item) => {
    item.classList.remove(className);
  });
}

function openTab(target, btns, tabs) {
  let id = target.getAttribute("data-tab");
  const element = document.getElementById(id);
  removeClass(btns, "active");
  removeClass(tabs, "show");
  element.classList.add("show");
  target.classList.add("active");
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("date-btn")) {
    openCloseDatepickerPopup(e, "add");
  }
  if (e.target.classList.contains("tab-media-btn")) {
    openTab(e.target,tabMediaBtns, tabsMediaItems);
  }
  if (e.target.classList.contains("tab-btn")) {
    openTab(e.target, tabBtns, tabsItems);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("odometer-one")) {
    setValueOnOdometer();
  }
});

datepickerBtn.forEach((item) => {
  item.addEventListener("blur", (e) => {
    openCloseDatepickerPopup(e, "remove");
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("date-btn")) {
    openCloseDatepickerPopup(e, "add");
  }
});
