const organizationName = "Amigos do Planeta";
const emailContact = "contato@amigosdoplaneta.org";
const phoneContact = "(11) 98765-4321";
const cepContact = "01001-000";


const toggleMobileMenu = () => {
    const nav = document.getElementById('main-nav');
    if (nav) {
        nav.classList.toggle('mobile-menu-closed'); 
    }
};


const loginModal = document.getElementById('login-modal');
const openModalButton = document.getElementById('open-login-modal');
const closeModalButton = document.getElementById('close-modal');
const loginForm = document.getElementById('login-form');


const openLoginModal = () => {
    if (loginModal) {
        loginModal.classList.add('open');
        document.body.style.overflow = 'hidden'; 
        document.getElementById('username')?.focus();
    }
};


const closeLoginModal = () => {
    if (loginModal) {
        loginModal.classList.remove('open');
        document.body.style.overflow = ''; 
        const oldMessage = loginModal.querySelector('.message-box');
        if (oldMessage) oldMessage.remove();
        if (loginForm) loginForm.reset();
    }
};

const handleLoginSubmit = (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    
    const oldMessage = loginModal.querySelector('.message-box');
    if (oldMessage) oldMessage.remove();

    const messageDiv = document.createElement('div');
    
    const isAuthenticated = true; 
    const isAdministrator = username.toLowerCase().includes('admin'); 

    if (isAuthenticated) {
        messageDiv.className = 'message-box success';
        messageDiv.textContent = `✅ Login de ${isAdministrator ? 'Administrador' : 'Colaborador'} bem-sucedido (Simulado)!`;
    } else {
         messageDiv.className = 'message-box error';
        messageDiv.textContent = '❌ Usuário ou senha inválidos.';
    }
    
    const content = loginModal.querySelector('.modal-content');
    content.appendChild(messageDiv);
    
    if (isAuthenticated) {
        setTimeout(() => {
            closeLoginModal();
        }, 2000);
    }
};

const attachMasks = () => {
    const cpfInput = document.getElementById('cpf');
    const phoneInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    if (cpfInput) cpfInput.addEventListener('input', (e) => maskInput(e, 'cpf'));
    if (phoneInput) phoneInput.addEventListener('input', (e) => maskInput(e, 'telefone'));
    if (cepInput) cepInput.addEventListener('input', (e) => maskInput(e, 'cep'));
};

const maskInput = (event, type) => {
    let value = event.target.value.replace(/\D/g, ''); 

    let maskedValue = '';
    let pattern = '';

    switch (type) {
        case 'cpf':
            if (value.length > 11) value = value.substring(0, 11);
            pattern = '###.###.###-##';
            break;
        case 'telefone':
            if (value.length > 11) value = value.substring(0, 11);
            pattern = value.length > 10 ? '(##) #####-####' : '(##) ####-####';
            break;
        case 'cep':
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


const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const messageDiv = document.getElementById('form-message');

    if (!form.checkValidity()) {
        messageDiv.className = 'message-box error';
        messageDiv.textContent = 'Erro de validação: Por favor, preencha todos os campos obrigatórios e corrija os formatos inválidos.';
        messageDiv.classList.remove('hidden');
        return;
    }

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    console.log('Dados do Formulário Coletados:', data);

    messageDiv.className = 'message-box success';
    messageDiv.textContent = '✅ Cadastro realizado com sucesso! Agradecemos seu interesse em ser um voluntário.';
    messageDiv.classList.remove('hidden');
    
    setTimeout(() => {
        form.reset();
        messageDiv.classList.add('hidden');
    }, 3000);
};



document.addEventListener('DOMContentLoaded', () => {
    const mobileButton = document.querySelector('.mobile-menu-button');
    if (mobileButton) {
        mobileButton.addEventListener('click', toggleMobileMenu);
    }
    
    const form = document.getElementById('volunteer-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
        attachMasks();
    }

    if (openModalButton) {
        openModalButton.addEventListener('click', openLoginModal);
    }
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeLoginModal);
    }
    if (loginModal) {
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
