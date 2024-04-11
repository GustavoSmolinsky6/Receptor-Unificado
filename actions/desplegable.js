document.addEventListener("DOMContentLoaded", function() {
    var navList = document.querySelectorAll('.nav li');
    var navLinks = document.querySelectorAll('.nav li > a');
    var navLinkButtons = document.querySelectorAll('.nav-link');

    // Agrega un manejador de eventos a cada enlace de navegación
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.stopPropagation(); // Detiene la propagación del evento click para evitar que se cierre la lista al hacer clic en el enlace
            var parentLi = this.parentElement;
            var siblingUl = parentLi.querySelector('ul');
            siblingUl.classList.toggle('open'); // Alterna la clase 'open' en la lista desplegable para mostrarla o ocultarla
        });
    });

    // Agrega un manejador de eventos para los clics en enlaces con la clase .nav-link
    navLinkButtons.forEach(function(navLinkButton) {
        navLinkButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Detiene la propagación del evento click para evitar que se cierre la lista al hacer clic en el enlace
            var siblingUl = this.nextElementSibling; // Obtiene el siguiente hermano del enlace (que es la lista desplegable)
            siblingUl.classList.toggle('open'); // Alterna la clase 'open' en la lista desplegable para mostrarla o ocultarla
        });
    });

    // Agrega un manejador de eventos al documento para cerrar la lista desplegable si se hace clic fuera de ella
    document.addEventListener('click', function(event) {
        navList.forEach(function(navItem) {
            var siblingUl = navItem.querySelector('ul');
            if (siblingUl && siblingUl.classList.contains('open') && !navItem.contains(event.target)) {
                siblingUl.classList.remove('open');
            }
        });
    });
});
