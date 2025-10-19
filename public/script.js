document.addEventListener('DOMContentLoaded', () => {
  const videoFeed = document.getElementById('video-feed');

  fetch('/api/videos')
    .then(response => response.json())
    .then(videos => {
      videos.forEach(videoData => {
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';

        const videoElement = document.createElement('video');
        videoElement.src = videoData.url;
        videoElement.autoplay = true;
        videoElement.muted = true; // Muted by default to allow autoplay in most browsers
        videoElement.loop = true;
        videoElement.playsInline = true; // Important for iOS

        // Play/pause on click
        videoElement.addEventListener('click', () => {
          if (videoElement.paused) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        });

        const videoInfo = document.createElement('div');
        videoInfo.className = 'video-info';
        videoInfo.innerHTML = `
          <h2>${videoData.title}</h2>
          <p>${videoData.description}</p>
        `;

        videoContainer.appendChild(videoElement);
        videoContainer.appendChild(videoInfo);
        videoFeed.appendChild(videoContainer);
      });
    })
    .catch(error => {
      console.error('Error fetching videos:', error);
      videoFeed.innerHTML = '<p>Could not load videos. Please try again later.</p>';
    });
});
