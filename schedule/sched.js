document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.multi-1').addEventListener('click', function() {
        document.querySelector('.multi-A').style.display = 'block'
        document.querySelector('.multi-A').scrollIntoView({
            behavior: 'smooth'
        });
    })

    document.querySelector('.multi-2').addEventListener('click', function() {
        document.querySelector('.multi-B').style.display = 'block'
        document.querySelector('.multi-B').scrollIntoView({
            behavior: 'smooth'
        });
    })

    document.querySelector('.multi-3').addEventListener('click', function() {
        document.querySelector('.multi-C').style.display = 'block'
        document.querySelector('.multi-C').scrollIntoView({
            behavior: 'smooth'
        });
    })

    document.querySelector('.multi-4').addEventListener('click', function() {
        document.querySelector('.multi-D').style.display = 'block'
        document.querySelector('.multi-D').scrollIntoView({
            behavior: 'smooth'
        });
    })

    document.querySelector('.multi-5').addEventListener('click', function() {
        document.querySelector('.multi-E').style.display = 'block'
    })

    document.querySelector('.multi-A').addEventListener('click', function() {
        document.querySelector('.multi-A').style.display = 'none'
    })

    document.querySelector('.multi-A').addEventListener('click', function() {
        document.querySelector('.multi-A').style.display = 'none'
    })

    document.querySelector('.multi-B').addEventListener('click', function() {
        document.querySelector('.multi-B').style.display = 'none'
    })

    document.querySelector('.multi-C').addEventListener('click', function() {
        document.querySelector('.multi-C').style.display = 'none'
    })

    document.querySelector('.multi-D').addEventListener('click', function() {
        document.querySelector('.multi-D').style.display = 'none'
    })

    document.querySelector('.multi-E').addEventListener('click', function() {
        document.querySelector('.multi-E').style.display = 'none'
    })
})

window.onload = function() {
    document.getElementById("target-section").scrollIntoView({
        behavior: 'smooth'
    });
};