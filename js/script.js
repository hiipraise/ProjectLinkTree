document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".project-card");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing after it's visible
      }
    });
  }, observerOptions);

  cards.forEach((card) => {
    observer.observe(card);
  });
});