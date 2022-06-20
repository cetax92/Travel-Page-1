// Ovo je responsiv meni
let menu = document.querySelector(".header ul");
let btn = document.querySelector(".header button");

btn.addEventListener("click", (mobilni) => {
  if (btn.innerText === "MENU") {
    menu.style.display = "block";
    btn.innerText = "CLOSE";
  } else {
    menu.style.display = "none";
    btn.innerText = "MENU";
  }
});

// Ovo je galerija
let rightBtn = document.querySelector("#right-btn");
let leftBtn = document.querySelector("#left-btn");
let pictures = document.querySelectorAll(".slider-images img");
let imagNumber = 0;

//pomjeramo slike u desno
const moveRight = () => {
  displayNone(pictures);
  imagNumber++;
  if (imagNumber === pictures.length) {
    imagNumber = 0;
  }
  pictures[imagNumber].style.display = "block";
};

// Pomjeramo slike u ljevo
const moveLeft = () => {
  displayNone(pictures);
  imagNumber--;

  if (imagNumber === -1) {
    imagNumber = pictures.length - 1;
  }
  pictures[imagNumber].style.display = "block";
};

// Evenet listeneri za strelice
rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

// Ova funkcija ce sakriti sve slike
const displayNone = (elements) => {
  elements.forEach((img) => {
    img.style.display = "none";
  });
};
/*
const portfolioSort = (button) => {
  let category = button.getAttribute("data-category");
  let portfolioItems = document.querySelectorAll(".portfolio-single-item");

  portfolioItems.forEach((item) => {
    item.style.display = "none";
  });

  if (category === "sve") {
    portfolioItems.forEach((item) => {
      item.style.display = "block";
    });
  }

  portfolioItems.forEach((item) => {
    if (item.getAttribute("data-category").includes(category)) {
      item.style.display = "block";
    }
  });
};
*/
//SORTIRANJE PORTFOLIA PO KATEGORIJAMA
let portfolioDugmad = document.querySelectorAll(".portfolio-button");

portfolioDugmad.forEach(function (dugme) {
  dugme.addEventListener("click", function (info) {
    let category = dugme.getAttribute("data-category");
    let portfolioItems = document.querySelectorAll(".portfolio-single-item");

    portfolioItems.forEach((item) => {
      item.style.display = "none";
    });

    if (category === "sve") {
      portfolioItems.forEach((item) => {
        item.style.display = "block";
      });
    }
    portfolioItems.forEach((item) => {
      if (item.getAttribute("data-category").includes(category)) {
        item.style.display = "block";
      }
    });
  });
});

/*let category = dugme.getAttribute("data-category");
  let portfolioItems = document.querySelectorAll(".portfolio-single-item");

  console.log(portfolioDugmad);

  portfolioItems.forEach((item) => {
    item.style.display = "";
  });
});
*/

//Otvaramo modal

let modalWindow = document.querySelector(".popup-modal");
let overlay = document.querySelector(".overlay");
let open = document.querySelector("#modalButton");
let closed = document.querySelector("#closeModal");

open.addEventListener("click", function () {
  modalWindow.style.display = "block";
  overlay.style.display = "block";
});

// Zatvaramo modal
closed.addEventListener("click", function () {
  modalWindow.style.display = "none";
  overlay.style.display = "none";
});

//1 Otvaramo Novi Modal
let otvoren = document.querySelector("#sekcijaModal");
let noviWindow = document.querySelector(".novi-modal");
let zatvori = document.querySelector("#zatvoriModal");

otvoren.addEventListener("click", function () {
  noviWindow.style.display = "block";
  overlay.style.display = "block";
});
// ZATVARAMO NOVI MODAL
zatvori.addEventListener("click", function () {
  noviWindow.style.display = "none";
  overlay.style.display = "none";
});
