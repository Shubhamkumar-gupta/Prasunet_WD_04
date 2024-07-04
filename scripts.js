


document.addEventListener("DOMContentLoaded", function() {
    const textArray = ["a Web Developer", "a Designer", "an Innovator"];
    let textIndex = 0;
    let charIndex = 0;
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    const typewriterElement = document.getElementById("typewriter");

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typewriterElement.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typewriterElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, typingDelay);
        }
    }

    // Call the type function to start the typing effect
    type();

    

    // Highlight current section in the navigation
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("nav ul li a");

    function activateNavLink() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach((section, index) => {
            if (scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight) {
                navItems.forEach(item => item.classList.remove("active"));
                navItems[index].classList.add("active");
            }
        });
    }

    document.addEventListener("scroll", function() {
        activateNavLink();
    });

    // Change header style on scroll
    const header = document.querySelector("header");

    document.addEventListener("scroll", function() {
        header.classList.toggle("scrolled", window.scrollY > 0);
    });
});
