// Função para aumentar a quantidade
function increaseQuantity(quantityId) {
    const input = document.getElementById(quantityId);
    if (input.value < 99) {
        input.value = parseInt(input.value) + 1;
        updateTotalPrice(quantityId);
    }
}

// Função para diminuir a quantidade
function decreaseQuantity(quantityId) {
    const input = document.getElementById(quantityId);
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
        updateTotalPrice(quantityId);
    }
}

// Função para atualizar o preço total
function updateTotalPrice(quantityId) {
    const input = document.getElementById(quantityId);
    const price = input.closest('.product-info').querySelector('.price').getAttribute('data-price');
    const totalPrice = input.closest('.product-info').querySelector('.total-price span');
    totalPrice.textContent = (price * input.value).toFixed(2);
}

// Função para adicionar ao carrinho
function addToCart(productName, price, quantityId) {
    const quantity = document.getElementById(quantityId).value;
    const total = (price * quantity).toFixed(2);

    // Exibe uma mensagem de confirmação
    alert(`Adicionado ao carrinho:\nProduto: ${productName}\nQuantidade: ${quantity}\nTotal: R$ ${total}`);

    // Aqui você pode adicionar a lógica para enviar os dados para o backend ou gerar um PDF
    generatePDF(productName, quantity, total);
}

// Função para gerar um PDF (simulação)
function generatePDF(productName, quantity, total) {
    const content = `
        Nome do Produto: ${productName}
        Quantidade: ${quantity}
        Total: R$ ${total}
    `;
    console.log("PDF gerado com o seguinte conteúdo:\n", content);
    // Aqui você pode integrar uma biblioteca como jsPDF para gerar o PDF real
}

// Função para rolar as categorias
function scrollCategories(scrollAmount) {
    const categories = document.querySelector('.categories');
    categories.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Função de pesquisa
function searchProducts() {
    const term = document.getElementById('search').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productName = card.querySelector('h2').textContent.toLowerCase();
        if (productName.includes(term)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Função para abrir a popup de exclusão de dados
function openDeleteDataPopup() {
    const popup = document.getElementById('delete-data-popup');
    popup.style.display = 'flex';
}

// Função para fechar a popup
function closePopup() {
    const popup = document.getElementById('delete-data-popup');
    popup.style.display = 'none';
}

// Função para lidar com o login
function handleLogin() {
    const loginMethod = prompt("Escolha o método de login:\n1 - Facebook\n2 - Google");

    if (loginMethod === "1") {
        loginWithFacebook();
    } else if (loginMethod === "2") {
        loginWithGoogle();
    } else {
        alert("Opção inválida. Por favor, tente novamente.");
    }
}

// Login com Facebook (simulação)
function loginWithFacebook() {
    alert("Login com Facebook selecionado.");
}

// Login com Google (simulação)
function loginWithGoogle() {
    alert("Login com Google selecionado.");
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona eventos aos botões de quantidade
    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', () => {
            const quantityId = button.closest('.quantity-control').querySelector('input').id;
            increaseQuantity(quantityId);
        });
    });

    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', () => {
            const quantityId = button.closest('.quantity-control').querySelector('input').id;
            decreaseQuantity(quantityId);
        });
    });

    // Adiciona evento ao botão de pesquisa
    document.querySelector('.search-bar i').addEventListener('click', searchProducts);

    // Adiciona evento ao botão de exclusão de dados
    document.querySelector('.delete-data-button').addEventListener('click', openDeleteDataPopup);

    // Adiciona evento ao botão de fechar popup
    document.querySelector('.popup-content .close').addEventListener('click', closePopup);
});