document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    // Modal Logic
    const modals = {
        clinic: document.getElementById('modal-clinic'),
        partner: document.getElementById('modal-partner')
    };

    function openModal(modalId) {
        const modal = modals[modalId];
        if (modal) {
            modal.classList.add('open');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.classList.remove('open');
            document.body.style.overflow = '';
            // Reset form and success state after delay
            setTimeout(() => {
                const form = modal.querySelector('form');
                const content = modal.querySelector('.modal-content');
                const success = modal.querySelector('.modal-success');
                if (form) form.reset();
                if (content) content.style.display = 'block';
                if (success) success.style.display = 'none';
            }, 300);
        }
    }

    // Attach event listeners to buttons
    document.querySelectorAll('a[href="#clinic-signup"], a[href="#contact"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('clinic');
        });
    });

    document.querySelectorAll('a[href="#partner-signup"], a[href="#partners"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('partner');
        });
    });

    // Close buttons
    document.querySelectorAll('.modal-close, .close-success-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(btn.closest('.modal-overlay'));
        });
    });

    // Close on click outside
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal(overlay);
            }
        });
    });

    // Google Sheets Integration
    // TODO: Follow the instructions in SETUP_SHEETS.md to get your URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyrXkREhz0w8JB-a5cfR-XJerzfY0cko3n3sD4W3MX5xZuMXVUw2LU__bB4tuQGs_1NOw/exec';

    // Form Handling
    ['form-clinic', 'form-partner'].forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const btn = form.querySelector('button[type="submit"]');
                const originalText = btn.innerText;
                const modal = form.closest('.modal-container');
                const successMsg = modal.querySelector('.modal-success');
                const modalContent = modal.querySelector('.modal-content');

                // Loading state
                btn.innerText = 'Sending...';
                btn.disabled = true;

                // Prepare data
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                // Add type based on form ID
                data.type = formId === 'form-clinic' ? 'Clinic' : 'Partner';

                // If URL is not set, simulate only (for demo purposes)
                if (GOOGLE_SCRIPT_URL === 'https://script.google.com/macros/s/AKfycbyrXkREhz0w8JB-a5cfR-XJerzfY0cko3n3sD4W3MX5xZuMXVUw2LU__bB4tuQGs_1NOw/exec') {
                    console.warn('Google Script URL not set. Simulating success.');
                    setTimeout(() => {
                        showSuccess();
                    }, 1000);
                    return;
                }

                // Send to Google Sheets
                fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Important for Google Apps Script
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    redirect: 'follow',
                    body: JSON.stringify(data)
                })
                    .then(() => {
                        showSuccess();
                    })
                    .catch(err => {
                        console.error('Error:', err);
                        alert('Something went wrong. Please try again.');
                        resetBtn();
                    });

                function showSuccess() {
                    modalContent.style.display = 'none';
                    successMsg.style.display = 'block';
                    resetBtn();
                }

                function resetBtn() {
                    btn.innerText = originalText;
                    btn.disabled = false;
                }
            });
        }
    });

});
