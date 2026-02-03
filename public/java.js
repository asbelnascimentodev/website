
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        // Evita comportamento padrão
        e.preventDefault();

        // Captura o destino (ex: #sobre)
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Remove qualquer animação anterior
        document.querySelectorAll('.secao').forEach(sec => sec.classList.remove('animar-secao'));

        // Adiciona animação na seção clicada
        targetSection.classList.add('animar-secao');

        // Faz a rolagem suave
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Remove a classe depois da animação pra permitir repetir
        setTimeout(() => {
            targetSection.classList.remove('animar-secao');
        }, 1000);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const galeriaDesigns = document.querySelector('.galeria-designs');
    const designItems = document.querySelectorAll('.design-item');

    // Verifica se a galeria existe e se há itens
    if (galeriaDesigns && designItems.length > 0) {
        let currentIndex = 0;
        const totalItems = designItems.length;
        // Tempo em milissegundos (5000ms = 5 segundos)
        const delay = 5000;

        // Define a largura de um item mais a margem (para rolagem precisa)
        const itemWidth = designItems[0].offsetWidth + 24; // 24px é o gap definido no CSS (1.5rem)

        function nextSlide() {
            currentIndex++;

            // Se chegou ao final, volta para o primeiro
            if (currentIndex >= totalItems) {
                currentIndex = 0;
                // Para uma transição instantânea de volta ao início
                galeriaDesigns.scrollLeft = 0;
            } else {
                // Rola para a posição do próximo item
                galeriaDesigns.scrollLeft = currentIndex * itemWidth;
            }
        }

        // Inicia o carrossel automático
        let intervalId = setInterval(nextSlide, delay);

        // Opcional: Pausa o carrossel quando o usuário interage (hover)
        galeriaDesigns.addEventListener('mouseenter', () => {
            clearInterval(intervalId);
        });

        galeriaDesigns.addEventListener('mouseleave', () => {
            intervalId = setInterval(nextSlide, delay);
        });
    }
});
// --- EFEITOS DE FUNDO DINÂMICO ---

document.addEventListener('DOMContentLoaded', () => {
    // ... (Mantenha todo o seu código anterior aqui: carrossel e dark mode) ...

    const dynamicBackground = document.getElementById('dynamic-background');
    const body = document.body;

    // =========================================================
    // 1. EFEITO MOUSE MOVE (Gradiente Segue o Cursor)
    // =========================================================

    if (dynamicBackground) {
        body.addEventListener('mousemove', (e) => {
            // Obtém as coordenadas do mouse
            const x = e.clientX;
            const y = e.clientY;

            // Calcula a porcentagem da posição na tela
            const xPercent = (x / window.innerWidth) * 100;
            const yPercent = (y / window.innerHeight) * 100;

            // Altera a posição do gradiente de fundo
            dynamicBackground.style.background = `radial-gradient(
                circle at ${xPercent}% ${yPercent}%,
                ${body.classList.contains('dark-mode') ? '#0096c730' : '#0077b530'}, /* Cor adaptada ao modo */
                ${body.classList.contains('dark-mode') ? '#121212aa' : '#121212aa'} 60%,
                ${body.classList.contains('dark-mode') ? '#121212ff' : '#121212ff'} 100%
            )`;
        });
    }

    // =========================================================
    // 2. EFEITO CLIQUE (Ondas)
    // =========================================================

    body.addEventListener('click', (e) => {
        // Cria um novo elemento para a onda
        const ripple = document.createElement('div');
        ripple.classList.add('click-effect');

        // Calcula a posição do clique e define a onda para começar lá
        const size = Math.max(window.innerWidth, window.innerHeight);
        const radius = size / 20; // Tamanho inicial da onda

        ripple.style.width = ripple.style.height = `${radius}px`;
        ripple.style.left = `${e.clientX - radius / 2}px`;
        ripple.style.top = `${e.clientY - radius / 2}px`;

        // Adiciona a onda ao corpo
        body.appendChild(ripple);

        // Remove o elemento após a animação terminar para limpar o DOM
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});
