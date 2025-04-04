document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os elementos que terão o efeito
    const elementos = document.querySelectorAll(
        '.fade-in-slide-up, .fade-in-slide-down, .fade-in-slide-left, .fade-in-slide-right'
    );

    // Configuração do observer com offset de 40px (rootMargin inferior de -40px)
    const opcoesObserver = {
        root: null, // viewport
        rootMargin: "0px 0px -100px 0px", // dispara 40px antes do elemento estar totalmente visível
        threshold: 0
    };

    // Cria o observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');  // ativa o efeito
                observer.unobserve(entry.target); // para de observar após a animação
            }
        });
    }, opcoesObserver);

    // Observa cada elemento
    elementos.forEach(el => observer.observe(el));
});
