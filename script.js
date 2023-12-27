document.addEventListener('DOMContentLoaded', function () {
    const magicButton = document.getElementById('magicButton');
    const catContainer = document.getElementById('catContainer');
    const videoContainer = document.getElementById('videoContainer');

    magicButton.addEventListener('click', function () {
        createFastMovingCats();
        showCatVideo();
    });

    function createFastMovingCats() {
        for (let i = 0; i < 50; i++) {
            createFastMovingCat('cat1.gif');
            createFastMovingCat('cat2.gif');
            createFastMovingCat('cat3.gif');
        }
    }

    function createFastMovingCat(catImage) {
        const cat = document.createElement('img');
        cat.src = catImage;
        cat.classList.add('fastMovingCat');
    
        // Set random starting position
        cat.style.left = Math.random() * window.innerWidth + 'px';
        cat.style.top = Math.random() * window.innerHeight + 'px';
        
        // Adjust size for smaller screens
        if (window.innerWidth <= 768) {
            cat.style.width = '100px';
            cat.style.height = 'auto';
        }
    
        // Append cat to the container
        catContainer.appendChild(cat);
    
        // Update cat position on each frame
        const updateCatPosition = () => {
            const deltaX = (Math.random() - 0.5) * 10; // Random horizontal speed
            const deltaY = (Math.random() - 0.5) * 10; // Random vertical speed
    
            const currentLeft = parseFloat(cat.style.left);
            const currentTop = parseFloat(cat.style.top);
    
            cat.style.left = currentLeft + deltaX + 'px';
            cat.style.top = currentTop + deltaY + 'px';
    
            // Wrap around the screen if the cat goes out of bounds
            if (currentLeft < -cat.width) cat.style.left = window.innerWidth + 'px';
            if (currentTop < -cat.height) cat.style.top = window.innerHeight + 'px';
            if (currentLeft > window.innerWidth) cat.style.left = -cat.width + 'px';
            if (currentTop > window.innerHeight) cat.style.top = -cat.height + 'px';
    
            requestAnimationFrame(updateCatPosition);
        };
    
        updateCatPosition();
    }
    
    // ...

    function showCatVideo() {
        videoContainer.innerHTML = '<div id="videoWrapper"><video autoplay loop ><source src="cat-video.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>';
        videoContainer.style.display = 'block';
    }

    // ...
});
