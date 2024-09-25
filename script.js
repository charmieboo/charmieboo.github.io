function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function filterProjects(category) {
    let projects = document.querySelectorAll('.project-card');
    projects.forEach((project) => {
      if (category === 'all' || project.dataset.category === category) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  
    let buttons = document.querySelectorAll('.btn-filter');
    buttons.forEach((button) => {
      if (button.textContent.toLowerCase() === category) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
  