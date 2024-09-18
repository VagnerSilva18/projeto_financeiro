const menu = document.querySelector('.nav-menu');
const botaoMenu = document.getElementById('btn-menu');
const iconeMenu = document.getElementById('icon-menu');

// Função para alternar a abertura/fechamento do menu usando toggle
botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('open'); // Alterna entre adicionar/remover a classe 'open'

  // Verifica o estado do menu e altera a imagem do ícone
  if (menu.classList.contains('open')) {
    iconeMenu.src = '../img/close.png'; // Altera para ícone de fechar
  } else {
    iconeMenu.src = '../img/open.png'; // Altera para ícone de abrir
  }
});
//********************************************************************


document.querySelector('.img-refresh').addEventListener('click', () => {
  // Força o recarregamento da página ignorando o cache
  window.location.reload(true);
});
//********************************************************************








/*
const menu = document.querySelector('.nav-menu');
const botaoMenu = document.getElementById('btn-menu');

// Função para alternar a abertura/fechamento do menu usando toggle
botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('open'); // Adiciona ou remove a classe 'open'

    // Alterna o texto do botão baseado no estado do menu
    if (menu.classList.contains('open')) {
        botaoMenu.textContent = 'Fechar Menu';
    } else {
        botaoMenu.textContent = 'Abrir Menu';
    }
});
*/