// Style Switcher
const styleSwitcherToggle = () => {
    const styleSwitcher = document.querySelector('.style-switcher-js');
    const styleSwitcherToggler = document.querySelector('.style-switcher-toggler-js');

    styleSwitcherToggler.addEventListener("click", function() {
        styleSwitcher.classList.toggle("open");
        this.querySelector("i").classList.toggle("fa-times")
        this.querySelector("i").classList.toggle("fa-cog")
    })
}
styleSwitcherToggle();


//--------------------------------------------


// Theme Color
const themeColor = () => {
    const hueSlider = document.querySelector(".hue-slider-js");
    const html = document.querySelector("html");

    const setHue = (value) => {
        html.style.setProperty("--hue", value);
        document.querySelector(".hue-js").innerHTML = value;
    }

    hueSlider.addEventListener("input", function() {
        setHue(this.value);
        // Save Color in Local Storage
        localStorage.setItem("--hue", this.value);
    })

    const slider = (value) => {
        hueSlider.value = value
    }

    // load user preference from browser
    if (localStorage.getItem("--hue") !== null) {
        setHue(localStorage.getItem("--hue"));
        slider(localStorage.getItem("--hue"));
    } else {
        const hue = getComputedStyle(html).getPropertyValue("--hue");
        setHue(hue);
        slider(hue.split(" ").join(""));
    }

}
themeColor();

//--------------------------------------------


// light & dark toggle
const themeLightDark = () => {
    const darkModeCheckbox = document.querySelector(".dark-mode-js");
    const themeMode = () => {
        if (localStorage.getItem("theme-dark") === "false") {
            document.body.classList.remove("dark")
        } else {
            document.body.classList.add("dark")
        }
    }

    darkModeCheckbox.addEventListener("click", function() {
        // save user's preference in local storage
        localStorage.setItem("theme-dark", this.checked)
        themeMode();
    })
    if (localStorage.getItem("theme-dark") !== null) {
        themeMode();
    }
    if (document.body.classList.contains("dark")) {
        darkModeCheckbox.checked = true;
    }
}
themeLightDark();