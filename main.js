let icon = document.querySelector(".iconmenu");
let nav2 = document.querySelector(".nav2");
let nav1 = document.querySelector(".desktop-nav");
let value = false;
icon.addEventListener("click", function (e) {
  e.preventDefault();
  if (!value) {
    nav1.style.display = "none";
    nav2.style.display = "block";
    nav2.style.backgroundColor = "black";
    value=true
  } else {
    nav1.style.display = "block";
    nav2.style.display = "none";
    value=false

  }
});
