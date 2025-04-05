const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    speed: 1000, // smoother speed
    autoplay: {
      delay: 1000, // wait 3 seconds before sliding
      disableOnInteraction: true, // pause autoplay when user interacts
    },
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      }
    }
  });
//slider 

// Ella Tours Animation
document.addEventListener("DOMContentLoaded", function() {
    const itineraryItems = document.querySelectorAll(".itinerary-item");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    itineraryItems.forEach(item => observer.observe(item));
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


//Round Tours button function for days 


    //Photography tours 
    const tabss = document.querySelectorAll('.itinerary-tab');
    const contentss = document.querySelectorAll('.itinerary-content');
    const tourCardss = document.querySelectorAll('.tour-card');
    tabss.forEach(tab => {
        tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
            tabss.forEach(t => {
                t.classList.remove('active');
                t.classList.remove('selected'); // Remove 'selected' class from all tabs
            });
            contentss.forEach(c => c.classList.remove('active'));
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
    function animateTourCardss(){
        tourCardss.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('active');
            }, index * 150);
    });
    }
    animateTourCardss();
    const firstTabb = document.querySelector('.itinerary-tab.active');
    if(firstTabb){
        const tabId = firstTabb.getAttribute('data-tab');
        const activeContent = document.getElementById(tabId);
        animateDayContainers(activeContent);
        firstTabb.classList.add('selected');
    }
