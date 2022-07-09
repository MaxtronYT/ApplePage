function showitems() {
  document.querySelector("#nav").classList.toggle("bg-black");
  document.querySelector("#nav").classList.toggle("h-screen");
  document.querySelector("#bar-one").classList.toggle("rotate-45");
  document.querySelector("#bar-two").classList.toggle("-rotate-45");
  document.querySelector(".hamburger").classList.toggle("justify-between");
  document.querySelector("#hidden_items_nav").classList.toggle("hidden");
}
function shownav() {
  document.querySelector("#hid-nav").classList.toggle("hidden");
  document.querySelector("#hid-nav").classList.add("translate-y-4");
}

window.onscroll = () => {
  let top = window.scrollY;
  if (top > 0) {
    document.querySelector("#iphone").classList.add("top-0");
  } else {
    document.querySelector("#iphone").classList.remove("top-0");
  }
};

var search_button = document.querySelector("#search_span");
var search_bar = document.querySelector("#search-bar");

search_button.onclick = () => {
  search_bar.classList.toggle("hidden");
  var elements = document.getElementsByClassName("disappear");
  var x = elements.length;
  for (let i = 0; i < x; i++) {
    elements[i].classList.toggle("hiding");
  }
  search_button.parentElement.classList.toggle("-ml-[5rem]");

  search_button.parentElement.classList.toggle("grow");
};

document.querySelector("body").addEventListener("onclick", () => {
  alert("Clicked");
  search_bar.classList.toggle("hidden");
  document.querySelector("#search_bt").classList.toggle("w-[100%]");
  search_button.parentElement.classList.toggle("grow");
});

setInterval(() => {
  if (window.innerWidth < 732) {
    document.querySelector("#iphone_13-bg").style.backgroundImage =
      'url("https://www.apple.com/v/iphone-13-pro/f/images/overview/hero/hero_endframe__3tq53uan9teq_small.jpg")';
  } else {
    document.querySelector("#iphone_13-bg").style.backgroundImage =
      'url("iphone.jpg")';
  }
}, 1000);
