document.addEventListener('DOMContentLoaded', () => {

    // ── Intersection Observer (fade-in animations) ──

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.1 });

    requestAnimationFrame(() => {
        document.querySelectorAll('.fade-in, .fade-in-up').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('visible');
            } else {
                observer.observe(el);
            }
        });
    });

    // ── Smooth scroll for anchor links ──

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ── Modal Logic ──

    const modals = {
        clinic: document.getElementById('modal-clinic'),
        partner: document.getElementById('modal-partner')
    };

    function openModal(modalId) {
        const modal = modals[modalId];
        if (modal) {
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.classList.remove('open');
            document.body.style.overflow = '';
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

    document.querySelectorAll('.modal-close, .close-success-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(btn.closest('.modal-overlay'));
        });
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal(overlay);
        });
    });

    // ── Google Sheets Integration ──

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzicprp8_DdR1skDuIGqpxKWZ271KT3mMJmMjNp9fXQNWjuQo3-s0pVfi0GEgi9L2S4Gg/exec';

    ['form-clinic', 'form-partner'].forEach(formId => {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            const modal = form.closest('.modal-container');
            const successMsg = modal.querySelector('.modal-success');
            const modalContent = modal.querySelector('.modal-content');

            btn.innerText = 'Sending...';
            btn.disabled = true;

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            data.type = formId === 'form-clinic' ? 'Clinic' : 'Partner';

            fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow',
                body: JSON.stringify(data)
            })
                .then(() => {
                    modalContent.style.display = 'none';
                    successMsg.style.display = 'block';
                    resetBtn();
                })
                .catch(err => {
                    console.error('Error:', err);
                    alert('Something went wrong. Please try again.');
                    resetBtn();
                });

            function resetBtn() {
                btn.innerText = originalText;
                btn.disabled = false;
            }
        });
    });

    // ── FAQ Accordion ──

    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.faq-item');
            const isOpen = item.classList.contains('open');

            // Close all other items
            document.querySelectorAll('.faq-item.open').forEach(openItem => {
                if (openItem !== item) openItem.classList.remove('open');
            });

            item.classList.toggle('open', !isOpen);
        });
    });

    // ── Cookie Consent ──

    const cookieBanner = document.getElementById('cookie-banner');
    const cookieModal = document.getElementById('modal-cookie');
    const cookieToggle = document.getElementById('cookie-nonessential');

    function getCookieConsent() {
        try { return JSON.parse(localStorage.getItem('cookie_consent')); }
        catch { return null; }
    }

    function saveCookieConsent(prefs) {
        localStorage.setItem('cookie_consent', JSON.stringify(prefs));
        if (cookieBanner) cookieBanner.classList.remove('visible');
        if (cookieModal) {
            cookieModal.classList.remove('open');
            document.body.style.overflow = '';
        }
    }

    function openCookieModal() {
        if (!cookieModal) return;
        const prefs = getCookieConsent();
        if (cookieToggle) cookieToggle.checked = prefs ? prefs.nonEssential : true;
        if (cookieBanner) cookieBanner.classList.remove('visible');
        cookieModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    if (!getCookieConsent() && cookieBanner) {
        setTimeout(() => cookieBanner.classList.add('visible'), 800);
    }

    if (document.getElementById('cookie-accept-all')) {
        document.getElementById('cookie-accept-all').addEventListener('click', () => {
            saveCookieConsent({ essential: true, nonEssential: true });
        });
    }

    if (document.getElementById('cookie-manage')) {
        document.getElementById('cookie-manage').addEventListener('click', openCookieModal);
    }

    if (document.getElementById('cookie-save')) {
        document.getElementById('cookie-save').addEventListener('click', () => {
            saveCookieConsent({
                essential: true,
                nonEssential: cookieToggle ? cookieToggle.checked : false
            });
        });
    }

    if (cookieModal) {
        cookieModal.querySelector('.modal-close').addEventListener('click', () => {
            cookieModal.classList.remove('open');
            document.body.style.overflow = '';
            if (!getCookieConsent() && cookieBanner) cookieBanner.classList.add('visible');
        });

        cookieModal.addEventListener('click', (e) => {
            if (e.target === cookieModal) {
                cookieModal.classList.remove('open');
                document.body.style.overflow = '';
                if (!getCookieConsent() && cookieBanner) cookieBanner.classList.add('visible');
            }
        });
    }

    document.querySelectorAll('[href="#cookie-preferences"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openCookieModal();
        });
    });

    // ── Mobile Menu ──

    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const spans = mobileToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

});
