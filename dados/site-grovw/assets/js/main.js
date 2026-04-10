/* 
 * GROVW ARCHITECTURE JS 
 * Front-end Logic Interface
 */

document.addEventListener('DOMContentLoaded', () => {

    // Reveal Animations (Scroll Trigger)
    setTimeout(() => { 
        document.querySelectorAll('.text-reveal-content').forEach(el => el.parentElement.classList.add('reveal-active')); 
    }, 200);
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { 
            if (e.isIntersecting) e.target.classList.add('active'); 
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Plan URL Pre-selection Feature
    const planButtons = document.querySelectorAll('.btn-plano');
    const planInput = document.getElementById('input-plano');
    
    planButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedPlan = btn.getAttribute('data-plano');
            if(planInput && selectedPlan) {
                planInput.value = selectedPlan;
                planInput.classList.add('shadow-[inset_0_0_20px_rgba(205,255,0,0.4)]');
                planInput.classList.remove('bg-[#050505]', 'border-grovw-accent/40');
                planInput.classList.add('bg-grovw-accent/10', 'border-grovw-accent');
                
                // Remove the neon feedback glow after 1 second
                setTimeout(() => { 
                    planInput.classList.remove('shadow-[inset_0_0_20px_rgba(205,255,0,0.4)]'); 
                }, 1000);
            }
        });
    });

    // Back to top visibility Logic
    const backToTopBtn = document.getElementById('back-to-top');
    if(backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
                backToTopBtn.classList.add('opacity-100', 'translate-y-0');
            } else {
                backToTopBtn.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
                backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
            }
        });
    }

    // Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let isMenuOpen = false;

    if(mobileMenuBtn && mobileMenu) {
        const toggleMenu = () => {
            isMenuOpen = !isMenuOpen;
            if(isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                menuIcon.setAttribute('icon', 'solar:close-square-linear');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
                menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
                document.body.style.overflow = '';
            }
        };

        mobileMenuBtn.addEventListener('click', toggleMenu);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(isMenuOpen) toggleMenu();
            });
        });
    }



    // Form Submission — Web3Forms
    const leadForm = document.getElementById('lead-form');
    if(leadForm) {
        leadForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Honeypot check — rejeita bots
            if(leadForm.querySelector('[name="botcheck"]').value) return;

            const submitBtn = leadForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "Enviando...";
            submitBtn.classList.add('opacity-50', 'pointer-events-none');

            try {
                const formData = new FormData(leadForm);
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if(response.ok) {
                    window.location.href = 'https://grovw.com.br/obrigado/';
                } else {
                    throw new Error('Erro no envio');
                }
            } catch(error) {
                alert("Erro ao enviar. Tente novamente ou chame no WhatsApp.");
                submitBtn.innerText = originalText;
                submitBtn.classList.remove('opacity-50', 'pointer-events-none');
            }
        });
    }

});
