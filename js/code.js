


// Función para cambiar el tema
function cambiarTema() {
  const body = document.body;
  const icono = document.getElementById("theme-icon");
  
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    icono.classList.remove("bi-sun-fill");
    icono.classList.add("bi-moon-fill");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    icono.classList.remove("bi-moon-fill");
    icono.classList.add("bi-sun-fill");
    localStorage.setItem("theme", "dark");
  }
}

// Función para hacer scroll suave
function hacerScrollSuave(e) {
  e.preventDefault();
  const idSeccion = this.getAttribute("href");
  const seccion = document.querySelector(idSeccion);
  
  if (seccion) {
    window.scrollTo({
      top: seccion.offsetTop - 70,
      behavior: "smooth"
    });
    
    // Cerrar menú móvil si está abierto
    const menu = document.querySelector(".navbar-collapse");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Actualizar año en el footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Toggle del tema claro/oscuro
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeIcon.classList.toggle('bi-sun-fill');
    themeIcon.classList.toggle('bi-moon-fill');
  });

  // Scroll suave para todos los enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Control del botón de scroll to top
  const scrollToTopButton = document.querySelector('.scroll-to-top');
  
  window.addEventListener('scroll', () => {
    scrollToTopButton.classList.toggle('visible', window.pageYOffset > 300);
  });
});

