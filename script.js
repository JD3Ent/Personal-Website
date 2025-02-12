document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

/* Dark Mode Styling */
const darkMode = document.createElement("style");
darkMode.innerHTML = `
.dark-mode {
    background: #222;
    color: white;
}

.dark-mode section {
    background: #333;
}

.dark-mode h2 {
    color: lightblue;
}

.dark-mode nav ul li a {
    color: cyan;
}

.dark-mode .btn {
    background: cyan;
    color: black;
}
`;
document.head.appendChild(darkMode);