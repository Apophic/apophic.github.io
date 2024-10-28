// Small animation to make header text "bounce"
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header h1");
    header.classList.add("bounce");

    setTimeout(() => {
        header.classList.remove("bounce");
    }, 3000);
});

// Function to open the lightbox with the clicked image
function openLightbox(imgElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    // Set the source of the lightbox image to the clicked image's source
    lightboxImg.src = imgElement.src;

    // Display the lightbox
    lightbox.style.display = "flex";
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}
