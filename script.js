document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

/* Dark Mode */
.dark-mode {
    background: linear-gradient(135deg, #000000, #222222);
    color: white;
}

.dark-mode .card {
    background: rgba(50, 50, 50, 0.7);
}

.dark-mode .button {
    background: silver;
    color: black;
}

.dark-mode #themeToggle {
    background: gray;
}