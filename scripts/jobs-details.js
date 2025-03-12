const toggleInput = document.getElementById("toggle");
const darkModeBtn = document.getElementById("dark-mode-btn");
const jobswrapper = document.getElementById("jobs-wrapper");
const body = document.body;
const sections = document.querySelectorAll("section");

if (localStorage.getItem("dark-mode") === "enabled") {
    activarModoOscuro();
}

toggleInput.addEventListener("change", () => {
    if (toggleInput.checked) {
        activarModoOscuro();
    } else {
        desactivarModoOscuro();
    }
});



// Función para activar el modo oscuro
function activarModoOscuro() {
    body.classList.add("dark-mode");
    jobswrapper.classList.add("dark-mode");
    sections.forEach((section, index) => {
        if (!section.classList.contains("hero") && !section.classList.contains("companies")) {
            section.classList.add("dark-mode");
            if (index % 2 != 0) {
                section.classList.add("light");
            }
        }

    });

    darkModeBtn.classList.add("active");
    darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem("dark-mode", "enabled");
}

// Función para desactivar el modo oscuro
function desactivarModoOscuro() {
    body.classList.remove("dark-mode");
    jobswrapper.classList.remove("dark-mode");
    sections.forEach((section) => {
        section.classList.remove("dark-mode", "light");
    });
    darkModeBtn.classList.remove("active");
    darkModeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("dark-mode", "disabled");
}

