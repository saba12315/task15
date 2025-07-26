const faqs = document.querySelectorAll('.faq-item');

faqs.forEach((faq) => {
  const question = faq.querySelector('.faq-question');

  question.addEventListener('click', () => {
    // Close all other FAQs
    faqs.forEach((item) => {
      if (item !== faq) item.classList.remove('active');
    });

    // Toggle the clicked FAQ
    faq.classList.toggle('active');
  });
});

// Optional: ESC key closes all answers
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    faqs.forEach((faq) => faq.classList.remove('active'));
  }
});
