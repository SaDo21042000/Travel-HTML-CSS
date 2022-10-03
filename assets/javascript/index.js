//Function dropdown navbar

document.addEventListener("click", handleClick, true);

const temp = [];
temp[1] = -1;

function toggleNavbar(item) {
  let dropdownMenu = item.querySelector(".dropdown-menu");
  temp[0] = dropdownMenu;

  dropdownMenu.style.display = "none";

  if (dropdownMenu.style.display == "none" && temp[1] != 1) {
    dropdownMenu.style.display = "block";
    temp[1] = -1;
  } else {
    dropdownMenu.style.display = "none";
    temp[1] = -1;
  }
}

function handleClick() {
  if (
    temp[0] != undefined &&
    temp[0].style.display == "block" &&
    temp[1] == -1
  ) {
    temp[0].style.display = "none";
    temp[1] = 1;
  }
}
