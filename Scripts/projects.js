document.addEventListener('DOMContentLoaded', () => {
    // Animate header elements
    const mainHeading = document.getElementById('main-heading');
    const tagline = document.getElementById('tagline');
    
    setTimeout(() => {
        mainHeading.classList.add('animate-in');
    }, 100);
    
    setTimeout(() => {
        tagline.classList.add('animate-in');
    }, 400);

    // Project buttons functionality
    const projectButtons = document.querySelectorAll('.project-btn');

    projectButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const details = btn.nextElementSibling;

            // Close any open project details
            document.querySelectorAll('.project-details.show').forEach(openDetail => {
                if (openDetail !== details) {
                    openDetail.classList.remove('show');
                    openDetail.previousElementSibling.classList.remove('active');
                }
            });

            // Toggle active state for clicked button
            btn.classList.toggle('active');
            details.classList.toggle('show');
        });
    });
});
