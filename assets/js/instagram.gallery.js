document.addEventListener('DOMContentLoaded', function() {
    // Define the path to your images folder
    const imagePath = 'assets/images/pic/';
    
    // Generate image filenames from a range ((1).jpg to (70).jpg)
    const imageFiles = [];
    const startNumber = 1;
    const endNumber = 70; // Change this to match your actual number of images
    
    for (let i = startNumber; i <= endNumber; i++) {
        imageFiles.push(`(${i}).jpg`);
    }
    
    // Get full image paths
    const imagePaths = imageFiles.map(file => imagePath + file);
    
    // Shuffle the array to get random images
    const shuffledImages = [...imagePaths].sort(() => 0.5 - Math.random());
    
    const galleryElement = document.getElementById('instagramGallery');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playPauseIcon = document.getElementById('playPauseIcon');
    
    // Number of items to show initially and after load more
    const isMobile = window.innerWidth < 768;
    const itemsPerRow = isMobile ? 2 : 3;
    let visibleRows = 3; // Start with 3 rows
    const rowsToAdd = 3; // Add 3 rows when load more is clicked
    
    // Slideshow state
    let isPlaying = true;
    let slideshowInterval = null;
    
    // Initialize gallery
    function renderGallery() {
        // Clear gallery
        galleryElement.innerHTML = '';
        
        // Calculate number of items to show
        const itemsToShow = itemsPerRow * visibleRows;
        
        // Create gallery items
        for (let i = 0; i < itemsToShow && i < shuffledImages.length; i++) {
            const item = createGalleryItem(shuffledImages[i]);
            galleryElement.appendChild(item);
        }
        
        // Hide load more button if all images are shown
        if (itemsToShow >= shuffledImages.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
    }
    
    // Create a gallery item
    function createGalleryItem(imageUrl) {
        const item = document.createElement('div');
        item.className = 'instagram-item';
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'CARGO EMPIRE Instagram';
        img.onerror = function() {
            // If image fails to load, try another random image
            const randomIndex = Math.floor(Math.random() * imagePaths.length);
            this.src = imagePaths[randomIndex];
        };
        
        item.appendChild(img);
        
        // Add click event to redirect to Instagram
        item.addEventListener('click', function() {
            if (confirm('Would you like to visit our Instagram page?')) {
                window.open('https://instagram.com/cargo_empire', '_blank');
            }
        });
        
        return item;
    }
    
    // Start slideshow
    function startSlideshow() {
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
        }
        
        slideshowInterval = setInterval(updateRandomImages, 3500);
        isPlaying = true;
        playPauseIcon.className = 'fas fa-pause';
    }
    
    // Stop slideshow
    function stopSlideshow() {
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
            slideshowInterval = null;
        }
        isPlaying = false;
        playPauseIcon.className = 'fas fa-play';
    }
    
    // Update random images
    function updateRandomImages() {
        const items = galleryElement.querySelectorAll('.instagram-item');
        
        // Number of items to update at once
        const updateCount = isMobile ? 1 : 2;
        
        // Get random indices to update
        const indices = [];
        while (indices.length < updateCount && indices.length < items.length) {
            const randomIndex = Math.floor(Math.random() * items.length);
            if (!indices.includes(randomIndex)) {
                indices.push(randomIndex);
            }
        }
        
        // Update selected items
        indices.forEach(index => {
            const item = items[index];
            const img = item.querySelector('img');
            
            // Add fade-out class
            item.classList.add('fade-out');
            
            setTimeout(() => {
                // Get a new random image
                const randomImageIndex = Math.floor(Math.random() * imagePaths.length);
                img.src = imagePaths[randomImageIndex];
                
                // Remove fade-out and add fade-in
                item.classList.remove('fade-out');
                item.classList.add('fade-in');
                
                // Remove fade-in class after animation completes
                setTimeout(() => {
                    item.classList.remove('fade-in');
                }, 500);
            }, 500);
        });
    }
    
    // Load more button click handler
    loadMoreBtn.addEventListener('click', function() {
        visibleRows += rowsToAdd;
        renderGallery();
    });
    
    // Play/Pause button click handler
    playPauseBtn.addEventListener('click', function() {
        if (isPlaying) {
            stopSlideshow();
        } else {
            startSlideshow();
        }
    });
    
    // Initialize the gallery
    renderGallery();
    
    // Start the slideshow
    startSlideshow();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        const newIsMobile = window.innerWidth < 768;
        if (isMobile !== newIsMobile) {
            // Reset and re-render if mobile state changed
            visibleRows = 3;
            renderGallery();
            
            // Restart slideshow if it was playing
            if (isPlaying) {
                startSlideshow();
            }
        }
    });
});