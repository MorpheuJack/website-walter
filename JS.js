
// Função de inicialização
document.addEventListener('DOMContentLoaded', () => {

        let lastScroll = 0;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 50) {
      header.classList.add('hide');
    } else {
      header.classList.remove('hide');
    }

    lastScroll = currentScroll;
  });

        // --- Menu Mobile ---
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const navMenu = document.getElementById('nav-menu');
        mobileMenuButton.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuButton.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
        });

        // --- Animação de Rolagem ---
        const faders = document.querySelectorAll('.fade-in');
        const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        const appearOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, appearOptions);
        faders.forEach(fader => appearOnScroll.observe(fader));

// --- COMEÇO LÓGICA DO ACORDEÃO (FAQ) ---

            // --- LÓGICA DO ACORDEÃO (FAQ) ---
            const faqQuestions = document.querySelectorAll('.faq-question');
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    const isOpen = answer.classList.contains('open');
                    
                    // Fechar todos os outros antes de abrir o clicado
                    document.querySelectorAll('.faq-answer.open').forEach(openAnswer => {
                        if (openAnswer !== answer) {
                            openAnswer.classList.remove('open');
                            openAnswer.previousElementSibling.classList.remove('active');
                        }
                    });
                    
                    // Alterna o estado do item clicado
                    question.classList.toggle('active');
                    answer.classList.toggle('open');
                });
            });

        

// --- FIM LÓGICA DO ACORDEÃO (FAQ) ---

// --- Lógica do Carrossel ---




    });

