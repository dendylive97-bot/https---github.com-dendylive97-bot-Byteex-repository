
// FAQ accordion
document.addEventListener('DOMContentLoaded', function () {
	const faqItems = document.querySelectorAll('.faq-item');
	faqItems.forEach(item => {
		const question = item.querySelector('.faq-question');
		const answer = item.querySelector('.faq-answer');
		question.addEventListener('click', () => {
			const isOpen = answer.style.display === 'block';
			// Закрити всі
			document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
			if (!isOpen) {
				answer.style.display = 'block';
			}
		});
	});

	// Плавний скрол до секції по кнопках "Customize Your Outfit"
	document.querySelectorAll('.btn-primary').forEach(btn => {
		btn.addEventListener('click', (e) => {
			// Якщо є секція hero, скролимо до неї
			const hero = document.querySelector('.hero');
			if (hero) {
				hero.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
});
