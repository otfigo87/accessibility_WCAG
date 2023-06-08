const mobileMenuTrigger = document.getElementById('mobileMenuTrigger');
const mobileMenu = document.querySelector('.nav-links-container');
const navLinks = document.querySelectorAll('.nav-links li a');

mobileMenuTrigger.addEventListener('click', () => {
  mobileMenu.classList.toggle("active");
  mobileMenuTrigger.classList.toggle("active");
  // Toggle Aria-Expanded Attribute True / False
  if (mobileMenu.classList.contains("active")) {
    mobileMenuTrigger.setAttribute("aria-expanded", "true");
  } else {
     mobileMenuTrigger.setAttribute("aria-expanded", "false");
  }
})

// Provide Styling for Current Page Anchor Tag
navLinks.forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page')
    }
})

