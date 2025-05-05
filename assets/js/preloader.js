document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    const progressBar = document.querySelector('.preloader__progress-bar');
    const body = document.body;
    
    // Immediately add no-scroll class
    body.classList.add('body-no-scroll');
    
    // Simulate loading progress (replace with actual loading events)
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) progress = 100;
        progressBar.style.width = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('preloader--hidden');
                body.classList.remove('body-no-scroll');
                
                // Remove preloader from DOM after animation completes
                setTimeout(() => {
                    preloader.remove();
                }, 600);
            }, 500); // Additional delay for smooth transition
        }
    }, 100);
    
    // Fallback in case something goes wrong
    setTimeout(() => {
        clearInterval(interval);
        preloader.classList.add('preloader--hidden');
        body.classList.remove('body-no-scroll');
        setTimeout(() => preloader.remove(), 600);
    }, 4000); // Maximum 4 seconds loading time
});