// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
  mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
  
  // Animate hamburger to X
  const spans = mobileMenuBtn.querySelectorAll('span');
  spans.forEach(span => span.classList.toggle('active'));
  
  if (mobileNav.style.display === 'block') {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
  if (!mobileMenuBtn.contains(event.target) && !mobileNav.contains(event.target) && mobileNav.style.display === 'block') {
    mobileNav.style.display = 'none';
    
    // Reset hamburger icon
    const spans = mobileMenuBtn.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Close mobile menu if open
    if (mobileNav.style.display === 'block') {
      mobileNav.style.display = 'none';
      
      // Reset hamburger icon
      const spans = mobileMenuBtn.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Video Modal
const videoBtn = document.getElementById('videoBtn');
const videoModal = document.getElementById('videoModal');
const closeBtn = document.querySelector('.close-btn');
const iframe = document.querySelector('.video-wrapper iframe');

videoBtn.addEventListener('click', () => {
  // Set the video URL (replace with your actual video URL)
  iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  
  // Show the modal with animation
  videoModal.style.display = 'flex';
  setTimeout(() => {
    videoModal.classList.add('show');
  }, 10);
});

closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
videoModal.addEventListener('click', (event) => {
  if (event.target === videoModal) {
    closeModal();
  }
});

// Close modal with ESC key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && videoModal.classList.contains('show')) {
    closeModal();
  }
});

function closeModal() {
  videoModal.classList.remove('show');
  setTimeout(() => {
    videoModal.style.display = 'none';
    iframe.src = "";
  }, 300);
}

// Form submission
const materialForm = document.getElementById('materialForm');

materialForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('telefone').value;
  
  // Show success message (in a real app, you would send this data to a server)
  alert(`Obrigado, ${name}! Em breve você receberá nosso material no e-mail: ${email}`);
  materialForm.reset();
});

// Animate elements on scroll
const animatedElements = document.querySelectorAll('.steam-card, .institution-card, .diff-content, .diff-image');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

animatedElements.forEach(element => {
  element.style.opacity = 0;
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(element);
});