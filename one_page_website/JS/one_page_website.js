// lightbox.js
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".photo img");
    let lightbox, lightboxImg, lightboxCaption;

    function createLightbox() {
        lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightboxImg = document.createElement("img");
        lightboxCaption = document.createElement("p");
        lightbox.appendChild(lightboxImg);
        lightbox.appendChild(lightboxCaption);
        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", function (e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    function openLightbox(src, caption) {
        lightboxImg.src = src;
        lightboxCaption.textContent = caption;
        lightbox.style.display = "flex";
    }

    function closeLightbox() {
        lightbox.style.display = "none";
    }

    createLightbox();

    images.forEach((img) => {
        img.addEventListener("click", function () {
            const src = this.src;
            const caption = this.nextElementSibling.querySelector("p").textContent;
            openLightbox(src, caption);
        });
    });
});