// ===== FUNCIONALIDADE GERAL =====
document.addEventListener('DOMContentLoaded', function() {
    // Alternar tema claro/escuro
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Botões de produto
    setupProductButtons();
    
    // Animação do texto "Nossa Loja"
    setupSineWaveAnimation();
    
    // Controle de categorias no mobile
    setupMobileCategories();
});

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
        document.querySelector('.theme-toggle').innerHTML = '<i class="fas fa-moon"></i> Tema Escuro';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
        document.querySelector('.theme-toggle').innerHTML = '<i class="fas fa-sun"></i> Tema Claro';
    }
}

function setupProductButtons() {
    // Botão PDF
    const pdfButtons = document.querySelectorAll('.btn-pdf');
    pdfButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Produto adicionado ao seu PDF!');
        });
    });

    // Lista de Desejos
    const wishlistButtons = document.querySelectorAll('.btn-wishlist');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-check"></i> Na Lista';
            this.style.backgroundColor = '#16a085';
        });
    });

    // Botão Comprar
    const buyButtons = document.querySelectorAll('.btn-buy');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.product-info').querySelector('h1').textContent;
            window.location.href = `https://wa.me/5511982551647?text=Gostaria%20de%20comprar%20o%20produto:%20${encodeURIComponent(productName)}`;
        });
    });
}

function setupSineWaveAnimation() {
    const textOptions = [
        ["ALGUIDARES", "VELAS PALITOS", "QUARTINHAS", "VELAS 7 DIAS", "TINTURAS MAGIAS", "BANHOS DE ERVAS", "TRIDENTES", "BARALHOS DIVERSOS"],
        ["NOSSA LOJA", "NOSSA LOJA", "NOSSA LOJA", "NOSSA LOJA", "NOSSA LOJA", "NOSSA LOJA", "NOSSA LOJA", "NOSSA LOJA"]
    ];

    function updateAnimatedText() {
        const container = document.getElementById('animated-text-container');
        const selectedOption = Math.random() > 0.5 ? textOptions[0] : textOptions[1];
        
        container.innerHTML = '';
        
        for (let i = 0; i < 2; i++) {
            selectedOption.forEach(text => {
                const textElement = document.createElement('div');
                textElement.className = 'sine-wave-text';
                textElement.textContent = text;
                container.appendChild(textElement);
            });
        }
    }

    updateAnimatedText();
    setInterval(updateAnimatedText, 15000);
}

function setupMobileCategories() {
    if (window.innerWidth <= 768) {
        const selector = document.getElementById('category-selector');
        if (selector) {
            selector.addEventListener('change', function() {
                const selectedValue = this.value;
                const productSections = document.querySelectorAll('.product-section');
                
                productSections.forEach(section => {
                    section.style.display = 'none';
                });
                
                if (selectedValue) {
                    document.getElementById(`${selectedValue}-section`).style.display = 'block';
                }
            });
        }
    }
}