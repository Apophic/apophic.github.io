// Small animation to make header text "bounce"
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header h1");
    header.classList.add("bounce");

    setTimeout(() => {
        header.classList.remove("bounce");
    }, 3000);
});
