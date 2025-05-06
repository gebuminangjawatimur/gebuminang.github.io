// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the mobile menu button and mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const menuIcon = mobileMenuButton ? mobileMenuButton.querySelector('.fas') : null;
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Toggle mobile menu on click
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', function() {
        // Toggle mobile menu visibility
        if (mobileMenu) {
          mobileMenu.classList.toggle('active');
          
          // Change icon from bars to times (X) when menu is open
          if (menuIcon) {
            if (mobileMenu.classList.contains('active')) {
              menuIcon.classList.remove('fa-bars');
              menuIcon.classList.add('fa-times');
            } else {
              menuIcon.classList.remove('fa-times');
              menuIcon.classList.add('fa-bars');
            }
          }
        }
      });
    }
    
    // Close the mobile menu when clicking outside of it
    document.addEventListener('click', function(event) {
      // If click is outside the menu and button, and menu is open
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        // Check if the click is not on the menu or menu button
        if (!mobileMenu.contains(event.target) && 
            !mobileMenuButton.contains(event.target)) {
          mobileMenu.classList.remove('active');
          // Reset icon to bars
          if (menuIcon) {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
          }
        }
      }
    });
    
    // Close mobile menu when a link is clicked
    if (mobileMenu) {
      const mobileMenuLinks = mobileMenu.querySelectorAll('a');
      mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
          mobileMenu.classList.remove('active');
          // Reset icon to bars
          if (menuIcon) {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
          }
        });
      });
    }
    
    // Close mobile menu on window resize (if switching to desktop view)
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        // Reset icon to bars
        if (menuIcon) {
          menuIcon.classList.remove('fa-times');
          menuIcon.classList.add('fa-bars');
        }
      }
    });
  });