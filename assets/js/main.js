/* --- Menu aparece e esconde --- */
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

    /* --- aparecer --- */
    toggleMenu.addEventListener('click', ()=>{
        navMenu.classList.toggle('show')
    })

    /* --- Desaparecer --- */
    closeMenu.addEventListener('click', ()=>{
        navMenu.classList.remove('show')
    })

    /* --- Ativar e remover menu --- */
    const navLink = document.querySelectorAll('.nav_link')

    function linkAction(){
        //Active Link
        navLink.forEach(n=> n.classList.remove('active'))
        this.classList.add('active')

        //Remove menu mobile
        navMenu.classList.remove('show')
    }

    navLink.forEach(n => n.addEventListener('click', linkAction))