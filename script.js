const partnersTrack = document.querySelector('.partners-track');
const partnersDots = document.querySelectorAll('.partners-dots button');

if (partnersTrack && partnersDots.length) {
    partnersDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            partnersTrack.style.transform = `translateX(-${index * 33.333}%)`;

            partnersDots.forEach(item => item.classList.remove('active'));
            dot.classList.add('active');
        });
    });
}

const galleryImages = [
    'images/Model1.png',
    'images/Model1miror.png',
    'images/Model1.png',
    'images/Model1miror.png',
    'images/Model1.png',
    'images/Model1miror.png',
    'images/Model1.png',
    'images/Model1miror.png'
];

const galleryMainImage = document.querySelector('.gallery-main-image');
const galleryThumbs = document.querySelectorAll('.gallery-thumbnails button');
const galleryPrev = document.querySelector('.gallery-arrow-prev');
const galleryNext = document.querySelector('.gallery-arrow-next');

let galleryIndex = 0;

function updateGallery(index) {
    if (!galleryMainImage || !galleryThumbs.length) {
        return;
    }

    galleryIndex = index;
    galleryMainImage.src = galleryImages[galleryIndex];

    galleryThumbs.forEach(item => item.classList.remove('active'));
    galleryThumbs[galleryIndex].classList.add('active');
}

if (galleryMainImage && galleryThumbs.length && galleryPrev && galleryNext) {
    galleryThumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            updateGallery(index);
        });
    });

    galleryPrev.addEventListener('click', () => {
        const newIndex = galleryIndex === 0 ? galleryImages.length - 1 : galleryIndex - 1;
        updateGallery(newIndex);
    });

    galleryNext.addEventListener('click', () => {
        const newIndex = galleryIndex === galleryImages.length - 1 ? 0 : galleryIndex + 1;
        updateGallery(newIndex);
    });
}
