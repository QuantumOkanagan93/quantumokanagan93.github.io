document.addEventListener('DOMContentLoaded', () => {
    const sectionCards = document.querySelectorAll(".section-card");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-modal, .close-model");

    // Open modal when card clicked
    sectionCards.forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = "block";
        });
    });

    // Close modal when X clicked
    closeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const modal = e.target.closest(".modal");
            if (modal) modal.style.display = "none";
        });
    });

    // Close modal when clicking outside modal content
    window.addEventListener("click", (e) => {
        modals.forEach(modal => {
            if (e.target === modal) modal.style.display = "none";
        });
    });

    // Close modal with Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modals.forEach(modal => modal.style.display = "none");
        }
    });

    // Animate header and section cards
    const animateElements = [...document.querySelectorAll(".about-header h1, .about-header p, .section-card")];
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    animateElements.forEach(el => observer.observe(el));
});
