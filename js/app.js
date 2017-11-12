var menuButton = document.getElementById('menu-bar');
menuButton.addEventListener('click', showMenu);

 function showMenu() {
    var menu = document.getElementById('option-menu');

    if(menu.classList.contains('disabled-menu')) {
       // console.log('mostrar'); 
        menu.classList.remove('disabled-menu');
        menu.classList.add('enabled-menu');
    } else {
       // console.log('ocultar');
        menu.classList.remove('enabled-menu');
        menu.classList.add('disabled-menu');
    }
};

