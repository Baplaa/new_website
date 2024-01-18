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

var originalContent = `
    <button id="prevButton" class="btn-style" onclick="prevSlide()">&#60;</button>
    <div class="about-section">
        <div>
            <h2 id="typing-effect-original"></h2>
            <p>
                <span class="strong-highlight">Results-driven</span>,
                <span class="strong-highlight">passionate</span>, and
                <span class="strong-highlight">proficient</span>
                in any IT role tasks. 
                <br><br>
                I'm based in 
                <span class="strong-highlight">Richmond, BC</span>!
            </p>
            <h3>Get in touch with me:</h3>
        </div>
        <div id="about-contact">
            <i class="devicon-linkedin-plain colored linkedin"></i>
            <i class="material-icons mail">mail</i>
            <address>
                <a href="mailto:tristanlingat@gmail.com">tristanlingat@gmail.com</a>
            </address>
        </div>
    </div>
    <div class="about-image">
        <img src="./templates/img/chibi.png" class="about-png">
    </div>
    <button id="toggleButton" class="btn-style" onclick="nextSlide()">&#62;</button>
`;

var nextSlideContent = `
<button id="prevButton" class="btn-style" onclick="prevSlide()">&#60;</button>
    <div class="about-section">
        <div>
            <h2 id="typing-effect-next"></h2>
            <p>
                I am a Fall 2023 Graduate from the 
                <span class="strong-highlight">British Columbia Institute of Technology (BCIT)</span>
                with a 
                <span class="strong-highlight">diploma</span> 
                in the
                <span class="strong-highlight">Computer Information Technology (CIT)</span> program.
                <br><br>
                I've substantially grown my loving passion for managing hardware and software from youth 
                through 
                <span class="strong-highlight">CIT</span> and my 
                <span class="strong-highlight">Co-op experience</span> at 
                <span class="strong-highlight">General Fusion</span>. 
                As such, my accelerated learning has allowed me to be 
                <span class="strong-highlight">reliable</span>,
                <span class="strong-highlight">adaptable</span>, and
                <span class="strong-highlight">always hungry to learn more</span>.
            </p>
        </div>
    </div>
    <div class="about-image">
        <img src="./templates/img/chibi.png" class="about-png">
    </div>
    <button id="toggleButton" class="btn-style" onclick="nextSlide()">&#62;</button>
`;

var currentIndex = 0;
var slideContents = [originalContent, nextSlideContent];

function prevSlide() {
    currentIndex = (currentIndex - 1 + slideContents.length) % slideContents.length;
    updateContent();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideContents.length;
    updateContent();
}

function updateContent() {
    var aboutContent = document.getElementById('about-content');
    aboutContent.innerHTML = slideContents[currentIndex];

    var heading;
    var textToType;
    if (currentIndex === 0) {
        heading = document.getElementById('typing-effect-original');
        textToType = "Hello! I'm <span class='strong-highlight'>Tristan Lingat</span>.";
    } else {
        heading = document.getElementById('typing-effect-next');
        textToType = "About <span class='strong-highlight'>Me</span>!";
    }

    if (heading) {
        typeText(heading, textToType);
    }
}

/* Mobile Nav */

const nav = document.querySelector('nav');
const responsiveNav = () => {
    nav.dataset.transitionable = "true";
    nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
}

window.matchMedia("(max-width: 682px)").onchange = e => {
    nav.dataset.transitionable = "false";
    nav.dataset.toggled = "false";
}