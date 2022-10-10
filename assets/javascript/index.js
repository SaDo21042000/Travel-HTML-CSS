//DROPDOWN NAVBAR
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
    console.log("out");
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

//TAB
var tabItem = document.querySelectorAll(".tab-item");
var tabContent = document.querySelectorAll("tab-content");


console.log(tabItem)
//console.log(content)
//console.log(border)
//console.log(lis)

for (let i = 0; i < tabItem.length; i++) {
  tabItem[i].addEventListener("click", function (e) {
    e.preventDefault();
    var activeTabItem = document.querySelector(".tab-item.active");
    var activeTabContent = document.querySelector(".tab-content.active");

    activeTabItem.classList.remove("active");
    activeTabContent.classList.remove("active");

    this.classList.add("active");
    //var idt = this.getAttribute("href");
    let idTabContent = this.id + "-content"
    let tabContent = document.getElementById(idTabContent);

    //var activ = document.querySelector(attr);
    tabContent.classList.add("active")

    //activ.classList.add("activ");

    
  });
}
