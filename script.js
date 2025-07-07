// Dark mode toggle feature
document.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement("button");
    button.textContent = "Toggle Dark Mode";
    button.style.margin = "10px";
    button.style.padding = "10px";
    document.body.prepend(button);

    button.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
