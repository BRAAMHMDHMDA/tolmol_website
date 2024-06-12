// Animate On Scroll
window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader-js");
    preloader.classList.add("fade-out");

    setTimeout(() => {
        preloader.style.display = "none";
        AOS.init();
    }, 600)

});

// Header Sticky

const navbarBg = () => {
    const navbar = document.querySelector(".navbar-js");
    window.addEventListener("scroll", function() {
        if (this.scrollY > 0) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });
}

navbarBg();

// Navbar 

const navigation = () => {
    const navToggler = document.querySelector(".navbar-toggler-js")
    const links = document.querySelector(".links-js")
    const navItems = document.querySelectorAll("li")

    const navToggle = () => {
        console.log('toggle');
        links.classList.toggle("open");
        navToggler.classList.toggle("active");
    }
    navToggler.addEventListener("click", navToggle);

    navItems.forEach((li) => {
        li.querySelector("a").addEventListener("click", () => {
            if (window.innerWidth <= 767) {
                navToggle()
            }
        })
    })
}
navigation()