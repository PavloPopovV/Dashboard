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
const tabOperationBtns = document.querySelectorAll(".tab-operation-btn");
const tabsOperationItems = document.querySelectorAll(".tab-operation-content");

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

//------------------------------- Pagination -------------------------

const allFlights = [];
const tableBody = document.querySelector(".flights-table tbody");
const allBtns = document.querySelectorAll(".pagination__btn");

function createFlightsArr() {
  let obj = {
    id: 5152,
    march: {
      start: "Lviv",
      end: "Budapest",
    },
    fullDate: {
      date: "24.12.2023",
      time: "12:25",
    },
    airports: {
      start: "Аэропорт LVA",
      end: "Аэропорт LAAS",
    },
    plain: {
      name: "BOEING 315",
      cod: "B-315-2",
    },
    type: "Завершен",
    number: 95,
    detailsLink: "flight-details.html",
  };
  for (let i = 0; i < 100; i++) {
    allFlights.push(obj);
  }
}
createFlightsArr();

function renderHtml(obj, i) {
  tableBody.insertAdjacentHTML(
    "beforeend",
    `
   <tr>
      <td class="table__id"><span>${obj.id} - ${i}</span></td>
      <td class="table__march"><span><span>${obj.march.start}</span> - <span>${
      obj.march.end
    }</span></span></td>
      <td class="table__date"><span>${obj.fullDate.date}</span><span>${
      obj.fullDate.time
    }</span></td>
      <td class="table__airport"><span>${obj.airports.start}</span></td>
      <td class="table__airport"><span>${obj.airports.end}</span></td>
      <td class="table__plain"><span><span>${obj.plain.name}</span> / <span>${
      obj.plain.cod
    }</span></span></td>
      <td class="table__type"><span>${obj.type}</span></td>
      <td class="table__number"><span>${obj.number}</span></td>
      <td><a class="table__details" href="${obj.detailsLink.trim()}">Детали</a></td>
    </tr>
   `
  );
}

function renderOnLoad() {
  for (let i = 0; i < 16; i++) {
    renderHtml(allFlights[i], i);
  }
}
if (tableBody) {
  renderOnLoad();
}

function showCurrentPageElements(btnValue) {
  let startIndex = (btnValue - 1) * 16;
  let endIndex = btnValue * 16;
  for (let i = startIndex; i < endIndex; i++) {
    renderHtml(allFlights[i], i);
  }
}

function renderOnClickBtns(target) {
  let clickPageValue = !isNaN(parseInt(target.value)) ? target.value : false;
  const activePageValue = document.querySelector(
    ".pagination__btn.active"
  ).value;
  if (clickPageValue !== activePageValue && clickPageValue) {
    removeClass(allBtns, "active");
    target.classList.add("active");
    tableBody.innerHTML = "";
    showCurrentPageElements(clickPageValue);
  }
}

function renderOnClickArrows(target) {
  const activePageValue = document.querySelector(
    ".pagination__btn.active"
  ).value;
  switch (target.value) {
    case "<":
      if (+activePageValue - 1 !== 0) {
        tableBody.innerHTML = "";
        allBtns[+activePageValue - 1].classList.remove("active");
        allBtns[+activePageValue - 2].classList.add("active");
        showCurrentPageElements(+activePageValue - 1);
      }
      break;
    case ">":
      if (allBtns[+activePageValue].value < 5) {
        allBtns[+activePageValue - 1].classList.remove("active");
        allBtns[+activePageValue].classList.add("active");
        tableBody.innerHTML = "";
        showCurrentPageElements(+activePageValue + 1);
      }
      break;
  }
}

//------------------------------- Listeners -------------------------

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("date-btn")) {
    openCloseDatepickerPopup(e, "add");
  }
  if (e.target.classList.contains("tab-media-btn")) {
    openTab(e.target, tabMediaBtns, tabsMediaItems);
  }
  if (e.target.classList.contains("tab-btn")) {
    openTab(e.target, tabBtns, tabsItems);
  }

  if (e.target.classList.contains("pagination__btn")) {
    renderOnClickBtns(e.target);
  }
  if (e.target.classList.contains("pagination__arrows")) {
    renderOnClickArrows(e.target);
  }
  if (e.target.classList.contains("tab-operation-btn")) {
    openTab(e.target, tabOperationBtns, tabsOperationItems);
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
