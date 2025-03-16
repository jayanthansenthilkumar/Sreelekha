document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles
    particlesJS('particles-js', {
        particles: {
            number: { value: 80 },
            color: { value: '#2563eb' },
            opacity: { value: 0.2 },
            size: { value: 3},
            line_linked: {
                enable: true,
                distance: 150,
                color: '#2563eb',
                opacity: 0.1,
                width: 1
            },
            move: {
                enable: true,
                speed: 2
            }
        }
    });

    // Mobile toggle only
    const navbar = document.querySelector('.navbar');
    document.querySelector('.mobile-toggle')?.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('active')) return;
            
            const targetTab = button.dataset.tab;
            const targetPane = document.getElementById(targetTab);
            
            // Handle active states
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Animate out current tab
            const currentPane = document.querySelector('.tab-pane.active');
            if (currentPane) {
                currentPane.style.opacity = '0';
                currentPane.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    currentPane.classList.remove('active');
                    
                    // Animate in new tab
                    targetPane.classList.add('active');
                    setTimeout(() => {
                        targetPane.style.opacity = '1';
                        targetPane.style.transform = 'translateY(0)';
                    }, 50);
                }, 300);
            } else {
                targetPane.classList.add('active');
                targetPane.style.opacity = '1';
                targetPane.style.transform = 'translateY(0)';
            }
        });
    });
});