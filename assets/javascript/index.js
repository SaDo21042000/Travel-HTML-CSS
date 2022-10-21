//DROPDOWN NAVBAR-----------
function toggleNavbar(item) {
  let dropdownMenu = item.lastElementChild;

  if (dropdownMenu.classList.contains("dropdown-active")) {
    dropdownMenu.classList.remove("dropdown-active");
  } else {
    closeDropdown();
    dropdownMenu.classList.add("dropdown-active");
  }
}

// Listen to the doc click
window.addEventListener("click", function (e) {
  // Close the menu if click happen outside menu
  if (e.target.closest(".nav-item") === null) {
    // Close the opend dropdown
    closeDropdown();
  } else {
    return false;
  }
});

// Close the openend Dropdowns
function closeDropdown() {
  document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
    menu.classList.remove("dropdown-active");
  });
}

//TAB -----------------
function tabNavAndContent(tabItemIdentify, tabContentIdentify) {
  var tabItemAll = document.querySelectorAll(".tab-item" + tabItemIdentify);

  var tabContentAll = document.querySelectorAll(
    ".tab-content" + tabContentIdentify
  );

  for (let i = 0; i < tabItemAll.length; i++) {
    tabItemAll[i].addEventListener("click", function (e) {
      e.preventDefault();
      var activeTabItem = document.querySelector(
        ".tab-item.active" + tabItemIdentify
      );
      var activeTabContent = document.querySelector(
        ".tab-content.active" + tabContentIdentify
      );

      activeTabItem.classList.remove("active");
      activeTabContent.classList.remove("active");

      this.classList.add("active");
      let idTabContent = this.id + "-content";
      let tabContent = document.getElementById(idTabContent);
      tabContent.classList.add("active");
    });
  }
}

tabNavAndContent(".searchbox-nav__item", ".searchbox__panel");
tabNavAndContent(
  ".searchbox-tour__inbound--nav-link",
  ".searchbox-tour__inbound__content"
);
tabNavAndContent(
  ".searchbox-tour__selector-item",
  ".searchbox-tour__selector-content"
);

//DRAGGABLE -----------------
const wrapper = document.querySelector(".slick-list");
let isMouseDown = false;
let startX, scrollLeft;
let imageExploreTour = document.getElementsByClassName(
  "explore-tour__item-img"
);

Array.from(imageExploreTour).forEach((img) => {
  img.draggable = false;
});

wrapper.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  startX = e.pageX - wrapper.offsetLeft;
  scrollLeft = wrapper.scrollLeft;
  console.log(wrapper);
});

wrapper.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

wrapper.addEventListener("mouseup", () => {
  isMouseDown = false;
});

wrapper.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;

  const x = e.pageX - wrapper.offsetLeft;
  const walk = (x - startX) * 1.5;
  wrapper.scrollLeft = scrollLeft - walk;
});

//CUT DOWN TIME ---------------------
function cutTimeOut(idElementShow, deadline) {
  var x = setInterval(function () {
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = deadline - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(idElementShow).innerHTML =
      "Còn " + days + " ngày " + hours + ":" + minutes + ":" + seconds;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById(idElementShow).innerHTML = "EXPIRED";
    }
  }, 1000);
}

let deadline1 = new Date("Nov 5, 2022 15:37:25").getTime();
let deadline2 = new Date("Jan 5, 2023 15:37:25").getTime();
let deadline3 = new Date("Dec 5, 2022 15:37:25").getTime();

cutTimeOut("tour-item__price__timer--show1", deadline1);
cutTimeOut("tour-item__price__timer--show2", deadline2);
cutTimeOut("tour-item__price__timer--show3", deadline3);
