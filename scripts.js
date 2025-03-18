// Nikonomics Podcast - Main JavaScript

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('.md\\:hidden button');
  const mobileMenu = document.createElement('div');
  
  if (mobileMenuButton) {
    mobileMenu.classList.add('mobile-menu', 'hidden', 'fixed', 'inset-0', 'z-50', 'bg-white', 'p-4');
    mobileMenu.innerHTML = `
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-2xl font-bold">Nikonomics</h2>
        <button class="close-menu">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav class="flex flex-col space-y-4">
        <a href="#" class="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium">Home</a>
        <a href="#episodes" class="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium">Episodes</a>
        <a href="#about" class="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium">About</a>
        <a href="#subscribe" class="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium">Subscribe</a>
      </nav>
    `;
    
    document.body.appendChild(mobileMenu);
    
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
    
    const closeButton = mobileMenu.querySelector('.close-menu');
    if (closeButton) {
      closeButton.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
    }
    
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add animation class to elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.episode-card, #about img, #subscribe a');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animate-fadeIn');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on page load
});

// Form submission handling
const newsletterForm = document.querySelector('form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (email) {
      // This would be replaced with actual form submission logic
      alert('Thanks for subscribing to the Nikonomics newsletter!');
      emailInput.value = '';
    }
  });
}

// Add episode card classes for animation effects
document.addEventListener('DOMContentLoaded', function() {
  const episodeCards = document.querySelectorAll('#episodes .flex.flex-col.rounded-lg');
  episodeCards.forEach(card => {
    card.classList.add('episode-card');
  });
}); 