const items = document.querySelectorAll(".stavkaGrid");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.3
});

items.forEach(item => {
  observer.observe(item);
});
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});