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

// Cuando la página se carga
window.onload = function() {
  // Poner el año actual en el footer
  document.getElementById("current-year").textContent = new Date().getFullYear();
  
  // Verificar tema guardado
  const temaGuardado = localStorage.getItem("theme");
  if (temaGuardado === "light") {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    document.getElementById("theme-icon").classList.remove("bi-sun-fill");
    document.getElementById("theme-icon").classList.add("bi-moon-fill");
  }
  
  // Agregar evento para cambiar tema
  document.getElementById("theme-toggle").onclick = cambiarTema;
  
  // Agregar eventos para scroll suave
  const enlaces = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].onclick = hacerScrollSuave;
  }

  // Control del botón de scroll to top
  const scrollToTopButton = document.querySelector('.scroll-to-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopButton.classList.add('visible');
    } else {
      scrollToTopButton.classList.remove('visible');
    }
  });
}

