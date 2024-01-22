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


