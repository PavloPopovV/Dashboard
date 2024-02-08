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
  ".js-airplaneDetailsItem"
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

//------------------------------- Languages -------------------------

function changeBtnLang(btn) {
  btn.setAttribute("href", "#");
  btn.classList.add("active");
}

function changeLanguagesOnLoad(e) {
  const enBtn = document.querySelector(".js-en");
  const ruBtn = document.querySelector(".js-ru");
  let pathname = window.location.pathname.replace("/", "");

  if (pathname.length > 0) {
    // let enUrl = "" ? pathname : pathname.replace(".html", "").split("");
    // enUrl.push("-en");
    // enUrl = enUrl.join("");
    // let ruUrl = pathname.replace("-en", "");
    let enUrl = pathname.includes("-en")
      ? pathname
      : pathname.replace(".html", "-en.html");
    let ruUrl = pathname.replace("-en.html", ".html");

    enBtn.setAttribute("href", enUrl);
    ruBtn.setAttribute("href", ruUrl);
    if (pathname === ruUrl) {
      changeBtnLang(ruBtn);
    } else {
      changeBtnLang(enBtn);
    }
  } else {
    ruBtn.classList.add("active");
    enBtn.setAttribute("href", "index-en");
    ruBtn.setAttribute("href", "#");
  }
}

changeLanguagesOnLoad();

//------------------------------- Pagination -------------------------

const allFlights = [];
const allFlightsEn = [];
const allAirplanes = [];
const allAirplanesEn = [];
const allNotices = [];
const allNoticesEn = [];
const flightsTable = document.querySelector(".flights-table tbody");
const airplaneTable = document.querySelector(".airplane__table tbody");
const noticesTable = document.querySelector(".notices__table tbody");
const allBtns = document.querySelectorAll(".pagination__btn");
const currentLang = document
  .querySelector(".sidebar__languages-btn.active")
  .textContent.trim();

//currentArr
let currentArrFlights = currentLang === "EN" ? allFlightsEn : allFlights;
let currentArrAirplanes = currentLang === "EN" ? allAirplanesEn : allAirplanes;
let currentArrNotices = currentLang === "EN" ? allNoticesEn : allNotices;

//EN
if (currentLang === "EN") {
  function createFlightsArrEn() {
    let obj1 = {
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
        start: "Airport LVA",
        end: "Airport LAAS",
      },
      plain: {
        name: "BOEING 315",
        cod: "B-315-2",
      },
      type: {
        class: "table__type--green",
        text: "Completed",
      },

      number: 95,
      detailsLink: "flight-details-en.html",
    };

    let obj2 = {
      id: 7382,
      march: {
        start: "New York",
        end: "London",
      },
      fullDate: {
        date: "15.05.2024",
        time: "08:40",
      },
      airports: {
        start: "JFK Airport",
        end: "Heathrow Airport",
      },
      plain: {
        name: "AIRBUS A380",
        cod: "A-380-1",
      },
      type: {
        class: "table__type--yellow",
        text: "In progress",
      },
      number: 143,
      detailsLink: "flight-details-en.html",
    };

    let obj3 = {
      id: 9234,
      march: {
        start: "Tokyo",
        end: "Sydney",
      },
      fullDate: {
        date: "03.09.2024",
        time: "20:15",
      },
      airports: {
        start: "Narita Airport",
        end: "Sydney Airport",
      },
      plain: {
        name: "BOEING 747",
        cod: "B-747-3",
      },
      type: {
        class: "table__type--yellow",
        text: "In progress",
      },
      number: 234,
      detailsLink: "flight-details-en.html",
    };

    let obj4 = {
      id: 6157,
      march: {
        start: "Paris",
        end: "Rome",
      },
      fullDate: {
        date: "10.08.2024",
        time: "16:55",
      },
      airports: {
        start: "CDG",
        end: "FCO",
      },
      plain: {
        name: "BOEING 787",
        cod: "B-787-4",
      },
      type: {
        class: "table__type--red",
        text: "Delay",
      },
      number: 87,
      detailsLink: "flight-details-en.html",
    };

    let obj5 = {
      id: 9876,
      march: {
        start: "Kyiv",
        end: "Beijing",
      },
      fullDate: {
        date: "29.11.2023",
        time: "21:10",
      },
      airports: {
        start: "Sheremetyevo Airport",
        end: "Beijing Capital Airport",
      },
      plain: {
        name: "AIRBUS A320",
        cod: "A-320-2",
      },
      type: {
        class: "table__type--green",
        text: "Completed",
      },
      number: 54,
      detailsLink: "flight-details-en.html",
    };

    for (let i = 0; i < 60; i++) {
      allFlightsEn.push(obj1);
      allFlightsEn.push(obj2);
      allFlightsEn.push(obj3);
      allFlightsEn.push(obj4);
      allFlightsEn.push(obj5);
    }
  }
  createFlightsArrEn();
  //en
  function createAirplanesArrEn() {
    let obj = {
      name: "BOEING 315",
      flight: {
        kod: "312HG - 01",
        empty: "-",
      },
      location: "Airport LVV",
      "departure-arrival": {
        time: "12:25",
        date: "24.12.2023",
      },
      "number-of-passengers": {
        number: "95 passengers",
        empty: "Empty",
      },
      status: {
        green: {
          class: "table__type--green",
          text: "He's on a flight",
        },
        yellow: {
          class: "table__type--yellow",
          text: "Awaiting departure",
        },
        red: {
          class: "table__type--red",
          text: "Delay",
        },
      },
      number: "B-315-2",
      detailsLink: "airplane-details-en.html",
    };
    for (let i = 0; i < 100; i++) {
      allAirplanesEn.push(obj);
    }
  }
  createAirplanesArrEn();
  //en
  function createNoticesArrEn() {
    let obj1 = {
      fullName: "Maxim Oleksandrovych Vasiliev",
      gender: "Male",
      notices: "Drug trafficking",
      flight: "312HG - 01",
      plain: "Airbus А320",
      place: "F-16",
      detailsLink: "flight-details-en.html",
    };
    let obj2 = {
      fullName: "Anna Ivanovna Kovalenko",
      gender: "Female",
      notices: "Smoking in non-smoking area",
      flight: "789JK - 02",
      plain: "Boeing 737",
      place: "A-23",
      detailsLink: "flight-details-en.html",
    };
    let obj3 = {
      fullName: "John Smith",
      gender: "Male",
      notices: "Loud behavior",
      flight: "456LM - 03",
      plain: "Airbus A380",
      place: "B-12",
      detailsLink: "flight-details-en.html",
    };
    let obj4 = {
      fullName: "Elena Petrova",
      gender: "Female",
      notices: "Carrying restricted items",
      flight: "135QP - 04",
      plain: "Boeing 747",
      place: "C-07",
      detailsLink: "flight-details-en.html",
    };
    let obj5 = {
      fullName: "Mohammad Ahmed",
      gender: "Male",
      notices: "Disruptive behavior",
      flight: "678KT - 05",
      plain: "Airbus A330",
      place: "D-14",
      detailsLink: "flight-details-en.html",
    };

    for (let i = 0; i < 20; i++) {
      allNoticesEn.push(obj1);
      allNoticesEn.push(obj2);
      allNoticesEn.push(obj3);
      allNoticesEn.push(obj4);
      allNoticesEn.push(obj5);
    }
  }
  createNoticesArrEn();
}
//ru
if (currentLang === "RU") {
  function createFlightsArr() {
    let obj1 = {
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
        start: "Airport LVA",
        end: "Airport LAAS",
      },
      plain: {
        name: "BOEING 315",
        cod: "B-315-2",
      },
      type: {
        class: "table__type--green",
        text: "Завершен",
      },

      number: 95,
      detailsLink: "flight-details-en.html",
    };

    let obj2 = {
      id: 7382,
      march: {
        start: "New York",
        end: "London",
      },
      fullDate: {
        date: "15.05.2024",
        time: "08:40",
      },
      airports: {
        start: "JFK Airport",
        end: "Heathrow Airport",
      },
      plain: {
        name: "AIRBUS A380",
        cod: "A-380-1",
      },
      type: {
        class: "table__type--yellow",
        text: "В процессе",
      },
      number: 143,
      detailsLink: "flight-details-en.html",
    };

    let obj3 = {
      id: 9234,
      march: {
        start: "Tokyo",
        end: "Sydney",
      },
      fullDate: {
        date: "03.09.2024",
        time: "20:15",
      },
      airports: {
        start: "Narita Airport",
        end: "Sydney Airport",
      },
      plain: {
        name: "BOEING 747",
        cod: "B-747-3",
      },
      type: {
        class: "table__type--yellow",
        text: "В процессе",
      },
      number: 234,
      detailsLink: "flight-details-en.html",
    };

    let obj4 = {
      id: 6157,
      march: {
        start: "Paris",
        end: "Rome",
      },
      fullDate: {
        date: "10.08.2024",
        time: "16:55",
      },
      airports: {
        start: "CDG",
        end: "FCO",
      },
      plain: {
        name: "BOEING 787",
        cod: "B-787-4",
      },
      type: {
        class: "table__type--red",
        text: "Простой",
      },
      number: 87,
      detailsLink: "flight-details-en.html",
    };

    let obj5 = {
      id: 9876,
      march: {
        start: "Kyiv",
        end: "Beijing",
      },
      fullDate: {
        date: "29.11.2023",
        time: "21:10",
      },
      airports: {
        start: "Sheremetyevo Airport",
        end: "Beijing Capital Airport",
      },
      plain: {
        name: "AIRBUS A320",
        cod: "A-320-2",
      },
      type: {
        class: "table__type--green",
        text: "Завершен",
      },
      number: 54,
      detailsLink: "flight-details-en.html",
    };

    for (let i = 0; i < 60; i++) {
      allFlights.push(obj1);
      allFlights.push(obj2);
      allFlights.push(obj3);
      allFlights.push(obj4);
      allFlights.push(obj5);
    }
  }
  createFlightsArr();

  function createAirplanesArr() {
    let obj = {
      name: "BOEING 315",
      flight: {
        kod: "312HG - 01",
        empty: "-",
      },
      location: "Аэропорт LVV",
      "departure-arrival": {
        time: "12:25",
        date: "24.12.2023",
      },
      "number-of-passengers": {
        number: "95  пассажиров",
        empty: "Пустой",
      },
      status: {
        green: {
          class: "table__type--green",
          text: "Выполняет рейс",
        },
        yellow: {
          class: "table__type--yellow",
          text: "Ожидает вылет",
        },
        red: {
          class: "table__type--red",
          text: "Простой",
        },
      },
      number: "B-315-2",
      detailsLink: "airplane-details.html",
    };
    for (let i = 0; i < 100; i++) {
      allAirplanes.push(obj);
    }
  }
  createAirplanesArr();

  function createNoticesArr() {
    let obj1 = {
      fullName: "Максим Александрович Васильев",
      gender: "Мужчина",
      notices: "Торговля наркотиками",
      flight: "312HG - 01",
      plain: "Airbus А320",
      place: "F-16",
      detailsLink: "flight-details.html",
    };
    let obj2 = {
      fullName: "Анна Ивановна Коваленко",
      gender: "Женщина",
      notices: "Курение в зоне для некурящих",
      flight: "789JK - 02",
      plain: "Boeing 737",
      place: "A-23",
      detailsLink: "flight-details.html",
    };
    let obj3 = {
      fullName: "Джон Смит",
      gender: "Мужчина",
      notices: "Громкое поведение",
      flight: "456LM - 03",
      plain: "Airbus A380",
      place: "B-12",
      detailsLink: "flight-details.html",
    };
    let obj4 = {
      fullName: "Елена Петровна",
      gender: "Женщина",
      notices: "Торговля наркотиками",
      flight: "135QP - 04",
      plain: "Boeing 747",
      place: "C-07",
      detailsLink: "flight-details.html",
    };
    let obj5 = {
      fullName: "Мохаммед Ахмед",
      gender: "Мужчина",
      notices: "Разрушительное поведение",
      flight: "678KT - 05",
      plain: "Airbus A330",
      place: "D-14",
      detailsLink: "flight-details.html",
    };
    for (let i = 0; i < 20; i++) {
      allNotices.push(obj1);
      allNotices.push(obj2);
      allNotices.push(obj3);
      allNotices.push(obj4);
      allNotices.push(obj5);
    }
  }
  createNoticesArr();
}

function detailsBtn() {
  return currentLang === "EN" ? "Details" : "Детали";
}

function renderHtmlNotices(obj, i) {
  noticesTable.insertAdjacentHTML(
    "beforeend",
    `
    <tr class="table__row">
      <td class="table__cell table__cell--name">
          <span class="table__span gray-span">${obj.fullName}</span>
      </td>
      <td class="table__cell table__cell--gender">
          <span class="table__span gray-span">
              <span>${obj.gender}</span>
          </span>
      </td>
      <td class="table__cell table__cell--notice">
          <span class="table__span gray-span">${obj.notices}</span>
      </td>
      <td class="table__cell table__cell--flight">
          <span class="table__span blue-span">${obj.flight + (i + 1)}</span>
      </td>
      <td class="table__cell table__cell--plain-name">
          <span class="table__span gray-span">${obj.plain}</span>
      </td>
      <td class="table__cell table__cell--place">
          <span class="table__span gray-span">${obj.place}</span>
      </td>
      <td class="table__cell table__cell--details">
          <a class="table__btn" href="${obj.detailsLink}">${detailsBtn()}</a>
      </td>
    </tr>
  `
  );
}
let count = 0;
function renderHtmlAirplanes(obj, i) {
  count++;
  count = count === 4 ? 0 : count;
  airplaneTable.insertAdjacentHTML(
    "beforeend",
    `
    <tr class="table__row">
      <td class="table__cell table__cell--name">
          <span class="table__span gray-span">${obj.name} - ${i + 1}</span>
      </td>
      <td class="table__cell table__cell--march">
          <span class="table__span ${count === 3 ? "gray-span" : "blue-span"} ">
          ${count === 3 ? obj.flight.empty : obj.flight.kod}
          </span>
      </td>
      <td class="table__cell table__cell--location">
          <span class="table__span gray-span">${obj.location}</span>
      </td>
      <td class="table__cell table__cell--date">
          <span class="table__span gray-span">${
            obj["departure-arrival"].date
          }</span>
          <span class="table__span gray-span">${
            obj["departure-arrival"].time
          }</span>
      </td>
      <td class="table__cell table__cell--number">
          <span class="table__span gray-span">${
            count === 3
              ? obj["number-of-passengers"].empty
              : obj["number-of-passengers"].number
          }</span>
      </td>
      <td class="table__cell table__cell--status">
          <span class="table__type ${
            count === 3
              ? obj.status.red.class
              : count === 1
              ? obj.status.yellow.class
              : obj.status.green.class
          }">${
      count === 3
        ? obj.status.red.text
        : count === 1
        ? obj.status.yellow.text
        : obj.status.green.text
    }</span>
      </td>
      <td class="table__cell table__cell--plain">
          <span class="table__span gray-span">
            ${obj.number}
          </span>
      </td>
      <td class="table__cell table__cell--details">
          <a class="table__btn" href="${obj.detailsLink}">${detailsBtn()}</a>
      </td>
    </tr>
  `
  );
}

function renderHtmlFlights(obj, i) {
  flightsTable.insertAdjacentHTML(
    "beforeend",
    `
   <tr class="table__row">
      <td class="table__cell table__cell--id">
        <span class="table__span gray-span">${obj.id}</span>
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
        <span class="table__type ${obj.type.class}" >${obj.type.text}</span>
      </td>
      <td class="table__cell table__cell--number">
        <span class="table__span gray-span">${obj.number}</span>
      </td>
      <td class="table__cell table__cell--details">
        <a class="table__btn" href="${obj.detailsLink.trim()}">${detailsBtn()}</a>
      </td>
    </tr>
   `
  );
}

function renderOnLoad(renderFunction, arr) {
  for (let i = 0; i < 16; i++) {
    renderFunction(arr[i], i);
  }
}

if (flightsTable) {
  renderOnLoad(renderHtmlFlights, currentArrFlights);
}

if (airplaneTable) {
  renderOnLoad(renderHtmlAirplanes, currentArrAirplanes);
}

if (noticesTable) {
  renderOnLoad(renderHtmlNotices, currentArrNotices);
}

function showCurrentPageElements(btnValue, renderFunction, arr) {
  let startIndex = (btnValue - 1) * 16;
  let endIndex = btnValue * 16;
  for (let i = startIndex; i < endIndex; i++) {
    renderFunction(arr[i], i);
  }
}

function renderOnClickBtns(target, renderFunction, table, arr) {
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
    table.innerHTML = "";
    showCurrentPageElements(clickPageValue, renderFunction, arr);
  }
}

function renderOnClickArrows(target, renderFunction, table, arr) {
  const activePageValue = document.querySelector(
    ".pagination__btn.active"
  ).value;
  if (+activePageValue >= 5) return false;
  switch (target.value) {
    case "-":
      if (+activePageValue - 1 !== 0) {
        table.innerHTML = "";
        allBtns[+activePageValue - 1].classList.remove("active");
        allBtns[+activePageValue - 2].classList.add("active");
        showCurrentPageElements(+activePageValue - 1, renderFunction, arr);
      }
      break;
    case "+":
      if (allBtns[+activePageValue].value < 5) {
        table.innerHTML = "";
        allBtns[+activePageValue - 1].classList.remove("active");
        allBtns[+activePageValue].classList.add("active");
        showCurrentPageElements(+activePageValue + 1, renderFunction, arr);
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
      renderOnClickBtns(
        e.target,
        renderHtmlFlights,
        flightsTable,
        currentArrFlights
      );
    }
    if (closestParentId === "airplane") {
      renderOnClickBtns(
        e.target,
        renderHtmlAirplanes,
        airplaneTable,
        currentArrAirplanes
      );
    }
    if (closestParentId === "notices") {
      renderOnClickBtns(
        e.target,
        renderHtmlNotices,
        noticesTable,
        currentArrNotices
      );
    }
  }
  if (e.target.classList.contains("pagination__arrows")) {
    let closestParentId = e.target.closest(".pagination").id;
    if (closestParentId === "flights") {
      renderOnClickArrows(
        e.target,
        renderHtmlFlights,
        flightsTable,
        currentArrFlights
      );
    }
    if (closestParentId === "airplane") {
      renderOnClickArrows(
        e.target,
        renderHtmlAirplanes,
        airplaneTable,
        currentArrAirplanes
      );
    }
    if (closestParentId === "notices") {
      renderOnClickArrows(
        e.target,
        renderHtmlNotices,
        noticesTable,
        currentArrNotices
      );
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
    if (document.querySelector(".js-en").classList.contains("active")) {
      document.querySelector(".popup__title").innerHTML = "Send to processing";
    } else {
      document.querySelector(".popup__title").innerHTML =
        "Отправить в обработку";
    }
  }
  if (e.target.classList.contains("removeProcessing")) {
    document.querySelector(".popup").classList.add("active");
    if (document.querySelector(".js-en").classList.contains("active")) {
      document.querySelector(".popup__title").innerHTML =
        "Remove all suspicion";
    } else {
      document.querySelector(".popup__title").innerHTML =
        "Снять все подозрения";
    }
  }
  if (e.target.classList.contains("succesProcessing")) {
    document.querySelector(".popup").classList.remove("active");
  }
  if (e.target.classList.contains("stopProcessing")) {
    document.querySelector(".popup").classList.remove("active");
  }
});
