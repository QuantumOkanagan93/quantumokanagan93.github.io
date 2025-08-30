document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header-container h1');
    const links = document.querySelectorAll('.link-selection');
    const profileImg = document.querySelector('.profile-img');

    // Animate header
    header.style.opacity = '0';
    header.style.transform = 'translateY(-20px)';

    setTimeout(() => {
        header.style.transition = 'opacity 1s ease, transform 1s ease';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 300);

    // Animate links with delay
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-10px)';

        setTimeout(() => {
            link.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 500 + (index * 200));
    });

    // Animate profile image
    profileImg.style.opacity = '0';
    profileImg.style.transform = 'scale(0.8)';

    setTimeout(() => {
        profileImg.style.transition = 'opacity 1s ease, transform 1s ease';
        profileImg.style.opacity = '1';
        profileImg.style.transform = 'scale(1)';
    }, 1000);
});
