const passwordField = document.getElementById('password'); //Seleciona o campo de entrada de senha
const togglePasswordButton = document.getElementById('togglePassword'); //seleciona a div 
const eyeIcon = document.getElementById('eyeIcon'); //seleciona a imagen

//funcao evento  click
togglePasswordButton.addEventListener('click', function () { //funcao evento  click
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password'; //verifica qual é o atributo type atual do campo de senha, se for password define como texto se não for password define como password 
    passwordField.setAttribute('type', type);//Este comando altera o atributo type 

    // Toggle the eye icon
    const icon = type === 'password' ? './img/close-eye.png' : './img/eye.png';//Se type for 'password', ele seleciona a imagem de olho fechado se for text seleciona imagen de olho aberto
    eyeIcon.setAttribute('src', icon);//Esta linha altera o atributo src 
});
