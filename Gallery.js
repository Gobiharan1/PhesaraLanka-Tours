
function updateDisplay(text) {
    document.getElementById('displayBox').textContent = text;
}

function updateDisplay2(text) {
    document.getElementById('displayBox2').textContent = text;
}
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);

// Active link Highlighting
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('header nav .nav-links-container ul li a');
  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          navLinks.forEach(lnk => lnk.classList.remove('active'));
          this.classList.add('active');
          // Only prevent default behavior for links with a `#` href
          if (this.getAttribute('href') === '#') {
              event.preventDefault();
          }
      });
  });
});

// Scroll-Based Glass Effect and Link Color Change
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
      const navLinks = document.querySelectorAll('header nav .nav-links-container ul li a');
        const contactItems = document.querySelectorAll('.contact-item');
    if (window.scrollY > 50) {
        header.classList.add('glass-effect');
         navLinks.forEach(link=>link.classList.add('glass-link'));
           contactItems.forEach(item=> {
            item.classList.add('glass-contact');
           });
           
    } else {
        header.classList.remove('glass-effect');
          navLinks.forEach(link=>link.classList.remove('glass-link'));
          contactItems.forEach(item=> {
              item.classList.remove('glass-contact');
        });

    }
});

//Gallery
const galleryImages = document.querySelectorAll('.container-gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxDetails = document.getElementById('lightboxDetails');
const lightboxClose = document.getElementById('lightboxClose');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
        lightboxDetails.textContent = image.getAttribute('data-details');
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});