// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: "ease",
  once: true,
  offset: 100,
})

// Typing effect for the hero section
const text =
  "Hi, I'm Jay Patil ! A Computer Science student with a specialization in AI-ML, driven by a passion for tech and a curiosity for cybersecurity. With experience in web development and content creation, I thrive on building meaningful projects and helping others navigate the digital world. Let's explore, learn, and create together!"
const typingTextElement = document.getElementById("typing-text")
let i = 0
const speed = 30 // typing speed in milliseconds

function typeWriter() {
  if (i < text.length) {
    typingTextElement.innerHTML += text.charAt(i)
    i++
    setTimeout(typeWriter, speed)
  }
}

// Start the typing effect when the page loads
window.addEventListener("load", typeWriter)

// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear()

// Form submission with animation
const contactForm = document.getElementById("contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const submitBtn = this.querySelector('button[type="submit"]')
    submitBtn.classList.add("sending")

    // Simulate form submission (replace with actual form submission)
    setTimeout(() => {
      // Reset form
      contactForm.reset()
      submitBtn.classList.remove("sending")

      // Show success message
      const successMessage = document.createElement("div")
      successMessage.className = "success-message"
      successMessage.textContent = "Message sent successfully!"
      successMessage.style.color = "#4a76ee"
      successMessage.style.marginTop = "10px"
      successMessage.style.fontWeight = "500"

      contactForm.appendChild(successMessage)

      // Remove success message after 3 seconds
      setTimeout(() => {
        successMessage.remove()
      }, 3000)
    }, 1500)
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      })
    }
  })
})

// Add hover effect to buttons
const buttons = document.querySelectorAll(".btn-hover")
buttons.forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)"
  })

  button.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

// Add parallax effect to hero image
const heroImage = document.querySelector(".hero-section .headshot img")
if (heroImage) {
  window.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight

    heroImage.style.transform = `translate(${x * 10}px, ${y * 10}px)`
  })
}

// Project cards hover effect
const projectCards = document.querySelectorAll(".project-card")
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

// Skill cells animation
const skillCells = document.querySelectorAll(".cell")
skillCells.forEach((cell) => {
  cell.addEventListener("mouseenter", function () {
    const img = this.querySelector("img")
    img.style.transform = "rotate(10deg) scale(1.2)"
  })

  cell.addEventListener("mouseleave", function () {
    const img = this.querySelector("img")
    img.style.transform = "rotate(0) scale(1)"
  })
})

// Add scroll to top button
const scrollButton = document.createElement("button")
scrollButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>'
scrollButton.className = "scroll-top-btn"
scrollButton.style.position = "fixed"
scrollButton.style.bottom = "20px"
scrollButton.style.right = "20px"
scrollButton.style.width = "50px"
scrollButton.style.height = "50px"
scrollButton.style.borderRadius = "50%"
scrollButton.style.backgroundColor = "var(--link-color)"
scrollButton.style.color = "white"
scrollButton.style.border = "none"
scrollButton.style.cursor = "pointer"
scrollButton.style.display = "none"
scrollButton.style.zIndex = "999"
scrollButton.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
scrollButton.style.transition = "all 0.3s ease"

document.body.appendChild(scrollButton)

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

scrollButton.addEventListener("mouseenter", function () {
  this.style.backgroundColor = "var(--hover-color)"
  this.style.transform = "translateY(-3px)"
})

scrollButton.addEventListener("mouseleave", function () {
  this.style.backgroundColor = "var(--link-color)"
  this.style.transform = "translateY(0)"
})

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollButton.style.display = "block"
  } else {
    scrollButton.style.display = "none"
  }
})

