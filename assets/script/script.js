document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICE MODAL ===============*/
const modalViews = document.querySelectorAll(".service__model");
const modalBnt = document.querySelectorAll(".service__button");
const modalCloseBtn = document.querySelectorAll(".service_model_close");
let model = (modalClick) => {
  modalViews[modalClick].classList.add("active__model");
};

modalBnt.forEach((md, i) => {
  md.addEventListener("click", () => {
    model(i);
  });
});
modalCloseBtn.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active__model");
    });
  });
});

/*============= mixitup filter portfolio ================ */
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((i) => i.classList.remove("active__work"));
  this.classList.add("active__work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

/*=== swiper ===*/
let swiper = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader2 = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== TESTIMONIAL SWIPER ===============*

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//   const scrollY = window.pageYOffset; // Corrected here
//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 58;
//     const sectionId = current.getAttribute("id");
//     // Ensure 'const' is used

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".nev__menu a[href*=" + sectionId + "]")
//         .classList.add("active_link");
//     } else {
//       document
//         .querySelector(".nev__menu a[href*=" + sectionId + "]")
//         .classList.remove("active_link");
//     }
//   });
//   console.log("hello world");
// }
// window.addEventListener("scroll", scrollActive);
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nev__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active_link");
    } else {
      sectionsClass.classList.remove("active_link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme_button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// themeButton.onclick = function(){
//   document.body.classList.toggle("light-theme");
//   if (themeButton.classList.contains(iconTheme)){
//     iconTheme.classList.add("bx bx-moon")
//   }else{
//     iconTheme.classList.add("bx bx-sun")

//   }
// }

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// // We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 200,
  // rest:true,
});
sr.reveal(`.home_data`);
sr.reveal(`.home__handle`, { delay: 700 });
sr.reveal(`.home__social , .home_scroll`, { delay: 900, origin: "bottom" });

// send mail section
// const buttonForm = document.querySelector(".button");
// buttonForm.addEventListener("click", (e) => {
//   e.preventDefault();
// });
// function sendMail() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "mda345171@gmail.com",
//     Password: "Humaion@sfak513501",
//     To: "them@website.com",
//     From: document.querySelector(".contact_form_input").value,
//     Subject: "New Contact Form Enquiry",
//     Body: "And this is the body",
//   }).then((message) => alert(message));
// }
