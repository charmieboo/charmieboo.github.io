function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function filterProjects(category) {
  const projects = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('.btn-filter');

  projects.forEach((project) => {
    // Compare the card's data-category to the selected category
    if (category === 'all' || project.dataset.category === category) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });

  // Remove 'active' class from all buttons, and add to the clicked button
  buttons.forEach((button) => {
    if (button.textContent.toLowerCase() === category) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}
