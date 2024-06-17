let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 60) {
    document.querySelector("#scroll-top").classList.add("active");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
  }
};

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut();

// mobile no validation
const input = document.querySelector('input[type="text"]');
input.addEventListener("input", () => {
  if (input.value.length < 10 || input.value.length > 10) {
    input.setCustomValidity("Please enter exactly 10 digits.");
  } else {
    input.setCustomValidity("");
  }
});
