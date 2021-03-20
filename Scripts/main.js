function load () {
    const btnMenu = document.getElementById('btn-menu');
    const navMenu = document.getElementById('nav-menu');

    btnMenu.addEventListener('click', function () {
        if (navMenu.style.display === 'block'){
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    });
};

window.onload = load;