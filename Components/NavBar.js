      document.addEventListener('DOMContentLoaded', () => {
            // --- Event Delegation for Hamburger ---
            document.addEventListener('click', (event) => {
                // Hamburger Toggle
                if (event.target.closest('.menu-toggle')) {
                    const menuToggle = event.target.closest('.menu-toggle');
                    const navLinksArea = document.querySelector('.nav-links-area');
                    menuToggle.classList.toggle('toggle-active');
                    navLinksArea.classList.toggle('links-active');
                }

                // Mobile Dropdown Toggle
                if (window.innerWidth <= 768 && event.target.classList.contains('dropdown-trigger')) {
                    event.preventDefault();
                    event.target.closest('.nav-dropdown').classList.toggle('dropdown-active');
                }
                  // --- Close Mobile Menu on Outside Click ---
                const navLinksContainer = document.querySelector('.nav-links-area');
                const hamburger = document.querySelector('.menu-toggle')
                if (navLinksContainer.classList.contains('links-active') &&
                    !event.target.closest('.nav-links-area') &&
                    !event.target.closest('.menu-toggle'))
                    {
                    hamburger.classList.remove('toggle-active');
                    navLinksContainer.classList.remove('links-active');
                   }
            });

            // --- Clock Update ---
            const currentTimeDisplay = document.getElementById('current-time');
            const updateTime = () => {
                const now = new Date();
                currentTimeDisplay.textContent = now.toLocaleTimeString();
            };
            updateTime();
            setInterval(updateTime, 1000);

            // --- Scroll Effect for Header ---
            const siteHeader = document.querySelector('.site-header');
            let prevScrollPos = 0;
            window.addEventListener('scroll', () => {
                const currentScrollPos = window.scrollY || document.documentElement.scrollTop;
                if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
                    siteHeader.classList.add('header-scrolled');
                } else {
                    siteHeader.classList.remove('header-scrolled');
                }
                prevScrollPos = currentScrollPos <= 0 ? 0 : currentScrollPos;
            });
        });