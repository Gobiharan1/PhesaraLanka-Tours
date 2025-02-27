document.addEventListener('DOMContentLoaded', () => {
    const inquiryBtn = document.querySelector('.inquiry-btn');
    const popupOverlay = document.querySelector('.popup-overlay');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.querySelector('.inquiry-form');

    inquiryBtn.addEventListener('click', (e) => {
        e.preventDefault();
        popupOverlay.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
        form.reset();
        clearErrors();
    });

    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
            form.reset();
            clearErrors();
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Thank you for your inquiry! We will contact you soon.');
            popupOverlay.style.display = 'none';
            form.reset();
            clearErrors();
        }
    });

    function validateForm() {
        let isValid = true;
        clearErrors();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name.value.trim()) {
            showError(name, 'name');
            isValid = false;
        }

        if (!email.value.trim() || !emailRegex.test(email.value)) {
            showError(email, 'email');
            isValid = false;
        }

        return isValid;
    }

    function showError(input, type) {
        input.classList.add('error');
        const errorMessage = input.nextElementSibling;
        errorMessage.style.display = 'block';
    }

    function clearErrors() {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.classList.remove('error');
            const errorMessage = input.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains('error-message')) {
                errorMessage.style.display = 'none';
            }
        });
    }

    // Clock Functionality
    function updateClock() {
        const clock = document.getElementById('clock');
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();
});