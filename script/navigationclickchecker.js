let navLinks = document.querySelectorAll('.navigation-links a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        let navCheck = document.getElementById('navigation-click-check');
        if (navCheck.checked) {
            navCheck.checked = false;
        }
    });
});