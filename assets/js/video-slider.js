document.addEventListener('DOMContentLoaded', function() {
    // Define the path to your videos folder
    const videoPath = 'assets/images/pic/';
    
    // List of video filenames in your folder - update these with your actual video filenames
    const videoFiles = [
        '(1).mp4',
        '(2).mp4',
        '(3).mp4',
        '(4).mp4',
        '(5).mp4'
    ];
    
    // List of thumbnail images for videos - create these thumbnails from your videos
    const thumbnails = [
        'video1-thumb.jpg',
        'video2-thumb.jpg',
        'video3-thumb.jpg',
        'video4-thumb.jpg',
        'video5-thumb.jpg'
    ];
    
    // Video information - update with your actual video details
    const videoInfo = [
        { title: 'Cargo Loading Process', description: 'See how we efficiently load cargo for transport' },
        { title: 'Air Freight Operations', description: 'Our air freight services in action' },
        { title: 'Warehouse Management', description: 'Inside look at our warehouse operations' },
        { title: 'Delivery Fleet', description: 'Our delivery vehicles on the road' },
        { title: 'International Shipping', description: 'How we handle international cargo' }
    ];
    
    // Get the slider container
    const sliderContainer = document.querySelector('#videoSlider .swiper-wrapper');
    
    // Create video slides with custom controls
    videoFiles.forEach((videoFile, index) => {
        // Use a thumbnail if available, otherwise use a default image
        const thumbnailSrc = thumbnails[index] ? videoPath + thumbnails[index] : 'assets/images/resources/video-placeholder.jpg';
        
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        const info = videoInfo[index] || { 
            title: 'Cargo Empire Operations', 
            description: 'See our logistics services in action' 
        };
        
        slide.innerHTML = `
            <div class="video-slide">
                <div class="video-container">
                    <video id="video-${index}" poster="${thumbnailSrc}">
                        <source src="${videoPath}${videoFile}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="video-custom-controls">
                        <button class="video-play-btn" data-video-id="${index}">
                            <i class="fa fa-play"></i>
                        </button>
                    </div>
                </div>
                <div class="video-info">
                    <h3 class="video-title">${info.title}</h3>
                    <p class="video-description">${info.description}</p>
                </div>
            </div>
        `;
        
        sliderContainer.appendChild(slide);
    });
    
    // Initialize Swiper with explicit settings for single slide view
    const videoSwiper = new Swiper('#videoSlider', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 6500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
        },
        on: {
            init: function() {
                console.log('Swiper initialized with 1 slide per view');
            },
            slideChange: function() {
                // Pause all videos when slide changes
                pauseAllVideos();
            }
        }
    });
    
    // Function to pause all videos
    function pauseAllVideos() {
        document.querySelectorAll('video').forEach((video, idx) => {
            video.pause();
            updatePlayButton(idx, false);
        });
    }
    
    // Function to update play button icon
    function updatePlayButton(videoId, isPlaying) {
        const button = document.querySelector(`.video-play-btn[data-video-id="${videoId}"]`);
        if (button) {
            const icon = button.querySelector('i');
            if (icon) {
                icon.className = isPlaying ? 'fa fa-pause' : 'fa fa-play';
            }
        }
    }
    
    // Handle play button clicks
    document.addEventListener('click', function(e) {
        const playBtn = e.target.closest('.video-play-btn');
        if (playBtn) {
            const videoId = playBtn.getAttribute('data-video-id');
            const video = document.getElementById(`video-${videoId}`);
            
            if (video) {
                if (video.paused) {
                    // Pause all other videos first
                    pauseAllVideos();
                    
                    // Play this video
                    video.play();
                    updatePlayButton(videoId, true);
                    
                    // Stop autoplay while video is playing
                    videoSwiper.autoplay.stop();
                } else {
                    // Pause this video
                    video.pause();
                    updatePlayButton(videoId, false);
                    
                    // Resume autoplay
                    videoSwiper.autoplay.start();
                }
            }
        }
    });
    
    // Handle video end events
    document.querySelectorAll('video').forEach((video, idx) => {
        video.addEventListener('ended', function() {
            updatePlayButton(idx, false);
            videoSwiper.autoplay.start();
        });
    });
});