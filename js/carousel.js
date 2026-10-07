function createCarousel(id, images) {
    const carousel = document.getElementById(id);

    carousel.innerHTML = `
        <div class="carousel-inner">
            ${images.map((img, index) => `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${img.src}" 
                         class="d-block w-100" 
                         alt="${img.alt}">
                </div>
            `).join('')}
        </div>

        <!-- Indikator -->
        <div class="carousel-indicators">
            ${images.map((img, index) => `
                <button type="button"
                        data-bs-target="#${id}"
                        data-bs-slide-to="${index}"
                        class="${index === 0 ? 'active' : ''}"
                        ${index === 0 ? 'aria-current="true"' : ''}>
                </button>
            `).join('')}
        </div>

        <!-- Tombol sebelumnya -->
        <button class="carousel-control-prev"
                type="button"
                data-bs-target="#${id}"
                data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>

        <!-- Tombol berikutnya -->
        <button class="carousel-control-next"
                type="button"
                data-bs-target="#${id}"
                data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    `;
}