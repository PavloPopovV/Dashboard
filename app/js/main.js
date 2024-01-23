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

function clickHandler(e) {
  const target = e.target;
  const datepickerPopup = document.querySelectorAll(".datepicker");
  const datepickerBtn = document.querySelectorAll(".date-btn");
}

function openCloseDatepickerPopup(e, method) {
  e.target.nextElementSibling.classList[method]("open");
}
//------------------------------- Tabs for Passenger--------------------------

const tabBtns = document.querySelectorAll('.tab-btn');
const tabsItems = document.querySelectorAll('.tab-content');
const tabMediaBtns = document.querySelectorAll('.tab-media-btn');
const tabsMediaItems = document.querySelectorAll('.tab-media-content');

function removeClassActive(btn) {
  btn.forEach(btnItem => {
    btnItem.classList.remove('active');
  });
}

function removeClassShow(content) {
  content.forEach(contentItem => {
    contentItem.classList.remove('show');
  });
}

function onTabClick(item, btn, content) {
  item.addEventListener('click', () => {
    removeClassActive(btn);
    removeClassShow(content);
    item.classList.add('active');
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    content.forEach(contentItem => {
      if (tabId === contentItem.getAttribute('id')) {
        contentItem.classList.add('show');
      }
    });
  });
}

tabBtns.forEach(item => onTabClick(item, tabBtns, tabsItems));
tabMediaBtns.forEach(item => onTabClick(item, tabMediaBtns, tabsMediaItems));

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("date-btn")) {
    openCloseDatepickerPopup(e, "add");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  setValueOnOdometer();
});

datepickerBtn.forEach((item) => {
  item.addEventListener("blur", (e) => {
    openCloseDatepickerPopup(e, "remove");
  });
});


