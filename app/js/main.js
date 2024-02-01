//------------------------------- Datepicker -------------------------
const datepickerPopup = document.querySelectorAll(".datepicker");
const datepickerBtn = document.querySelectorAll(".datapicker-btn");

function openCloseDatepickerPopup(e, method) {
  e.target.nextElementSibling.classList[method]("open");

  datepickerBtn.forEach((item) => {
    item.addEventListener("blur", (e) => {
      openCloseDatepickerPopup(e, "remove");
    });
  });
}
//------------------------------- Tabs --------------------------

const tabBtns = document.querySelectorAll(".tab-btn");
const tabsItems = document.querySelectorAll(".tab-content");
const tabMediaBtns = document.querySelectorAll(".tab-media-btn");
const tabsMediaItems = document.querySelectorAll(".tab-media-content");
const tabOperationBtns = document.querySelectorAll(".tab-operation-btn");
const tabsOperationItems = document.querySelectorAll(".tab-operation-content");
const tabDataBaseBtns = document.querySelectorAll(".database-btn-js");
const tabsDataBaseItems = document.querySelectorAll(".database-content");
const tabsPassengersTableBtns = document.querySelectorAll(
  ".passengers-table__btn"
);
const tabsPassengersTableItems = document.querySelectorAll(
  ".passengers-table__box-gray"
);
const tabsAirplaneDetailsBtn = document.querySelectorAll(
  ".js-airplaneDetailsBtn"
);
const tabsAirplaneDetailsItem = document.querySelectorAll(
  '.js-airplaneDetailsItem'
);

const tabAirportBtns = document.querySelectorAll(".tab-airport-btn");
const tabsAirportItems = document.querySelectorAll(".tab-airport-content");

function removeClass(items, className) {
  items.forEach((item) => {
    item.classList.remove(className);
  });
}

function openTab(target, btns, tabs) {
  let id = target.getAttribute("data-tab");
  const element = document.getElementById(id);

  if (id === "All") {
    removeClass(btns, "active");
    target.classList.add("active");
    tabs.forEach((item) => {
      item.classList.add("show");
    });
    return true;
  }

  if (element) {
    removeClass(btns, "active");
    removeClass(tabs, "show");
    element.classList.add("show");
    target.classList.add("active");
  }
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
   <tr class="table__row">
      <td class="table__cell table__cell--id">
        <span class="table__span gray-span">${obj.id} - ${i}</span>
      </td>
      <td class="table__cell table__cell--march">
        <span class="table__span gray-span">
          <span>${obj.march.start}</span> - <span>${obj.march.end}</span>
        </span>
      </td>
      <td class="table__cell table__cell--date">
        <span class="table__span gray-span">${obj.fullDate.date}</span>
        <span class="table__span gray-span">${obj.fullDate.time}</span>
      </td>
      <td class="table__cell table__cell--airport">
        <span class="table__span blue-span">${obj.airports.start}</span>
      </td>
      <td class="table__cell table__cell--airport">
        <span class="table__span blue-span">${obj.airports.end}</span>
      </td>
      <td class="table__cell table__cell--plain-info">
        <span class="gray-span">
          <span class="table__span  blue-span">${obj.plain.name}</span>
          / 
          <span class="table__span  blue-span">${obj.plain.cod}</span>
        </span>
      </td>
      <td class="table__cell table__cell--type">
        <span class="table__type table__type--green" >${obj.type}</span>
      </td>
      <td class="table__cell table__cell--number">
        <span class="table__span gray-span">${obj.number}</span>
      </td>
      <td class="table__cell table__cell--details">
        <a class="table__btn" href="${obj.detailsLink.trim()}">Детали</a>
      </td>
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
  if (
    clickPageValue !== activePageValue &&
    clickPageValue < 5 &&
    clickPageValue
  ) {
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

//------------------------------- Listener - CLick  -------------------------

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("datapicker-btn")) {
    openCloseDatepickerPopup(e, "add");
  }
  if (e.target.classList.contains("tab-media-btn")) {
    openTab(e.target, tabMediaBtns, tabsMediaItems);
  }
  if (e.target.classList.contains("tab-btn")) {
    openTab(e.target, tabBtns, tabsItems);
  }
  if (e.target.classList.contains("pagination__btn")) {
    let closestParentId = e.target.closest(".pagination").id;
    if (closestParentId === "flights") {
      renderOnClickBtns(e.target);
    }
  }
  if (e.target.classList.contains("pagination__arrows")) {
    let closestParentId = e.target.closest(".pagination").id;
    if (closestParentId === "flights") {
      renderOnClickArrows(e.target);
    }
  }
  if (e.target.classList.contains("tab-operation-btn")) {
    openTab(e.target, tabOperationBtns, tabsOperationItems);
  }
  if (e.target.classList.contains("database-btn-js")) {
    openTab(e.target, tabDataBaseBtns, tabsDataBaseItems);
  }
  if (e.target.classList.contains("passengers-table__btn")) {
    openTab(e.target, tabsPassengersTableBtns, tabsPassengersTableItems);
  }
  if (e.target.classList.contains("tab-airport-btn")) {
    openTab(e.target, tabAirportBtns, tabsAirportItems);
  }
  if (e.target.classList.contains("js-airplaneDetailsBtn")) {
    openTab(e.target, tabsAirplaneDetailsBtn, tabsAirplaneDetailsItem);
  }
  if (e.target.classList.contains("addProcessing")) {
    document.querySelector(".popup").classList.add("active");
    document.querySelector(".popup__title").innerHTML = "Отправить в обработку";
  }
  if (e.target.classList.contains("removeProcessing")) {
    document.querySelector(".popup").classList.add("active");
    document.querySelector(".popup__title").innerHTML = "Снять все подозрения";
  }
  if (e.target.classList.contains("succesProcessing")) {
    document.querySelector(".popup").classList.remove("active");
  }
  if (e.target.classList.contains("stopProcessing")) {
    document.querySelector(".popup").classList.remove("active");
  }
});

//------------------------------- Animation Rolling Numbers -------------------------
function rollNumbersOnHover(event) {
  let hoveredElement = event.target;
  const el = hoveredElement.closest(".digits")
    ? hoveredElement.closest(".digits")
    : false;
  if (el && !el.classList.contains("hover")) {
    el.classList.add("hover");
    setTimeout(() => {
      el.classList.remove("hover");
    }, 2000);
  }
}

function rollNumbersOnLoad() {
  const allDigits = document.querySelectorAll(".digits");

  allDigits.forEach((item) => {
    item.classList.add("hover");
    setTimeout(() => {
      item.classList.remove("hover");
    }, 2000);
  });
}
rollNumbersOnLoad();

document.addEventListener("mouseover", rollNumbersOnHover);

