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
