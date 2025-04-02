// Theme toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle")
  const themeIcon = document.getElementById("theme-icon")
  const body = document.body

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Check if user has a saved preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "light") {
    body.classList.remove("dark-mode")
    body.classList.add("light-mode")
    themeIcon.classList.remove("bi-sun-fill")
    themeIcon.classList.add("bi-moon-fill")
  }

  // Toggle theme on button click
  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      // Switch to light mode
      body.classList.remove("dark-mode")
      body.classList.add("light-mode")
      themeIcon.classList.remove("bi-sun-fill")
      themeIcon.classList.add("bi-moon-fill")
      localStorage.setItem("theme", "light")
    } else {
      // Switch to dark mode
      body.classList.remove("light-mode")
      body.classList.add("dark-mode")
      themeIcon.classList.remove("bi-moon-fill")
      themeIcon.classList.add("bi-sun-fill")
      localStorage.setItem("theme", "dark")
    }
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for navbar height
          behavior: "smooth",
        })

        // Close mobile menu if open
        const navbarCollapse = document.querySelector(".navbar-collapse")
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show")
        }
      }
    })
  })
})

