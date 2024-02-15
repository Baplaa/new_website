document.addEventListener('DOMContentLoaded', function () {
    updateContent();
});

function typeText(element, text) {
    var index = 0;

    function type() {
        var currentText = text.slice(0, ++index);
        element.innerHTML = currentText;

        if (index < text.length) {
            setTimeout(type, 15);
        }
    }

    type();
}

function updateContent() {
    var heading;
    var textToType;

    heading = document.getElementById('typing-effect-original');
    textToType = "Hello! I'm <span class='strong-highlight'>Tristan Lingat</span>.";

    typeText(heading, textToType);

    var navLinks = document.querySelectorAll('#nav-links a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 682) {
                responsiveNav();
            }
        });
    });
}

const nav = document.querySelector('nav');
const responsiveNav = () => {
    nav.dataset.transitionable = "true";
    nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
}

window.matchMedia("(max-width: 682px)").onchange = e => {
    nav.dataset.transitionable = "false";
    nav.dataset.toggled = "false";
}