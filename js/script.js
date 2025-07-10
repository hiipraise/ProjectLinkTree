// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  // Get all the link buttons
  const buttons = document.querySelectorAll(".link-btn");

  // Loop through each button and add the 'visible' class with a delay
  buttons.forEach((button, index) => {
    setTimeout(() => {
      button.classList.add("visible");
    }, index * 150); // Slightly faster delay for quicker reveal
  });
});
