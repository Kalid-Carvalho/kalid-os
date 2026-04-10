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
});
