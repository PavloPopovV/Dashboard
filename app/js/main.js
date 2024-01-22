function setValueOnOdometer(){
    let oneValue = 7265;
    let twoValue = 3671;
    let threeValue = 156;
    let fourValue = 231;
    document.getElementById('odometer-one').innerHTML= oneValue
    document.getElementById('odometer-two').innerHTML= twoValue
    document.getElementById('odometer-three').innerHTML= threeValue
    document.getElementById('odometer-four').innerHTML= fourValue
}














function clickHandler(e) {
  const target = e.target;

  if (target.classList.contains("sidebar__search")) {
    target.classList.add("search-active");
  }
}

document.addEventListener("click", (e) => {
  clickHandler(e);
});

document.addEventListener("DOMContentLoaded", function () {
    setValueOnOdometer();
})