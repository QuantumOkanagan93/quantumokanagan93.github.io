// More reliable animation approach
document.addEventListener('DOMContentLoaded', function() {
    // First, set a small timeout to ensure all DOM elements are ready
    setTimeout(initAnimations, 100);
});

function initAnimations() {
    const header = document.querySelector('.header-container h1');
    const tagline = document.querySelector('.header-container .tagline');
    const links = document.querySelectorAll('.link-selection');
    const profileImg = document.querySelector('.profile-img');
    const paragraph = document.querySelector('.main-section p');
    const skillsLabel = document.querySelector('.skills-label');
    const skills = document.querySelectorAll('.skill');
    
    // Animate header
    setTimeout(() => {
        if (header) header.classList.add('animate-in');
    }, 300);
    
    // Animate tagline
    setTimeout(() => {
        if (tagline) tagline.classList.add('animate-in');
    }, 600);
    
    // Animate links with delay
    links.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add('animate-in');
        }, 900 + (index * 150));
    });
    
    // Animate profile image
    setTimeout(() => {
        if (profileImg) profileImg.classList.add('animate-in');
    }, 1400);
    
    // Animate paragraph
    setTimeout(() => {
        if (paragraph) paragraph.classList.add('animate-in');
    }, 1800);
    
    // Animate skills label
    setTimeout(() => {
        if (skillsLabel) skillsLabel.classList.add('animate-in');
    }, 2200);
    
    // Animate skills
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.classList.add('animate-in');
        }, 2400 + (index * 100));
    });
}
