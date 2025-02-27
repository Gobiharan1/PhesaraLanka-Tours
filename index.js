
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
    /*  const navLinks = document.querySelectorAll('header nav .nav-links-container ul li a'); */
        const contactItems = document.querySelectorAll('.contact-item');
    if (window.scrollY > 50) {
        header.classList.add('glass-effect');
       /*  navLinks.forEach(link=>link.classList.add('glass-link')); */
           contactItems.forEach(item=> {
            item.classList.add('glass-contact');
           });
           
    } else {
        header.classList.remove('glass-effect');
       /*   navLinks.forEach(link=>link.classList.remove('glass-link')); */
          contactItems.forEach(item=> {
              item.classList.remove('glass-contact');
        });

    }
});




//slider 
const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  effect: {
    name: 'slide', 
    easing: 'linear',
  },
  speed: 1500,
  slidesPerView: 3, // Fixed number of slides visible (no breakpoints)
});
// Pause autoplay on hover
const swiperContainer = document.querySelector('.swiper-container');
swiperContainer.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
});
swiperContainer.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
});
//ella tours

document.addEventListener('DOMContentLoaded', function() {
    const itineraryItems = document.querySelectorAll('.itinerary-item');

      const observerOptions = {
            root: null, // viewport as root
            rootMargin: '0px',
            threshold: 0.5 // Trigger animation when 50% of item is visible
        };


   const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);  // Stop observing after animation
               
                  }
           });
        }, observerOptions);
        itineraryItems.forEach(item => {
        observer.observe(item);
        });

});


//Photography tours 
const tabs = document.querySelectorAll('.itinerary-tab');
const contents = document.querySelectorAll('.itinerary-content');
 const tourCards = document.querySelectorAll('.tour-card');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
       const tabId = tab.getAttribute('data-tab');
        tabs.forEach(t => {
            t.classList.remove('active');
            t.classList.remove('selected'); // Remove 'selected' class from all tabs
        });
        contents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        tab.classList.add('selected'); // Add 'selected' class to the clicked tab
        const activeContent = document.getElementById(tabId);
        activeContent.classList.add('active');
       animateDayContainers(activeContent);
    });
});
function animateDayContainers(content) {
     const dayContainers = content.querySelectorAll('.day-container');
    dayContainers.forEach((container, index) => {
            setTimeout(() => {
              container.classList.add('active');
          }, index * 150);
    });
}
function animateTourCards(){
    tourCards.forEach((card, index) => {
         setTimeout(() => {
               card.classList.add('active');
          }, index * 150);
   });
}
animateTourCards();
const firstTab = document.querySelector('.itinerary-tab.active');
if(firstTab){
    const tabId = firstTab.getAttribute('data-tab');
     const activeContent = document.getElementById(tabId);
     animateDayContainers(activeContent);
     firstTab.classList.add('selected');
}


//Things to do 
document.addEventListener('DOMContentLoaded', function() {
  // Pinterest-style hover effect
  document.querySelectorAll('.blog-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.zIndex = 10;
      });
      
      card.addEventListener('mouseleave', function() {
          this.style.zIndex = 1;
      });
  });

  // Lazy loading for images
  const lazyImages = document.querySelectorAll('.card-image');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              observer.unobserve(img);
          }
      });
  });

  lazyImages.forEach(img => {
      img.dataset.src = img.src;
      img.src = '';
      observer.observe(img);
  });
});

const cards = document.querySelectorAll('.blog-card');
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting) {
  entry.target.style.opacity = 1;
  entry.target.style.transform = 'translateY(0)';
}
});
}, { threshold: 0.1 });

cards.forEach(card => {
card.style.opacity = 0;
card.style.transform = 'translateY(20px)';
observer.observe(card);
});