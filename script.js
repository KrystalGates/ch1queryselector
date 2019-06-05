const headerElAll = document.querySelectorAll(".article__header");
console.log('headerElAll', headerElAll);
headerElAll[0].textContent = "Welcome to the Krystal blog";
headerElAll[0,1].classList.add("important");

const removeDash = document.querySelector(".dashed");
removeDash.classList.remove("dashed");

const footerClassAdd = document.querySelector(".article__footer");
footerClassAdd.classList.add("goldenrod");
