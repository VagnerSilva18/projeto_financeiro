const passwordField = document.getElementById('password'); //Seleciona o campo de entrada de senha
const togglePasswordButton = document.getElementById('togglePassword'); //Seleciona a div
const eyeIcon = document.getElementById('eyeIcon'); //Seleciona a imagem

// Função para o evento de clique
togglePasswordButton.addEventListener('click', function () {
    // Verifica o tipo atual do campo de senha
    if (passwordField.getAttribute('type') === 'password') {
        passwordField.setAttribute('type', 'text'); // Altera o tipo para 'text'
        eyeIcon.setAttribute('src', './img/eye.png'); // Altera a imagem para o olho aberto
    } else {
        passwordField.setAttribute('type', 'password'); // Altera o tipo para 'password'
        eyeIcon.setAttribute('src', './img/close-eye.png'); // Altera a imagem para o olho fechado
    }
});
