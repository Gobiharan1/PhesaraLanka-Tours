function updateDisplay(value) {
    const displayBox = document.getElementById('tourSelect');
    if (value === "All your tours") {
        console.log("Showing all tours"); // Replace with your logic
    } else {
        console.log("Selected tour: " + value); // Replace with your logic
    }
    // Optionally update the displayBox or other UI elements here
}


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
document.addEventListener("DOMContentLoaded", function () {
    function initializeSlider(sliderId) {
        const slider = document.getElementById(sliderId);
        const track = slider.querySelector(".slider-track");
        const prevArrow = slider.querySelector(".prev-arrow");
        const nextArrow = slider.querySelector(".next-arrow");
        const dotsContainer = document.getElementById(`dots${sliderId.slice(-1)}`);
        const cards = slider.querySelectorAll(".tour-card");

        let index = 0;
        const totalCards = cards.length;
        const visibleCards = window.innerWidth > 1024 ? 4 : window.innerWidth > 767 ? 3 : 2;
        const step = 100 / visibleCards;

        // Create indicator dots
        for (let i = 0; i < Math.ceil(totalCards / visibleCards); i++) {
            const dot = document.createElement("span");
            dot.classList.add("slider-dot");
            if (i === 0) dot.classList.add("active");
            dot.addEventListener("click", () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }

        const dots = dotsContainer.querySelectorAll(".slider-dot");

        function updateSlider() {
            track.style.transform = `translateX(-${index * step}%)`;
            dots.forEach(dot => dot.classList.remove("active"));
            dots[Math.floor(index / visibleCards)]?.classList.add("active");
        }

        function goToSlide(slideIndex) {
            index = slideIndex * visibleCards;
            updateSlider();
        }

        nextArrow.addEventListener("click", () => {
            if (index + visibleCards < totalCards) {
                index++;
                updateSlider();
            }
        });

        prevArrow.addEventListener("click", () => {
            if (index > 0) {
                index--;
                updateSlider();
            }
        });
    }

    initializeSlider("slider1");
    initializeSlider("slider2");
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

  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      speed: 800,
      coverflowEffect: {
        rotate: 40, 
        stretch: 50, 
        depth: 200, 
        modifier: 1.5,
        slideShadows: true,
      },
      parallax: true, 
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 3000, // Auto-flow every 3 seconds
        disableOnInteraction: false, // Continues after interaction
      },
    });

    // Enhance parallax effect on scroll
    swiper.on('progress', function () {
      const slides = document.querySelectorAll('.swiper-slide');
      slides.forEach((slide) => {
        const img = slide.querySelector('img');
        const parallaxAmount = slide.getAttribute('data-swiper-parallax') || 0;
        img.style.transform = `translateZ(20px) translateX(${parallaxAmount * this.progress * 100}px)`;
      });
    });
  });



