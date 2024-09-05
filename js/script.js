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


/*

const menu = document.querySelector('.nav-menu');
const botaoMenu = document.getElementById('btn-menu');

// Função para alternar a abertura/fechamento do menu
botaoMenu.addEventListener('click', () => {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    botaoMenu.textContent = 'Abrir Menu';
  } else {
    menu.classList.add('open');
    botaoMenu.textContent = 'Fechar Menu';
  }
});

*/


/*
//abrir panina principal
document.getElementById('btnLogin').addEventListener('click', function() {
    window.location.href = './paginas/panel.html'; // Caminho para a página que será aberta
});
*/
