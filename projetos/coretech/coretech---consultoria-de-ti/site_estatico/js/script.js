document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Scroll effect for Navbar
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            nav.classList.add('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-zinc-100');
            nav.classList.remove('bg-transparent');
        } else {
            nav.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-zinc-100');
            nav.classList.add('bg-transparent');
        }
    });

    // Simple smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
