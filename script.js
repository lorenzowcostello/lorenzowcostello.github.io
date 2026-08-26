// Set the footer year automatically.
document.getElementById("year").textContent = new Date().getFullYear();

// Filter project cards by category.
const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const selectedCategory = button.dataset.filter;

    projectCards.forEach((card) => {
      const shouldShow =
        selectedCategory === "all" ||
        card.dataset.category === selectedCategory;

      card.hidden = !shouldShow;

      if (!shouldShow) {
        card.open = false;
      }
    });
  });
});
