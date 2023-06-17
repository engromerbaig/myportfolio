// Navigation menu
const menuBtn = document.querySelector(".hamburger");
const menuList = document.querySelector(".sub-menu");

menuBtn.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    menuList.classList.toggle("show");
  }
});

// Smooth scrolling
const links = document.querySelectorAll(".scroll");

for (const link of links) {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.hash);

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
}

// Project Modal
const modal = document.querySelector(".modal");
const projectLinks = document.querySelectorAll(".project-link");

for (const link of projectLinks) {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const project = link.closest(".project");
    const imgSrc = project.querySelector("img").src;
    const title = project.querySelector("h3").textContent;
    const description = project.querySelector("p").textContent;

    modal.querySelector("img").src = imgSrc;
    modal.querySelector("h3").textContent = title;
    modal.querySelector("p").textContent = description;

    modal.classList.add("active");
  });
}

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-btn")) {
    modal.classList.remove("active");
  }
});

// Contact form
const form = document.querySelector("form");
const nameInput = form.querySelector("#name");
const emailInput = form.querySelector("#email");
const messageInput = form.querySelector("#message");
const submitBtn = form.querySelector("button[type='submit']");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      alert("Thank you for your message!");
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was an error submitting your message. Please try again later.");
    });
});

// sub-menu 

document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.hamburger');
  var subMenu = document.querySelector('.sub-menu');

  subMenu.style.display = 'none'; // Initially hide the sub-menu

  hamburger.addEventListener('click', () => {
    subMenu.classList.toggle('show');
  });
});

// fix height problem


