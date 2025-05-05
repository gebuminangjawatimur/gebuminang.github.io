// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu-open');
  
  // Change icon based on menu state
  const icon = mobileMenuButton.querySelector('i');
  if (mobileMenu.classList.contains('mobile-menu-open')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
  if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target) && mobileMenu.classList.contains('mobile-menu-open')) {
    mobileMenu.classList.remove('mobile-menu-open');
    const icon = mobileMenuButton.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Custom cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

// Check if we're on touch device - disable custom cursor on touch devices
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice) {
  document.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    // Add slight delay for cursor outline for smoother effect
    setTimeout(() => {
      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;
    }, 80);
  });
} else {
  // Hide custom cursor on touch devices
  cursorDot.style.display = 'none';
  cursorOutline.style.display = 'none';
}

// Add hover effect to cursor when hovering over links
const links = document.querySelectorAll('a, button');
links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
  });
  
  link.addEventListener('mouseleave', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});

// Animate elements on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.1 });

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in animation to info cards
  const infoCards = document.querySelectorAll('.info-card');
  infoCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Add fade-in animation to stats
  const statCards = document.querySelectorAll('.stat-card');
  statCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Add fade-in animation to gallery items
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.9)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    item.style.transitionDelay = `${index * 0.05}s`;
    observer.observe(item);
  });

  // Add animations to section headers
  const sectionHeaders = document.querySelectorAll('.section-header');
  sectionHeaders.forEach(header => {
    header.style.opacity = '0';
    header.style.transform = 'translateY(20px)';
    header.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(header);
  });
});

// Apply animate class
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate').forEach(element => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0) scale(1)';
  });
});