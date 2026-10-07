function createCarousel(carouselId, images) {
    const carousel = document.getElementById(carouselId);

    if (!carousel) {
        console.error("Carousel tidak ditemukan:", carouselId);
        return;
    }

    let items = "";
    let indicators = "";

    images.forEach((image, index) => {

        items += `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
                <img src="${image.src}"
                     class="d-block w-100"
                     alt="${image.alt}">
            </div>
        `;

        indicators += `
            <button type="button"
                    data-bs-target="#${carouselId}"
                    data-bs-slide-to="${index}"
                    class="${index === 0 ? "active" : ""}"
                    ${index === 0 ? 'aria-current="true"' : ""}
                    aria-label="Slide ${index + 1}">
            </button>
        `;
    });

    carousel.innerHTML = `
        <div class="carousel-inner">
            ${items}
        </div>

        <div class="carousel-indicators">
            ${indicators}
        </div>

        <button class="carousel-control-prev"
                type="button"
                data-bs-target="#${carouselId}"
                data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next"
                type="button"
                data-bs-target="#${carouselId}"
                data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
        </button>
    `;
}