document.addEventListener('DOMContentLoaded', function() {
    const aboutTrigger = document.getElementById('aboutTrigger');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('closeBtn');
    const profileImg = document.querySelector('.profile-img');
    const typingText = document.getElementById('typing-text');
    
    // Typing effect with mistake simulation
    function typeWithMistake() {
        const text = "Micheal Egan: Web Developer & Programmer";
        const mistakeText = "Micheal Egan: Web Developex & Programmer";
        let i = 0;
        let isMistakeMade = false;
        
        function type() {
            if (i < mistakeText.length) {
                // Make a "mistake" at position 25-26 ("ex" instead of "er")
                if (i === 25 && !isMistakeMade) {
                    typingText.innerHTML = mistakeText.substring(0, i + 1);
                    i++;
                    setTimeout(type, 100);
                } else if (i === 26 && !isMistakeMade) {
                    typingText.innerHTML = mistakeText.substring(0, i + 1);
                    isMistakeMade = true;
                    i++;
                    // Pause at the mistake before correcting
                    setTimeout(backspace, 800);
                } else {
                    typingText.innerHTML = text.substring(0, i + 1);
                    i++;
                    setTimeout(type, 100);
                }
            }
        }
        
        function backspace() {
            if (i > 24) { // Backspace to before the mistake
                typingText.innerHTML = text.substring(0, i - 1);
                i--;
                setTimeout(backspace, 50);
            } else {
                // Continue typing correctly
                setTimeout(type, 300);
            }
        }
        
        type();
    }
    
    // Open modal when About Me is clicked
    aboutTrigger.addEventListener('click', function() {
        modalOverlay.classList.add('active');
        // Prevent body from scrolling when modal is open
        document.body.style.overflow = 'hidden';
    });
    
    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
        // Re-enable body scrolling
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside the modal content
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            // Re-enable body scrolling
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            // Re-enable body scrolling
            document.body.style.overflow = 'auto';
        }
    });
    
    // Fade in the profile image when it's loaded
    if (profileImg.complete) {
        profileImg.classList.add('loaded');
    } else {
        profileImg.addEventListener('load', function() {
            profileImg.classList.add('loaded');
        });
        
        // Fallback in case the load event doesn't fire
        setTimeout(function() {
            profileImg.classList.add('loaded');
        }, 1000);
    }
    
    // Start the typing effect
    setTimeout(typeWithMistake, 500);
});