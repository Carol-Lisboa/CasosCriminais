const toni = document.querySelector('.toni');

window.addEventListener('scroll', function () {
    toni.classList.toggle('ramos', window.scrollY > 0);
})
