document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.dropdown-menu').addEventListener('click', function() {
        var dropdown = document.querySelector('.mobile-dropdown');
        dropdown.classList.toggle('show');
    });

    document.querySelector('.graphic-link').addEventListener('click', function() {
        var graphics = document.querySelector('.graphics');
        graphics.style.display = 'block';

        var aboutBody = document.querySelector('.about-body');
        aboutBody.style.filter = 'blur(2px)';
    })

    document.querySelector('.close-btn').addEventListener('click', function() {
        var graphics = document.querySelector('.graphics');
        graphics.style.display = 'none';

        var aboutBody = document.querySelector('.about-body');
        aboutBody.style.filter = 'none';
    })
});