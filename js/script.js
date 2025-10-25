// --- Variáveis Globais de Configuração (Podem ser movidas para um config.js em um projeto real)
const organizationName = "Amigos do Planeta";
const emailContact = "contato@amigosdoplaneta.org";
const phoneContact = "(11) 98765-4321";
const cepContact = "01001-000";

// =========================================================
// LÓGICA DE NAVEGAÇÃO E UTILS
// =========================================================

/**
 * Função para alternar a visibilidade do menu de navegação no mobile.
 */
const toggleMobileMenu = () => {
    const nav = document.getElementById('main-nav');
    if (nav) {
        nav.classList.toggle('mobile-menu-closed'); 
    }
};

// =========================================================
// LÓGICA DO MODAL DE LOGIN
// =========================================================

const loginModal = document.getElementById('login-modal');
const openModalButton = document.getElementById('open-login-modal');
const closeModalButton = document.getElementById('close-modal');
const loginForm = document.getElementById('login-form');


/**
 * Abre o modal de login.
 */
const openLoginModal = () => {
    if (loginModal) {
        loginModal.classList.add('open');
        document.body.style.overflow = 'hidden'; // Evita scroll no corpo
        // Foca no primeiro campo para acessibilidade
        document.getElementById('username')?.focus();
    }
};

/**
 * Fecha o modal de login.
 */
const closeLoginModal = () => {
    if (loginModal) {
        loginModal.classList.remove('open');
        document.body.style.overflow = ''; // Restaura scroll
        // Remove mensagens de sucesso/erro anteriores
        const oldMessage = loginModal.querySelector('.message-box');
        if (oldMessage) oldMessage.remove();
        if (loginForm) loginForm.reset();
    }
};

/**
 * Simula a submissão do formulário de login.
 * @param {Event} event - O evento de submissão.
 */
const handleLoginSubmit = (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    
    // Remove mensagens anteriores
    const oldMessage = loginModal.querySelector('.message-box');
    if (oldMessage) oldMessage.remove();

    const messageDiv = document.createElement('div');
    
    // Simulação de autenticação (Pode ser ajustado para simular erro)
    const isAuthenticated = true; // Sempre simula sucesso
    const isAdministrator = username.toLowerCase().includes('admin'); 

    if (isAuthenticated) {
        messageDiv.className = 'message-box success';
        messageDiv.textContent = `✅ Login de ${isAdministrator ? 'Administrador' : 'Colaborador'} bem-sucedido (Simulado)!`;
    } else {
         messageDiv.className = 'message-box error';
        messageDiv.textContent = '❌ Usuário ou senha inválidos.';
    }
    
    // Exibe a mensagem no modal
    const content = loginModal.querySelector('.modal-content');
    content.appendChild(messageDiv);
    
    // Fecha o modal após 2 segundos se for sucesso
    if (isAuthenticated) {
        setTimeout(() => {
            closeLoginModal();
        }, 2000);
    }
};


// =========================================================
// LÓGICA DO FORMULÁRIO DE CADASTRO (MÁSCARAS E SUBMISSÃO)
// =========================================================

/**
 * Aplica as máscaras de input aos campos correspondentes.
 */
const attachMasks = () => {
    const cpfInput = document.getElementById('cpf');
    const phoneInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    if (cpfInput) cpfInput.addEventListener('input', (e) => maskInput(e, 'cpf'));
    if (phoneInput) phoneInput.addEventListener('input', (e) => maskInput(e, 'telefone'));
    if (cepInput) cepInput.addEventListener('input', (e) => maskInput(e, 'cep'));
};

/**
 * Função genérica para aplicação de máscaras.
 * @param {Event} event - O evento de input.
 * @param {string} type - O tipo de máscara a aplicar.
 */
const maskInput = (event, type) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove todos os não-dígitos

    let maskedValue = '';
    let pattern = '';

    switch (type) {
        case 'cpf':
            // Máscara: 000.000.000-00
            if (value.length > 11) value = value.substring(0, 11);
            pattern = '###.###.###-##';
            break;
        case 'telefone':
            // Máscara: (99) 99999-9999 (considerando 9º dígito)
            if (value.length > 11) value = value.substring(0, 11);
            pattern = value.length > 10 ? '(##) #####-####' : '(##) ####-####';
            break;
        case 'cep':
            // Máscara: 00000-000
            if (value.length > 8) value = value.substring(0, 8);
            pattern = '#####-###';
            break;
        default:
            return;
    }

    let i = 0;
    let j = 0;
    while (i < value.length && j < pattern.length) {
        if (pattern[j] === '#') {
            maskedValue += value[i];
            i++;
        } else {
            maskedValue += pattern[j];
        }
        j++;
    }
    
    event.target.value = maskedValue;
};

/**
 * Manipula a submissão do formulário (executado apenas em cadastro.html).
 * @param {Event} event - O evento de submissão.
 */
const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const messageDiv = document.getElementById('form-message');

    // 1. Verifica se a validação nativa foi bem-sucedida (inclui required e pattern)
    if (!form.checkValidity()) {
        messageDiv.className = 'message-box error';
        messageDiv.textContent = 'Erro de validação: Por favor, preencha todos os campos obrigatórios e corrija os formatos inválidos.';
        messageDiv.classList.remove('hidden');
        return;
    }

    // 2. Coleta e processa os dados (simulação de envio)
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    console.log('Dados do Formulário Coletados:', data);

    // 3. Simulação de sucesso
    messageDiv.className = 'message-box success';
    messageDiv.textContent = '✅ Cadastro realizado com sucesso! Agradecemos seu interesse em ser um voluntário.';
    messageDiv.classList.remove('hidden');
    
    // 4. Limpa o formulário após 3 segundos
    setTimeout(() => {
        form.reset();
        messageDiv.classList.add('hidden');
    }, 3000);
};

// =========================================================
// INICIALIZAÇÃO
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    // Adiciona o listener para o toggle do menu em todas as páginas
    const mobileButton = document.querySelector('.mobile-menu-button');
    if (mobileButton) {
        mobileButton.addEventListener('click', toggleMobileMenu);
    }
    
    // Se estivermos na página de cadastro, anexa o handler de submissão e as máscaras
    const form = document.getElementById('volunteer-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
        attachMasks();
    }

    // Adiciona os listeners do modal de Login em todas as páginas
    if (openModalButton) {
        openModalButton.addEventListener('click', openLoginModal);
    }
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeLoginModal);
    }
    if (loginModal) {
        // Fechar ao clicar fora do conteúdo
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                closeLoginModal();
            }
        });
    }
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginSubmit);
    }
});
