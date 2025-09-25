// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Fade-in on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'linear-gradient(90deg, #000000 0%, #001122 100%)';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Form submission (demo - ganti dengan backend)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const message = document.getElementById('message')?.value || '';
            
            if (name && email && message) {
                alert('Terima kasih, ' + name + '! Pesan Anda telah dikirim. Saya akan balas segera via email.');
                form.reset();
            } else {
                alert('Mohon isi semua field!');
            }
        });
    });

    // Portfolio card hover enhancement
    document.querySelectorAll('.glow-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Smooth scroll for anchor links (jika ada)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Tambahan: Auto-fade-in untuk hero elements
window.addEventListener('load', function() {
    document.querySelectorAll('.hero .col-lg-8 > *').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Tambahan: Observe certificates section secara spesifik
const certSection = document.querySelector('.row.g-4:last-of-type'); // Row certificates (yang terakhir)
if (certSection) {
    const certObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.fade-in').forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('visible');
                    }, index * 100); // Stagger animation 100ms per card
                });
            }
        });
    }, { threshold: 0.1 });

    certObserver.observe(certSection);
}

// Update hover untuk certificates (sama seperti projects)
document.querySelectorAll('.glow-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});